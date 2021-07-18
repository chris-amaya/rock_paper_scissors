import './ScoreBoard.css'
import {ReactComponent as ScoreBoardSVG} from '../../assets/img/logo.svg';
import { useEffect, useState } from 'react';

const ScoreBoard = ({score}) => {
    
    return (
        <div>
            <div className="scoreBoard">
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