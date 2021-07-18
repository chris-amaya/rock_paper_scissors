import './Selection.css';
import { ReactComponent as TriangleSVG } from '../../assets/img/bg-triangle.svg';
import { ReactComponent as PaperSVG } from '../../assets/img/icon-paper.svg';
import { ReactComponent as RockSVG } from '../../assets/img/icon-rock.svg';
import { ReactComponent as ScissorsSVG } from '../../assets/img/icon-scissors.svg';

const UserSelection = ({setUserSelection}) => {

    return (
        <div className="selection-container">
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

export default UserSelection;