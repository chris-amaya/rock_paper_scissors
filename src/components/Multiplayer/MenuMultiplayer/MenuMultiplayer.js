import {useState} from 'react'

const MenuMultiplayer = ({setRoomOptions}) => {
  const [userName, setUserName] = useState('')

  const handlerRoomOption = (value) => {
    if (!userName) {
      alert('Please, fill your username')

      return
    }

    setRoomOptions({
      userName: userName,
      CREATE: value === 'create' || false,
      JOIN: value === 'join' || false,
    })
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
