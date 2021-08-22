import {ReactComponent as PaperSVG} from '../assets/img/icon-paper.svg'
import {ReactComponent as RockSVG} from '../assets/img/icon-rock.svg'
import {ReactComponent as ScissorsSVG} from '../assets/img/icon-scissors.svg'
import {ReactComponent as SpockSVG} from '../assets/img/icon-spock.svg'
import {ReactComponent as LizardSVG} from '../assets/img/icon-lizard.svg'

const Selection = ({selected, winner}) => {
  const Option = ({option}) => {
    return (
      <div className="option">
        <div className={option}>
          {option === 'rock' && <RockSVG />}
          {option === 'paper' && <PaperSVG />}
          {option === 'scissors' && <ScissorsSVG />}
          {option === 'spock' && <SpockSVG />}
          {option === 'lizard' && <LizardSVG />}
        </div>

        {winner && <div className="winner"></div>}
      </div>
    )
  }

  return <Option option={selected} />
}

export default Selection
