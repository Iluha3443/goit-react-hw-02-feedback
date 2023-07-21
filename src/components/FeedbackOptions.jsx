import css from './FeedbackOptions.module.css';
import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    
    
    
    return (
        <ul className={css.list}>
            <li className={css.item}><button className={css.btn} type='button' onClick={() => onLeaveFeedback('good')}>good</button></li>
            <li className={css.item}><button className={css.btn} type='button' onClick={() => onLeaveFeedback('neutral')} >neutral</button></li>
            <li className={css.item}><button className={css.btn} type='button' onClick={() => onLeaveFeedback('bad')}>bad</button></li>
        </ul>
    )
};
