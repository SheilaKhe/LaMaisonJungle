import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    const isInputError = inputValue.includes('f')
    function checkValue(value) {
        if(!value.includes('f'))
        setInputValue(value)
    }
    
    
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
            /> 
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
            {isInputError && (
                <div>No f</div>
            )}
        </div>
        
    )
}

export default QuestionForm