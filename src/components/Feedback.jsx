import React from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';


class Feedback extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

     handleClick = (elem) => {
    switch (elem) {
      case 'good':
        this.setState(prevState => ({
          good: prevState.good + 1
        }));
        break;
      case 'neutral':
        this.setState(prevState => ({
          neutral: prevState.neutral + 1
        }));
        break;
      case 'bad':
        this.setState(prevState => ({
          bad: prevState.bad + 1
        }));
        break;
    }
  }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const { good, neutral, bad } = this.state;
        const Feed = neutral + bad + good;
        const goodFeed = Feed ? Math.round((good / Feed) * 100) : 0;
        return goodFeed;
    };

    render() {
        const { good, neutral, bad, } = this.state;
    <h2>Please leave feedback</h2>
        return (
            <> 
           
                <Section title=""/>
               
                <FeedbackOptions options={this.state} onLeaveFeedback={this.handleClick}/>
                <Statistics good={good} neutral={neutral} bad={bad}
                total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage} />      
               
                </>
        )
    };
}

export default Feedback