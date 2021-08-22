import {useState} from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './App.css'
import Battle from './components/Battle/Battle'
import Menu from './components/Menu/Menu'
import MainMultiplayer from './components/Multiplayer/main.multiplayer'
import RulesButton from './components/Rules/RulesButton'
import RulesModal from './components/Rules/RulesModal'
import ScoreBoard from './components/ScoreBoard/ScoreBoard'
import UserSelection from './components/UserSelection/UserSelection'

function App() {
  const [rulesModal, setRulesModal] = useState(false)
  const [userSelection, setUserSelection] = useState()
  const [score, setScore] = useState(0)
  const [gameType, setGameType] = useState()
  const [gameMode, setGameMode] = useState()
  const [userName, setUserName] = useState('')
  const [codeRoom, setCodeRoom] = useState()

  const toggleRulesDialog = () => setRulesModal(!rulesModal)
  const resetGame = () => {
    setUserSelection()
  }

  return (
    <div className="App container">
      <Switch>
        <Route path="/selection">
          <ScoreBoard score={score} gameType={gameType} />
          <UserSelection setUserSelection={setUserName} />
        </Route>
        <Route path="/">
          <Menu setGameMode={setGameMode} setGameType={setGameType} />
        </Route>
      </Switch>
    </div>
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
