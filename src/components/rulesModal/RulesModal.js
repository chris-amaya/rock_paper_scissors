import './RulesModal.css';
import { ReactComponent as CloseSVG } from '../../assets/img/icon-close.svg';
import { ReactComponent as RulesSVG } from '../../assets/img/image-rules.svg';

const RulesModal = ({on, setRulesModal}) => {
    
    const component = 
    <div className="rulesModal-container">
        <div>
            <div>
                <h2>RULES</h2>
            </div>

            <div>
                <button onClick={() => setRulesModal(!on)}><CloseSVG /></button>
            </div>
        </div>

        <div>
            <RulesSVG />
        </div>
    </div>


    return on ? component : <div></div>;
}

export default RulesModal;