import React, {useContext} from 'react'
import {GameContext} from '../../../context/GameContext'

const CreateRoom = () => {
  const {codeRoom} = useContext(GameContext)

  return (
    <>
      <h2>Code Room: {codeRoom}</h2>
      <p>Give this code to your partner so he can join the room</p>
    </>
  )
}

export default CreateRoom
