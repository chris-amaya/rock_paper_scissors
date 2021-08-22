import {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {getID} from '../../../common/functions'
import {GameContext} from '../../../context/GameContext'

const MenuMultiplayer = ({}) => {
  const {setCodeRoom, setUserName} = useContext(GameContext)
  const [_userName, _setUserName] = useState('')
  const history = useHistory()

  const handlerRoomOption = (value) => {
    if (!_userName) {
      alert('Please, fill your username')

      return
    }
    const room = getID()
    setUserName(_userName)

    if (value === 'join') {
      history.push('/multiplayer/join-room')
    }

    if (value === 'create') {
      setCodeRoom(room)
      history.push('/variation')
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        value={_userName}
        onInput={(e) => _setUserName(e.target.value)}></input>
      <button onClick={() => handlerRoomOption('create')}>CREATE ROOM</button>
      <button onClick={() => handlerRoomOption('join')}>JOIN ROOM</button>
    </>
  )
}

export default MenuMultiplayer
