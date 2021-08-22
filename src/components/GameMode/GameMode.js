import React from 'react'
import {useHistory} from 'react-router-dom'

const GameMode = ({setGameMode}) => {
  const history = useHistory()

  function handleGameMode(value) {
    setGameMode(value)
    if (value === 'PC') {
      history.push('/variation')
    } else {
      history.push('/multiplayer')
    }
  }

  return (
    <div>
      <div>
        <h2>Select either to play against the PC or multiplayer</h2>
      </div>

      <div className="buttons">
        <button onClick={() => handleGameMode('PC')}>PC</button>
        <button onClick={() => handleGameMode('MULTIPLAYER')}>
          Multiplayer
        </button>
      </div>
    </div>
  )
}

export default GameMode
