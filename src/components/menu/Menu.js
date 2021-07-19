import './Menu.css';

const Menu = ({setGameType}) => {

    return (
        <div className="menu-container">
            <div className="container">
                
                <div>
                    <h2>Select Which Version You Wanna Play</h2>
                </div>

                <div className="buttons">
                    <button onClick={() => setGameType('default')}>Rock, Paper, Scissors</button>
                    <button onClick={() => setGameType('bonus')}>Rock, Paper, Scissors, Lizard, Spock</button>
                </div>
            </div>
        </div>
    )
}

export default Menu;