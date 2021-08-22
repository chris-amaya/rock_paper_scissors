import React, {useContext} from 'react'
import Selection from '../../common/selection'
import {GameContext} from '../../context/GameContext'

export const BattleMultiplayer = () => {
  const {opponent, winner, winnerText, resetGame, userSelection} =
    useContext(GameContext)

  const WinnerSection = ({winnerText, resetGame}) => {
    return (
      <div className="winner-section">
        <h2>{winnerText}</h2>
        <div>
          <button onClick={resetGame}>PLAY AGAIN</button>
        </div>
      </div>
    )
  }

  return (
    <div className="battle-container container">
      <div className="user-picked">
        <div>
          <h2>You Picked</h2>
        </div>
        <Selection
          selected={userSelection}
          winner={winner === 'ME' ? true : false}
        />
      </div>
      {winner && (
        <WinnerSection winnerText={winnerText} resetGame={resetGame} />
      )}
      <div className="adversary-picked">
        <div>
          <h2>
            {opponent.selection
              ? `${opponent.userName} has selected`
              : `${opponent.userName} is picking`}
          </h2>
        </div>
        {!opponent.selection && <div className="option option-waiting"></div>}
        {opponent.selection && (
          <Selection
            selected={opponent.selection}
            winner={winner === 'OPPONENT' ? true : false}
          />
        )}
      </div>
    </div>
  )
}

export default BattleMultiplayer
