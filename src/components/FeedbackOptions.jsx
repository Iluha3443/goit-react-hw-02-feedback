

export const FeedbackOptions = ( {options, onLeaveFeedback}) => {
    
    const { good, neutral, bad } = options;
    
    return (
        <ul>  
            <li><button type='button' onClick={() => onLeaveFeedback('good')}>good</button></li>
            <li><button type='button' onClick={() => onLeaveFeedback('neutral')} >neutral</button></li>
            <li><button type='button' onClick={() => onLeaveFeedback('bad')}>bad</button></li>
            </ul>
    )
}

