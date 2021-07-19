import './ScoreBoard.css'
import {ReactComponent as ScoreBoardSVG } from '../../assets/img/logo.svg';
import {ReactComponent as BonusScoreSVG } from '../../assets/img/logo-bonus.svg';

const ScoreBoard = ({score, gameType}) => {
    
    return (
        <div className="scoreBoard">
            <div>
                <div>
                    {gameType === 'default' ? <ScoreBoardSVG /> : <BonusScoreSVG />}
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