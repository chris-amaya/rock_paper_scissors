import { ReactComponent as PaperSVG } from '../assets/img/icon-paper.svg';
import { ReactComponent as RockSVG } from '../assets/img/icon-rock.svg';
import { ReactComponent as ScissorsSVG } from '../assets/img/icon-scissors.svg';

const Selection = ({selected}) => {

    const Option = ({option}) => {
        return (
            <div className="option">
                <div className={option}>
                    {option === 'rock' && <RockSVG />}
                    {option === 'paper' && <PaperSVG />}
                    {option === 'scissors' && <ScissorsSVG />}
                </div>
            </div>
        )
    }

    return (
        <Option option={selected} />
    );
}

export default Selection