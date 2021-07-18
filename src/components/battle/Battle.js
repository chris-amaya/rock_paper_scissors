import './Battle.css';
import Selection from '../../common/Selection';
import { useEffect, useState } from 'react';
import { compare, getRandomInt } from '../../common/functions';

const Battle = ({userSelection, score, setScore}) => {

    const getComputedSelection = () => {
        const options = ['rock', 'paper', 'scissors'];
        return options[getRandomInt(0, 3)];
    }

    const [computerSelection, setComputerSelection] = useState();
    const [winner, setWinner] = useState();

    useEffect(() => {
        setComputerSelection(getComputedSelection());
    }, [userSelection])
    
    useEffect(() => {
        if(userSelection && computerSelection) {
            setWinner(compare(userSelection, computerSelection));
        }
    }, [userSelection, computerSelection])

    useEffect(() => {
        if(winner === 'USER_WINS') {
            setScore(score + 1)
        }
        
        if(winner === 'COMPUTER_WINS') {
            setScore(score - 1);
        }
    }, [winner])

    return (
        <div className="battle-container container">
            <div className="user-picked">
                <div>
                    <h2>You Picked</h2>
                </div>
                <Selection selected={userSelection} />
            </div>
            <div className="winner-section">
                <h2>YOU WIN</h2>
                <div>
                    <button>PLAY AGAIN</button>
                </div>
            </div>
            <div className="adversary-picked">
                <div>
                    <h2>The House Picked</h2>
                </div>
                { !computerSelection && <div className="option option-waiting" ></div>}
                { computerSelection && <Selection selected={computerSelection} />}
            </div>
        </div>
    )
}

export default Battle;