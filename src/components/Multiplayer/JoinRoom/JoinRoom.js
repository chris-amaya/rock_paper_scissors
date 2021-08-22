import React, {useState} from 'react'

const JoinRoom = ({setRoomOptions, roomOptions}) => {
  const [codeRoom, setCodeRoom] = useState('')
  const handlerJoinRoom = () => {
    if (!codeRoom) {
      alert('Please, fill the code room')
      return
    }
    setRoomOptions({
      ...roomOptions,
      codeRoom,
    })
  }
  return (
    <>
      <input
        type="text"
        placeholder="Code Room"
        value={codeRoom}
        onInput={(e) => setCodeRoom(e.target.value)}></input>
      <button onClick={handlerJoinRoom}>JOIN</button>
    </>
  )
}

export default JoinRoom
