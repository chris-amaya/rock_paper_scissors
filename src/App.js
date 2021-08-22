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
  const history = useHistory()

  const toggleRulesDialog = () => setRulesModal(!rulesModal)
  const resetGame = () => {
    setUserSelection()
    if (gameMode === 'PC') {
      history.push('/selection')
    }

    if (gameMode === 'MULTIPLAYER') {
      History.push('/multiplayer/selection')
    }
  }

  useEffect(() => {
    socket.on('start-game', ({opponent: opponentData, variation}) => {
      setOpponentData(opponentData)
      console.log(opponentData)
      setGameVariation(variation)
      history.push('/multiplayer/selection')
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
