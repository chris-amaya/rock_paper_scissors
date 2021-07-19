import './Selection.css';
import { ReactComponent as TriangleSVG } from '../../assets/img/bg-triangle.svg';
import { ReactComponent as PaperSVG } from '../../assets/img/icon-paper.svg';
import { ReactComponent as RockSVG } from '../../assets/img/icon-rock.svg';
import { ReactComponent as ScissorsSVG } from '../../assets/img/icon-scissors.svg';
import { ReactComponent as PentagonSVG } from '../../assets/img/bg-pentagon.svg';
import { ReactComponent as LizardSVG } from '../../assets/img/icon-lizard.svg';
import { ReactComponent as SpockSVG } from '../../assets/img/icon-spock.svg';

const UserSelection = ({gameType, setUserSelection}) => {

    const RockPaperScissors = () => {
        return (
            <div className="default-container">
                <div>
                    <TriangleSVG />

                    <div className="option paper" onClick={() => setUserSelection('paper')}>
                        <PaperSVG />
                    </div>

                    <div className="option rock" onClick={() => setUserSelection('rock')}>
                        <RockSVG />
                    </div>

                    <div className="option scissors" onClick={() => setUserSelection('scissors')}>
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

                    <div className="option paper" onClick={() => setUserSelection('paper')}>
                        <PaperSVG />
                    </div>

                    <div className="option scissors" onClick={() => setUserSelection('scissors')}>
                        <ScissorsSVG />
                    </div>

                    <div className="option rock" onClick={() => setUserSelection('rock')}>
                        <RockSVG />
                    </div>

                    <div className="option lizard" onClick={() => setUserSelection('lizard')}>
                        <LizardSVG />
                    </div>

                    <div className="option spock" onClick={() => setUserSelection('spock')}>
                        <SpockSVG />
                    </div>
                </div>
            </div>
        )
    }

    return gameType === 'default' ? <RockPaperScissors /> : <Bonus />
}

export default UserSelection;