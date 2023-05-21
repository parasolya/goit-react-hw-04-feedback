import React from 'react';
import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';
import css from './Feedback.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = e => {
    const btnValue = e.currentTarget.value;
    console.log(btnValue);
    switch (btnValue) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let percentage;
    if (good) {
      percentage = (good * 100) / (good + neutral + bad);
    } else {
      percentage = 0;
    }

    return Math.round(percentage);
  };

  const btnNames = ['good', 'neutral', 'bad'];

  return (
    <div className={css.feedback__section}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={btnNames}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      {!countTotalFeedback() ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </div>
  );
}
