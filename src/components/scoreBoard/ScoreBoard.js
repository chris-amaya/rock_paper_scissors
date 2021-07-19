import './ScoreBoard.css'
import {ReactComponent as ScoreBoardSVG} from '../../assets/img/logo.svg';

const ScoreBoard = ({score}) => {
    
    return (
        <div className="scoreBoard">
            <div>
                <div>
                    <ScoreBoardSVG />
                </div>

                <div className="score">
                    <h2>SCORE</h2>
                    <p>{score}</p>
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard;