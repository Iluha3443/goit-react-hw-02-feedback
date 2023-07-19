import React from 'react';

class Feedback extends React.Component {

  state = {
  good: 0,
  neutral: 0,
  bad: 0
      } 

    ClickedOnGood = () => {
        this.setState(prevState => ({
           good: prevState.good + 1
        }))}
           
    ClickedOnNeutral = () => {
        this.setState(prevState => ({
              neutral: prevState.neutral + 1 
           }))
       }   
            
    ClickedOnBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1
        }))
    }
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
        }
    countPositiveFeedbackPercentage = () => {
        const { good, neutral, bad } = this.state;
        const Feed = neutral + bad + good;
        const goodFeed = Feed ? Math.round((good / Feed) * 100) : 0;
        return goodFeed
    }

    render() {
        return (
            <div>
                <h2>Please leave feedback</h2>
            <ul>
                <li><button type='button' onClick={this.ClickedOnGood}>good</button></li>
                <li><button type='button' onClick={this.ClickedOnNeutral}>neutral</button></li>
                <li><button type='button' onClick={this.ClickedOnBad}>bad</button></li>
            </ul>
           
        </div>
        )
    }
}

export default Feedback