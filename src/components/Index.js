import './Index.css';
import ScoreBoard from './scoreBoard/ScoreBoard';


const Index = () => {
    return (
        <div className="container">
            <ScoreBoard style={{"margin-top": '10px'}} />
        </div>
    )
}


export default Index;