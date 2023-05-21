import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';
import css from './Feedback.module.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleLeaveFeedback = e => {
    const btnValue = e.currentTarget.value;
    this.setState(prevState => ({
      [btnValue]: prevState[btnValue] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    let percentage;
    if (this.state.good) {
      percentage =
        (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad);
    } else {
      percentage = 0;
    }

    return Math.round(percentage);
  };

  render() {
    const btnNames = Object.keys(this.state);

    return (
      <div className={css.feedback__section}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={btnNames}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>

        {!this.countTotalFeedback() ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}
export default App;
