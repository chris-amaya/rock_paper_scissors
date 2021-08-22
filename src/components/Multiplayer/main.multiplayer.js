import {Route} from 'react-router-dom'
import CreateRoom from './CreateRoom/CreateRoom'
import JoinRoom from './JoinRoom/JoinRoom'
import MenuMultiplayer from './MenuMultiplayer/MenuMultiplayer'

const MainMultiplayer = ({}) => {
  return (
    <div className="multiplayer-menu">
      <Route path="/multiplayer/create-room">
        <CreateRoom />
      </Route>
      <Route path="/multiplayer/join-room">
        <JoinRoom />
      </Route>
      <Route exact path="/multiplayer">
        <MenuMultiplayer />
      </Route>
    </div>
  )
}

export default MainMultiplayer
