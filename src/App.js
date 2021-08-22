import {useState} from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './App.css'
import Battle from './components/Battle/Battle'
import Menu from './components/Menu/Menu'
import ScoreBoard from './components/ScoreBoard/ScoreBoard'
import UserSelection from './components/UserSelection/UserSelection'
import {GameContext} from './context/GameContext'

function App() {
  const [gameVariation, setGameVariation] = useState()
  const [gameMode, setGameMode] = useState()
  const [userSelection, setUserSelection] = useState()
  const [score, setScore] = useState(0)
  const [gameType, setGameType] = useState()
  const [userName, setUserName] = useState('')
  const [codeRoom, setCodeRoom] = useState()
  const [rulesModal, setRulesModal] = useState(false)

  const toggleRulesDialog = () => setRulesModal(!rulesModal)
  const resetGame = () => {
    setUserSelection()
  }

  const valueGameContext = {
    gameMode,
    gameVariation,
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
