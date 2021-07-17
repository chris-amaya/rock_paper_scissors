import { useState } from 'react';
import './App.css';
import Index from './components/Index';
import RulesButton from './components/rulesButton/RulesButton'
import RulesModal from './components/rulesModal/RulesModal';

function App() {

  const [rulesModal, setRulesModal] = useState(false);

  function toggleRulesDialog() {
    setRulesModal(!rulesModal)
  }

  return (
    <div className="App">
      <Index />
      <RulesModal on={rulesModal} setRulesModal={toggleRulesDialog} />
      <RulesButton toggleRulesDialog={toggleRulesDialog} />
    </div>
  );
}

export default App;
