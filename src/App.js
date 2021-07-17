import { useState } from 'react';
import './App.css';
import Index from './components/Index';
import RulesButton from './components/rulesButton/RulesButton'
import RulesModal from './components/rulesModal/RulesModal';
import Selection from './components/selection/Selection';

function App() {

  const [rulesModal, setRulesModal] = useState(false);
  const [userSelection, setUserSelection] = useState()

  const toggleRulesDialog = () => setRulesModal(!rulesModal);

  return (
    <div className="App">
      <Index />
      <Selection setUserSelection={setUserSelection} />
      <RulesModal on={rulesModal} setRulesModal={toggleRulesDialog} />
      <RulesButton toggleRulesDialog={toggleRulesDialog} />
    </div>
  );
}

export default App;
