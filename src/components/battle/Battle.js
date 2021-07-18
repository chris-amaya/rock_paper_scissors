import './Battle.css'
import { ReactComponent as PaperSVG } from '../../assets/img/icon-paper.svg';
import { ReactComponent as RockSVG } from '../../assets/img/icon-rock.svg';
import { ReactComponent as ScissorsSVG } from '../../assets/img/icon-scissors.svg';

const Battle = ({userSelection}) => {

    return (
        <div className="battle-container container">
            <div className="user-picked">
                <div>
                    <h2>You Picked</h2>
                </div>
                <div className="option">
                    <div className="paper">
                        <PaperSVG />
                    </div>
                    
                </div>

                {/* <div className="option">
                    <div className="rock">
                        <RockSVG />
                    </div>
                </div>

                <div className="option">
                    <div className="scissors">
                        <ScissorsSVG />
                    </div>
                </div> */}
            </div>
            <div className="winner-section">
                <h2>YOU WIN</h2>
                <div>
                    <button>PLAY AGAIN</button>
                </div>
            </div>
            <div className="adversary-picked">
                <div>
                    <h2>The House Picked</h2>
                </div>
                
                <div className="option">
                    <div className="paper">
                        <PaperSVG />
                    </div>

                    <div className="winner"></div>
                </div>
            </div>
        </div>
    )
}

export default Battle;