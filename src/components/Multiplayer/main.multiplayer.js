const MainMultiplayer = ({setUserName}) => {
  const [roomOptions, setRoomOptions] = useState({
    userName: '',
    CREATE: false,
    JOIN: false,
    codeRoom: null,
  })

  return (
    <div className="multiplayer-menu">
      {!roomOptions.userName && (
        <MenuMultiplayer
          setRoomOptions={setRoomOptions}
          setUserName={setUserName}
        />
      )}
      {(roomOptions.JOIN === true || roomOptions.codeRoom) && (
        <JoinRoom setRoomOptions={setRoomOptions} roomOptions={roomOptions} />
      )}
      {roomOptions.CREATE === true && <CreateRoom />}
    </div>
  )
}

export default MainMultiplayer
