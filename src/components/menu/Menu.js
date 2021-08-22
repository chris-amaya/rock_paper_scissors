import {useState} from 'react'
import GameMode from '../GameMode/GameMode'
import CreateRoom from '../Multiplayer/CreateRoom/CreateRoom'
import JoinRoom from '../Multiplayer/JoinRoom/JoinRoom'
import MenuMultiplayer from '../Multiplayer/MenuMultiplayer/MenuMultiplayer'
import './Menu.css'

const Menu = ({
  setGameType,
  setModeOption,
  setUserName,
  userName,
  modeOption,
}) => {
  return (
    <div className="menu-container">
      <div className="container">
        {!modeOption && <GameMode setModeOption={setModeOption} />}
        {modeOption === 'PC' && <GameVariation setGameType={setGameType} />}
        {modeOption === 'MULTIPLAYER' && (
          <Multiplayer setUserName={setUserName} userName={userName} />
        )}
      </div>
    </div>
  )
}

export default Menu
