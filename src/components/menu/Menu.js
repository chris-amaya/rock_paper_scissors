import { useState } from 'react';
import './Menu.css';

const Menu = ({setGameType}) => {

    const [modeOption, setModeOption] = useState();

    const Mode = ({setModeOption}) => {
        return (
            <div>
                <div>
                    <h2>Select either to play against the PC or multiplayer</h2>
                </div>

                <div className="buttons">
                    <button onClick={() => setModeOption('PC')}>PC</button>
                    <button onClick={() => setModeOption('MULTIPLAYER')}>Multiplayer</button>
                </div>
            </div>
        )
    }

    const Multiplayer = ({setRoomOption}) => {
        return (
            <div className="multiplayer-menu">
                <input type="text" placeholder="Name"></input>
                <button onClick={() => setRoomOption('create')}>CREATE ROOM</button>
                <button onClick={() => setRoomOption('join')}>JOIN ROOM</button>
            </div>
        );
    }

    const Version = ({setGameType}) => {
        return (
            <div>
                <div>
                    <h2>Select Which Version You Wanna Play</h2>
                </div>

                <div className="buttons">
                    <button onClick={() => setGameType('default')}>Rock, Paper, Scissors</button>
                    <button onClick={() => setGameType('bonus')}>Rock, Paper, Scissors, Lizard, Spock</button>
                </div>
            </div>
        );
    }


    return (
        <div className="menu-container">
            <div className="container">
                {/* { !modeOption && <Mode setModeOption={setModeOption} />}
                { modeOption && <Version setGameType={setGameType} />} */}
                <Multiplayer />
            </div>
        </div>
    )
}

export default Menu;