import './ScoreBoard.css'
import {ReactComponent as ScoreBoardSVG} from '../../../assets/img/logo.svg'
import {ReactComponent as BonusScoreSVG} from '../../../assets/img/logo-bonus.svg'

const ScoreBoardMultiplayer = ({score, gameVariation, opponent}) => {
  return (
    <div className="scoreBoard">
      <div>
        <div>
          {gameVariation === 'default' ? <ScoreBoardSVG /> : <BonusScoreSVG />}
        </div>

        <div className="score">
          <h2>YOUR SCORE</h2>
          <p>{score}</p>
        </div>

        <div className="score">
          <h2>{`${opponent.userName} SCORE`}</h2>
          <p>{opponent.score}</p>
        </div>
      </div>
    </div>
  )
}

export default ScoreBoardMultiplayer
