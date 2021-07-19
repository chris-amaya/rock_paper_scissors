import { useState } from 'react';
import './App.css';
import Battle from './components/battle/Battle';
import Menu from './components/menu/Menu';
import RulesButton from './components/rulesButton/RulesButton'
import RulesModal from './components/rulesModal/RulesModal';
import ScoreBoard from './components/scoreBoard/ScoreBoard';
import UserSelection from './components/userSelection/UserSelection';

function App() {

  const [rulesModal, setRulesModal] = useState(false);
  const [userSelection, setUserSelection] = useState();
  const [score, setScore] = useState(0);
  const [gameType, setGameType] = useState();

  const toggleRulesDialog = () => setRulesModal(!rulesModal);
  const resetGame = () => {
    setUserSelection();
  }

  return (
    <div className="App container">
      <ScoreBoard score={score}  style={{"margin-top": '10px'}} gameType={gameType} />
      {userSelection && <Battle userSelection={userSelection} score={score} setScore={setScore} resetGame={resetGame} gameType={gameType}/>}
      {!userSelection && <UserSelection setUserSelection={setUserSelection} gameType={gameType} />}
      <RulesModal on={rulesModal} setRulesModal={toggleRulesDialog} gameType={gameType} />
      <RulesButton toggleRulesDialog={toggleRulesDialog} />
      {!gameType && <Menu setGameType={setGameType} />}
    </div>
  );
}

export default App;
