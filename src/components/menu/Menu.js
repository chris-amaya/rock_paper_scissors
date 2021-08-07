import { useEffect, useReducer, useState } from 'react';
import './Menu.css';

const Menu = ({setGameType, setModeOption, setUserName, userName, modeOption}) => {
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

    const Multiplayer = ({ setUserName }) => {
        const [roomOptions, setRoomOptions] = useState({
            userName: '',
            CREATE: false,
            JOIN: false,
            codeRoom: null,
        });

        const CreateRoom = () => {

            return (
                <>
                    <h2>Code Room</h2>

                    <p>Share the next code and tell your partner to join the room with this code, or simply give him the next link</p>
                </>
            )
        }
        
        const JoinRoom = ({setRoomOptions, roomOptions}) => {
            const [codeRoom, setCodeRoom] = useState('')
            const handlerJoinRoom = () => {
                if(!codeRoom) {
                    alert('Please, fill the code room')
                    return;
                }
                setRoomOptions({
                    ...roomOptions,
                    codeRoom,
                })
            }
            return (
                <>
                    <input type="text" placeholder="Code Room" value={codeRoom} onInput={(e) => setCodeRoom(e.target.value)}></input>
                    <button onClick={handlerJoinRoom}>JOIN</button>
                </>
            );
        }

        const MainMenu = ({ setRoomOptions }) => {
            const [userName, setUserName] = useState('');

            const handlerRoomOption = (value) => {
                if(!userName) {
                    alert('Please, fill your username')

                    return;
                }

                setRoomOptions({
                    userName: userName,
                    CREATE: value === 'create' || false,
                    JOIN: value === 'join' || false,
                })
            }

            return (
                <>
                    <input type="text" placeholder="Name" value={userName} onInput={(e) => setUserName(e.target.value)}></input>
                    <button onClick={() => handlerRoomOption('create')}>CREATE ROOM</button>
                    <button onClick={() => handlerRoomOption('join')}>JOIN ROOM</button>
                </>
            )
        }

        return (
            <div className="multiplayer-menu">
                { (!roomOptions.userName) && <MainMenu setRoomOptions={setRoomOptions} setUserName={setUserName}/>}
                { (roomOptions.JOIN === true || roomOptions.codeRoom) && <JoinRoom setRoomOptions={setRoomOptions} roomOptions={roomOptions} /> }
                { (roomOptions.CREATE === true) && <CreateRoom /> }
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
                { !modeOption && <Mode setModeOption={setModeOption} />}
                { modeOption === 'PC' && <Version setGameType={setGameType} />}
                { modeOption === 'MULTIPLAYER' && <Multiplayer setUserName={setUserName} userName={userName} />}
            </div>
        </div>
    )
}

export default Menu;