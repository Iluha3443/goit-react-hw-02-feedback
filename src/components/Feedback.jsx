import React from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';


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
      const totalFeedback = this.countTotalFeedback();

         return (
           <>
             <Section title="Please leave feedback">    
          <FeedbackOptions options={this.state} onLeaveFeedback={this.handleClick} />
        </Section>

             <Section title="Statistics">
               {totalFeedback > 0 ?
                 <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage} />
                 : <Notification message="There is no feedback" />}
        </Section>
      </>
    );
    };
}

export default Feedback