const GameVariation = ({setGameType}) => {
  return (
    <div>
      <div>
        <h2>Select Which Version You Wanna Play</h2>
      </div>

      <div className="buttons">
        <button onClick={() => setGameType('default')}>
          Rock, Paper, Scissors
        </button>
        <button onClick={() => setGameType('bonus')}>
          Rock, Paper, Scissors, Lizard, Spock
        </button>
      </div>
    </div>
  )
}
