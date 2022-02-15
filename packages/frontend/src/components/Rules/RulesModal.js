import './RulesModal.css'
import {ReactComponent as CloseSVG} from '../../assets/img/icon-close.svg'
import {ReactComponent as RulesSVG} from '../../assets/img/image-rules.svg'
import {ReactComponent as BonusRulesSVG} from '../../assets/img/image-rules-bonus.svg'

const RulesModal = ({on, setRulesModal, gameVariation}) => {
  const component = (
    <div className="rulesModal-container">
      <div>
        <div>
          <h2>RULES</h2>
        </div>

        <div>
          <button onClick={() => setRulesModal(!on)}>
            <CloseSVG />
          </button>
        </div>
      </div>

      <div>
        {gameVariation === 'default' ? <RulesSVG /> : <BonusRulesSVG />}
      </div>
    </div>
  )

  return on ? component : <div></div>
}

export default RulesModal
