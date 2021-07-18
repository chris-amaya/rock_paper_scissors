import './Battle.css';
import Selection from '../../common/Selection';
import { useEffect, useState } from 'react';
import { compare, getRandomInt } from '../../common/functions';

const Battle = ({userSelection, score, setScore, resetGame}) => {

    const getComputedSelection = () => {
        const options = ['rock', 'paper', 'scissors'];
        return options[getRandomInt(0, 3)];
    }

    const [computerSelection, setComputerSelection] = useState();
    const [winner, setWinner] = useState();
    const [winnerText, setWinnerText] = useState();

    useEffect(() => {
        setTimeout(() => {
            setComputerSelection(getComputedSelection());
        }, 3000);
    }, [userSelection])
    
    useEffect(() => {
        if(userSelection && computerSelection) {
            setWinner(compare(userSelection, computerSelection));
        }
    }, [userSelection, computerSelection])

    useEffect(() => {
        if(winner === 'USER_WINS') {
            setScore(score + 1);
            setWinnerText('YOU WIN');
        }
        
        if(winner === 'COMPUTER_WINS') {
            setScore(score - 1);
            setWinnerText('YOU LOSE');
        }

        if(winner === 'TIE') {
            setWinnerText('TIE')
        }
    }, [winner])

    return (
        <div className="battle-container container">
            <div className="user-picked">
                <div>
                    <h2>You Picked</h2>
                </div>
                <Selection selected={userSelection} winner={winner === 'USER_WINS' ? true : false} />
            </div>
            <div className="winner-section">
                <h2>{winnerText}</h2>
                <div>
                    <button onClick={resetGame}>PLAY AGAIN</button>
                </div>
            </div>
            <div className="adversary-picked">
                <div>
                    <h2>The House Picked</h2>
                </div>
                { !computerSelection && <div className="option option-waiting" ></div>}
                { computerSelection && <Selection selected={computerSelection} winner={winner === 'COMPUTER_WINS' ? true : false} />}
            </div>
        </div>
    )
}

export default Battle;