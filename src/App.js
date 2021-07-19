import { useState } from 'react';
import './App.css';
import Battle from './components/battle/Battle';
import RulesButton from './components/rulesButton/RulesButton'
import RulesModal from './components/rulesModal/RulesModal';
import ScoreBoard from './components/scoreBoard/ScoreBoard';
import UserSelection from './components/userSelection/UserSelection';

function App() {

  const [rulesModal, setRulesModal] = useState(false);
  const [userSelection, setUserSelection] = useState();
  const [score, setScore] = useState(0);

  const toggleRulesDialog = () => setRulesModal(!rulesModal);
  const resetGame = () => {
    setUserSelection();
  }

  return (
    <div className="App container">
      <ScoreBoard score={score}  style={{"margin-top": '10px'}} />
      {userSelection && <Battle userSelection={userSelection} score={score} setScore={setScore} resetGame={resetGame}/>}
      {!userSelection && <UserSelection setUserSelection={setUserSelection} />}
      <RulesModal on={rulesModal} setRulesModal={toggleRulesDialog} />
      <RulesButton toggleRulesDialog={toggleRulesDialog} />
    </div>
  );
}

export default App;
