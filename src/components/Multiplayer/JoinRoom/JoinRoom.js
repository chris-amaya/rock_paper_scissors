import React, {useContext, useState} from 'react'
import {GameContext} from '../../../context/GameContext'

const JoinRoom = () => {
  const {codeRoom, setCodeRoom, userName, socket} = useContext(GameContext)
  const [_codeRoom, _setCodeRoom] = useState('')
  const handlerJoinRoom = () => {
    if (!_codeRoom) {
      alert('Please, fill the code room')
      return
    }

    setCodeRoom(_codeRoom)
    socket.emit('join-room', {
      roomCode: _codeRoom,
      userName,
    })
  }
  return (
    <>
      <input
        type="text"
        placeholder="Code Room"
        value={_codeRoom}
        onInput={(e) => _setCodeRoom(e.target.value)}></input>
      <button onClick={handlerJoinRoom}>JOIN</button>
    </>
  )
}

export default JoinRoom
