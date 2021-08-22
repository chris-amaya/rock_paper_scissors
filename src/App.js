import {useEffect, useState} from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useHistory,
} from 'react-router-dom'
import './App.css'
import Battle from './components/Battle/Battle'
import Menu from './components/Menu/Menu'
import BattleMultiplayer from './components/Multiplayer/BattleMultiplayer'
import ScoreBoardMultiplayer from './components/Multiplayer/ScoreBoard/ScoreBoard.multiplayer'
import ScoreBoard from './components/ScoreBoard/ScoreBoard'
import UserSelection from './components/UserSelection/UserSelection'
import {GameContext} from './context/GameContext'

const io = require('socket.io-client')

const socket = io('http://localhost:8080', {transports: ['websocket']})
socket.on('connect', () => {
  console.log(socket.id) // x8WIv7-mJelg7on_ALbx
})

function App() {
  const [gameMode, setGameMode] = useState()
  const [gameVariation, setGameVariation] = useState()
  const [codeRoom, setCodeRoom] = useState()
  const [userName, setUserName] = useState('')
  const [userSelection, setUserSelection] = useState()
  const [score, setScore] = useState(0)
  const [rulesModal, setRulesModal] = useState(false)
  const [opponentData, setOpponentData] = useState()
  const [winner, setWinner] = useState()
  const [winnerText, setWinnerText] = useState()
  const history = useHistory()

  const toggleRulesDialog = () => setRulesModal(!rulesModal)
  const resetGame = () => {
    if (gameMode === 'PC') {
      history.push('/selection')
    }

    setWinnerText(`waiting for ${opponentData.userName} to reset the game...`)
    socket.emit('reset-game', {codeRoom})
  }

  useEffect(() => {
    socket.on('continue-game', () => {
      setUserSelection()
      setWinnerText()
      setOpponentData((data) => ({...data, selection: null}))
      setWinner()
      history.push('/multiplayer/selection')
    })
  }, [socket])

  useEffect(() => {
    socket.on('start-game', ({opponent: opponentData, variation}) => {
      console.log('setting opponent', opponentData)
      setOpponentData(opponentData)
      setGameVariation(variation)
      history.push('/multiplayer/selection')
    })
  }, [socket])

  useEffect(() => {
    socket.on('user-has-selected', ({selection}) => {
      setOpponentData((data) => ({
        ...data,
        selection,
      }))
    })
  }, [socket])

  useEffect(() => {
    socket.on('score', (users) => {
      console.log('score received', users)
      users.forEach((user) => {
        if (socket.id === user.id) {
          setScore(user.score)
        } else {
          setOpponentData((data) => ({...data, score: user.score}))
        }
      })
    })
  }, [socket])

  useEffect(() => {
    socket.on('winner', (winner) => {
      console.log('winner received', winner)
      if (winner === 'TIE') {
        setWinner('NONE')
        setWinnerText('TIE')
        return
      }

      if (socket.id === winner.id) {
        setWinner('ME')
        setWinnerText('YOU WIN')
      } else {
        console.log('setting winnner opponent', winner)
        setWinner('OPPONENT')
        setWinnerText(`${winner.userName} WINS`)
      }
    })
  }, [socket])

  const valueGameContext = {
    gameMode,
    gameVariation,
    codeRoom,
    setCodeRoom,
    userName,
    setUserName,
    socket,
    opponent: opponentData,
    winner,
    winnerText,
    resetGame,
    userSelection,
  }

  return (
    <GameContext.Provider value={valueGameContext}>
      <div className="App container">
        <Switch>
          <Route path="/battle">
            <ScoreBoard score={score} gameVariation={gameVariation} />
            <Battle
              userSelection={userSelection}
              setScore={setScore}
              resetGame={resetGame}
              gameVariation={gameVariation}
            />
          </Route>
          <Route path="/selection">
            <ScoreBoard score={score} gameVariation={gameVariation} />
            <UserSelection
              setUserSelection={setUserSelection}
              gameVariation={gameVariation}
            />
          </Route>
          <Route path="/multiplayer/battle">
            <ScoreBoardMultiplayer
              score={score}
              gameVariation={gameVariation}
              opponent={opponentData}
            />
            <BattleMultiplayer />
          </Route>
          <Route path="/multiplayer/selection">
            <ScoreBoardMultiplayer
              score={score}
              gameVariation={gameVariation}
              opponent={opponentData}
            />
            <UserSelection
              setUserSelection={setUserSelection}
              gameVariation={gameVariation}
            />
          </Route>
          <Route path="/">
            <Menu
              setGameMode={setGameMode}
              setGameVariation={setGameVariation}
            />
          </Route>
        </Switch>
      </div>
    </GameContext.Provider>
  )
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper
