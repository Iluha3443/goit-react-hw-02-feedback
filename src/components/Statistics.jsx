import React from 'react';

 export const Statistics  = ({good,neutral,bad}) => {

    
    return (
            <>
             <h2>Statistics</h2>
            <ul>
                <li>good:{good}</li>
                <li>neutral:{neutral}</li>
                <li>bad:{bad}</li>
                {/* <li>Total:{this.countTotalFeedback()}</li>
                <li>Positive feedback:{this.countPositiveFeedbackPercentage()}%</li> */}
            </ul>
            </>
        )
    
}

// export default Statistics;