import { useState } from 'react';
import './App.css';
import Battle from './components/battle/Battle';
import RulesButton from './components/rulesButton/RulesButton'
import RulesModal from './components/rulesModal/RulesModal';
import ScoreBoard from './components/scoreBoard/ScoreBoard';
import UserSelection from './components/userSelection/UserSelection';

function App() {

  const [rulesModal, setRulesModal] = useState(false);
  const [userSelection, setUserSelection] = useState()

  const toggleRulesDialog = () => setRulesModal(!rulesModal);

  return (
    <div className="App">
      <ScoreBoard style={{"margin-top": '10px'}} />
      <Battle userSelection={userSelection} />
      {/* <UserSelection setUserSelection={setUserSelection} /> */}
      <RulesModal on={rulesModal} setRulesModal={toggleRulesDialog} />
      <RulesButton toggleRulesDialog={toggleRulesDialog} />
    </div>
  );
}

export default App;
