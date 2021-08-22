import './ScoreBoard.css'
import {ReactComponent as ScoreBoardSVG} from '../../assets/img/logo.svg'
import {ReactComponent as BonusScoreSVG} from '../../assets/img/logo-bonus.svg'

const ScoreBoard = ({score, gameVariation}) => {
  return (
    <div className="scoreBoard">
      <div>
        <div>
          {gameVariation === 'default' ? <ScoreBoardSVG /> : <BonusScoreSVG />}
        </div>

        <div className="score">
          <h2>SCORE</h2>
          <p>{score}</p>
        </div>
      </div>
    </div>
  )
}

export default ScoreBoard
