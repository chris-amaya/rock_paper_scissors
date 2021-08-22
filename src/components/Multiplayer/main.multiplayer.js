import {useState} from 'react'
import {Route} from 'react-router-dom'
import CreateRoom from './CreateRoom/CreateRoom'
import JoinRoom from './JoinRoom/JoinRoom'
import MenuMultiplayer from './MenuMultiplayer/MenuMultiplayer'

const MainMultiplayer = ({setUserName}) => {
  const [roomOptions, setRoomOptions] = useState({
    userName: '',
    CREATE: false,
    JOIN: false,
    codeRoom: null,
  })

  return (
    <div className="multiplayer-menu">
      <Route path="/multiplayer/create-room">
        <CreateRoom />
      </Route>
      <Route path="/multiplayer/join-room">
        <JoinRoom setRoomOptions={setRoomOptions} />
      </Route>
      <Route exact path="/multiplayer">
        <MenuMultiplayer
          setRoomOptions={setRoomOptions}
          setUserName={setUserName}
        />
      </Route>
    </div>
  )
}

export default MainMultiplayer
