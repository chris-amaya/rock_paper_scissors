import { useState } from "react";
import "./App.css";
import Battle from "./components/Battle/Battle";
import Menu from "./components/Menu/Menu";
import RulesButton from "./components/Rules/RulesButton";
import RulesModal from "./components/Rules/RulesModal";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import UserSelection from "./components/UserSelection/UserSelection";

function App() {
  const [rulesModal, setRulesModal] = useState(false);
  const [userSelection, setUserSelection] = useState();
  const [score, setScore] = useState(0);
  const [gameType, setGameType] = useState();
  const [modeOption, setModeOption] = useState();
  const [userName, setUserName] = useState("");
  const [codeRoom, setCodeRoom] = useState();

  const toggleRulesDialog = () => setRulesModal(!rulesModal);
  const resetGame = () => {
    setUserSelection();
  };

  return (
    <div className="App container">
      <ScoreBoard
        score={score}
        style={{ "margin-top": "10px" }}
        gameType={gameType}
      />
      {userSelection && (
        <Battle
          userSelection={userSelection}
          score={score}
          setScore={setScore}
          resetGame={resetGame}
          gameType={gameType}
        />
      )}
      {!userSelection && (
        <UserSelection
          setUserSelection={setUserSelection}
          gameType={gameType}
        />
      )}
      <RulesModal
        on={rulesModal}
        setRulesModal={toggleRulesDialog}
        gameType={gameType}
      />
      <RulesButton toggleRulesDialog={toggleRulesDialog} />
      {!gameType && (
        <Menu
          setGameType={setGameType}
          setModeOption={setModeOption}
          modeOption={modeOption}
          setUserName={setUserName}
          setCodeRoom={setCodeRoom}
          codeRoom={codeRoom}
          userName={userName}
        />
      )}
    </div>
  );
}

export default App;
