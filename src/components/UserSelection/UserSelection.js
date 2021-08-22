import './Selection.css'
import {ReactComponent as TriangleSVG} from '../../assets/img/bg-triangle.svg'
import {ReactComponent as PaperSVG} from '../../assets/img/icon-paper.svg'
import {ReactComponent as RockSVG} from '../../assets/img/icon-rock.svg'
import {ReactComponent as ScissorsSVG} from '../../assets/img/icon-scissors.svg'
import {ReactComponent as PentagonSVG} from '../../assets/img/bg-pentagon.svg'
import {ReactComponent as LizardSVG} from '../../assets/img/icon-lizard.svg'
import {ReactComponent as SpockSVG} from '../../assets/img/icon-spock.svg'
import {useHistory} from 'react-router-dom'
import {GameContext} from '../../context/GameContext'
import {useContext} from 'react'

const UserSelection = ({setUserSelection, gameVariation}) => {
  const {socket, codeRoom, gameMode} = useContext(GameContext)
  const history = useHistory()
  function handleUserSelection(value) {
    setUserSelection(value)

    if (gameMode === 'PC') {
      history.push('/battle')
    }

    if (gameMode === 'MULTIPLAYER') {
      socket.emit('user-has-selected', {
        roomCode: codeRoom,
        selection: value,
      })

      history.push('/multiplayer/battle')
    }
  }

  const RockPaperScissors = () => {
    return (
      <div className="default-container">
        <div>
          <TriangleSVG />

          <div
            className="option paper"
            onClick={() => handleUserSelection('paper')}>
            <PaperSVG />
          </div>

          <div
            className="option rock"
            onClick={() => handleUserSelection('rock')}>
            <RockSVG />
          </div>

          <div
            className="option scissors"
            onClick={() => handleUserSelection('scissors')}>
            <ScissorsSVG />
          </div>
        </div>
      </div>
    )
  }

  const Bonus = () => {
    return (
      <div className="bonus-container">
        <div>
          <PentagonSVG />

          <div
            className="option paper"
            onClick={() => handleUserSelection('paper')}>
            <PaperSVG />
          </div>

          <div
            className="option scissors"
            onClick={() => handleUserSelection('scissors')}>
            <ScissorsSVG />
          </div>

          <div
            className="option rock"
            onClick={() => handleUserSelection('rock')}>
            <RockSVG />
          </div>

          <div
            className="option lizard"
            onClick={() => handleUserSelection('lizard')}>
            <LizardSVG />
          </div>

          <div
            className="option spock"
            onClick={() => handleUserSelection('spock')}>
            <SpockSVG />
          </div>
        </div>
      </div>
    )
  }

  return gameVariation === 'default' ? <RockPaperScissors /> : <Bonus />
}

export default UserSelection
