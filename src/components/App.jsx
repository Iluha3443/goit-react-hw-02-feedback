import Feedback from "./Feedback";
import { Statistics } from "./Statistics";


export const App = () => {
  return (
    <>
     <Statistics good={Feedback.good} neutral={Feedback.neutral} bad={Feedback.bad}  total={Feedback.countTotalFeedback} positivePercentage={Feedback.countPositiveFeedbackPercentage}/>
    </>
  );
};
