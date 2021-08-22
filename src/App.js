import {useState} from 'react'
import {Route, Router, Switch} from 'react-router-dom'
import './App.css'
import Battle from './components/Battle/Battle'
import Menu from './components/Menu/Menu'
import RulesButton from './components/Rules/RulesButton'
import RulesModal from './components/Rules/RulesModal'
import ScoreBoard from './components/ScoreBoard/ScoreBoard'
import UserSelection from './components/UserSelection/UserSelection'

function AppWrapper() {
  ;<Router>
    <App />
  </Router>
}

function App() {
  const [rulesModal, setRulesModal] = useState(false)
  const [userSelection, setUserSelection] = useState()
  const [score, setScore] = useState(0)
  const [gameType, setGameType] = useState()
  const [modeOption, setModeOption] = useState()
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
          <Menu setModeOption={setModeOption} setGameType={setGameType} />
        </Route>
      </Switch>
    </div>
  )
}

export default AppWrapper
