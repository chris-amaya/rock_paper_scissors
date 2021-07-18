import './Battle.css';

import Selection from '../../common/Selection';

const Battle = ({userSelection}) => {

    return (
        <div className="battle-container container">
            <div className="user-picked">
                <div>
                    <h2>You Picked</h2>
                </div>
                <Selection selected={'paper'} />
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
                <Selection selected={'scissors'} />
            </div>
        </div>
    )
}

export default Battle;