import React, {useContext} from 'react'
import {GameContext} from '../../../context/GameContext'

const CreateRoom = () => {
  const {codeRoom} = useContext(GameContext)

  return (
    <>
      <h2>Code Room: {codeRoom}</h2>

      <p>
        Share the next code and tell your partner to join the room with this
        code, or simply give him the next link
      </p>
    </>
  )
}

export default CreateRoom
