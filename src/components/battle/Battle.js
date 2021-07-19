import './Battle.css';
import Selection from '../../common/Selection';
import { useEffect, useState } from 'react';
import { compare, getRandomInt } from '../../common/functions';

const Battle = ({userSelection, score, setScore, resetGame, gameType}) => {

    const getComputedSelection = () => {
        const options = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
        return options[getRandomInt(0, gameType === 'default' ? 3 : 5)];
    }

    const [computerSelection, setComputerSelection] = useState();
    const [winner, setWinner] = useState();
    const [winnerText, setWinnerText] = useState();

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

    useEffect(() => {
        setTimeout(() => {
            setComputerSelection(getComputedSelection());
        }, 3000);
    }, [userSelection])
    
    useEffect(() => {
        if(userSelection && computerSelection) {
            setWinner(compare(userSelection, computerSelection, gameType));
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
            {winner && <WinnerSection winnerText={winnerText} resetGame={resetGame} />}
            <div className="adversary-picked">
                <div>
                    <h2>{ computerSelection ? 'The House Picked' : 'House is Picking...'}</h2>
                </div>
                { !computerSelection && <div className="option option-waiting" ></div>}
                { computerSelection && <Selection selected={computerSelection} winner={winner === 'COMPUTER_WINS' ? true : false} />}
            </div>
        </div>
    )
}

export default Battle;