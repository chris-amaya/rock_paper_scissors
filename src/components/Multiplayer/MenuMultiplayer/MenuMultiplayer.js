import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {getID} from '../../../common/functions'

const MenuMultiplayer = ({setRoomOptions}) => {
  const [userName, setUserName] = useState('')
  const history = useHistory()

  const handlerRoomOption = (value) => {
    if (!userName) {
      alert('Please, fill your username')

      return
    }
    const room = getID()
    setRoomOptions({
      userName: userName,
      CREATE: value === 'create' || false,
      JOIN: value === 'join' || false,
      codeRoom: room,
    })

    if (value === 'join') {
      history.push('/multiplayer/join-room')
    }

    if (value === 'create') {
      history.push('/variation')
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        value={userName}
        onInput={(e) => setUserName(e.target.value)}></input>
      <button onClick={() => handlerRoomOption('create')}>CREATE ROOM</button>
      <button onClick={() => handlerRoomOption('join')}>JOIN ROOM</button>
    </>
  )
}

export default MenuMultiplayer
