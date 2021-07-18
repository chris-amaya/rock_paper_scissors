import { ReactComponent as PaperSVG } from '../assets/img/icon-paper.svg';
import { ReactComponent as RockSVG } from '../assets/img/icon-rock.svg';
import { ReactComponent as ScissorsSVG } from '../assets/img/icon-scissors.svg';

const Selection = ({selected}) => {

    const GetSVG = ({option}) => {
        switch(option) {
            case 'rock': 
                return <RockSVG />
            
            case 'paper':
                return <PaperSVG />

            case 'scissors':
                return <ScissorsSVG />

            default:
                return null;
        }
    }

    const Option = ({option}) => {
        return (
            <div className="option">
                <div className={option}>
                    <GetSVG option={option} />
                </div>
            </div>
        )
    }

    return (
        <Option option={selected} />
    );
}

export default Selection