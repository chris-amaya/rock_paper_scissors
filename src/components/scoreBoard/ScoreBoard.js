import './ScoreBoard.css'
import {ReactComponent as ScoreBoardSVG} from '../../assets/img/logo.svg';

const ScoreBoard = () => {

    return (
        <div>
            <div className="scoreBoard">
                <div>
                    <ScoreBoardSVG />
                </div>

                <div className="score">
                    <h2>SCORE</h2>
                    <p>12</p>
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard;