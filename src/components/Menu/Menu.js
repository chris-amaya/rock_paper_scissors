import {Route} from 'react-router-dom'
import GameMode from '../GameMode/GameMode'
import GameVariation from '../GameVariation/GameVariation'
import MainMultiplayer from '../Multiplayer/main.multiplayer'
import './Menu.css'

const Menu = ({setGameMode, setGameVariation}) => {
  return (
    <div className="menu-container">
      <div className="container">
        <Route path="/variation">
          <GameVariation setGameVariation={setGameVariation} />
        </Route>
        <Route path="/multiplayer">
          <MainMultiplayer />
        </Route>
        <Route exact path="/">
          <GameMode setGameMode={setGameMode} />
        </Route>
      </div>
    </div>
  )
}

export default Menu
