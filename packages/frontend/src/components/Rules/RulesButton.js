import './Rules.css'

const RulesButton = ({toggleRulesDialog}) => {
  return (
    <div className="rules-container">
      <button onClick={() => toggleRulesDialog()}>RULES</button>
    </div>
  )
}

export default RulesButton
