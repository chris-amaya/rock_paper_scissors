import './Rules.css'

const Rules = ({toggleRulesDialog}) => {

    return (
        <div className="rules-container">
            <button onClick={() => toggleRulesDialog()}>RULES</button>
        </div>
    )
}

export default Rules;