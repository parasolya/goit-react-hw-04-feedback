import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

 class FeedbackOptions extends Component {
      static defaultProps = {
        options: [],
      };
      static propTypes = {
        options: PropTypes.array.isRequired,
        onLeaveFeedback: PropTypes.func.isRequired,
      };
      render() {        
        return ( 
    <div className={css.feedback__list}>
    {this.props.options.map((el) => 
      (<button className={css.feedback__btn} key={el} value={el} onClick={e => this.props.onLeaveFeedback(e)}>{el}</button>)
    )}     
    </div>)
    }
};
 

export default FeedbackOptions;