import {useState} from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './App.css'
import Menu from './components/Menu/Menu'
import ScoreBoard from './components/ScoreBoard/ScoreBoard'
import UserSelection from './components/UserSelection/UserSelection'
import {GameContext} from './context/GameContext'

function App() {
  const [rulesModal, setRulesModal] = useState(false)
  const [userSelection, setUserSelection] = useState()
  const [score, setScore] = useState(0)
  const [gameType, setGameType] = useState()
  const [gameMode, setGameMode] = useState()
  const [userName, setUserName] = useState('')
  const [codeRoom, setCodeRoom] = useState()
  const [gameVariation, setGameVariation] = useState()

  const toggleRulesDialog = () => setRulesModal(!rulesModal)
  const resetGame = () => {
    setUserSelection()
  }

  const valueGameContext = {
    gameMode,
  }

  return (
    <GameContext.Provider value={valueGameContext}>
      <div className="App container">
        <Switch>
          <Route path="/selection">
            <ScoreBoard score={score} gameType={gameType} />
            <UserSelection setUserSelection={setUserName} />
          </Route>
          <Route path="/">
            <Menu setGameVariation={setGameVariation} />
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
