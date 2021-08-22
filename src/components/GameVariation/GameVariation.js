import {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {GameContext} from '../../context/GameContext'

const GameVariation = ({setGameVariation}) => {
  const {gameMode} = useContext(GameContext)
  const history = useHistory()

  function handleGameVariation(value) {
    setGameVariation(value)

    if (gameMode === 'PC') {
      history.push('/selection')
    }

    if (gameMode === 'MULTIPLAYER') {
      history.push('/multiplayer/create-room')
    }
  }

  return (
    <div>
      <div>
        <h2>Select Which Version You Wanna Play</h2>
      </div>

      <div className="buttons">
        <button onClick={() => handleGameVariation('default')}>
          Rock, Paper, Scissors
        </button>
        <button onClick={() => handleGameVariation('bonus')}>
          Rock, Paper, Scissors, Lizard, Spock
        </button>
      </div>
    </div>
  )
}

export default GameVariation
