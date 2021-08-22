import {useState} from 'react'
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

function App() {
  const [gameMode, setGameMode] = useState()
  const [gameVariation, setGameVariation] = useState()
  const [codeRoom, setCodeRoom] = useState()
  const [userName, setUserName] = useState('')
  const [userSelection, setUserSelection] = useState()
  const [score, setScore] = useState(0)
  const [rulesModal, setRulesModal] = useState(false)
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

  const valueGameContext = {
    gameMode,
    gameVariation,
    codeRoom,
    setCodeRoom,
    userName,
    setUserName,
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
