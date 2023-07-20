

 export const Statistics  = ({good,neutral,bad,total,positivePercentage}) => {
    return (
        <>
            <h2>Statistics</h2>
             <ul>
                <li>good:{good}</li>
                <li>neutral:{neutral}</li>
                <li>bad:{bad}</li>
                <li>Total:{total()}</li>
                <li>Positive feedback:{positivePercentage()}%</li>
            </ul>
            </>
        )
}

