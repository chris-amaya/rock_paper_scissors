import React from 'react'

const GameMode = ({setModeOption}) => {
  return (
    <div>
      <div>
        <h2>Select either to play against the PC or multiplayer</h2>
      </div>

      <div className="buttons">
        <button onClick={() => setModeOption('PC')}>PC</button>
        <button onClick={() => setModeOption('MULTIPLAYER')}>
          Multiplayer
        </button>
      </div>
    </div>
  )
}

export default GameMode
