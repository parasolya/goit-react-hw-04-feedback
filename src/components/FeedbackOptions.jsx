import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export default function FeedbackOptions ({ options, onLeaveFeedback }) {           
        return ( 
    <div className={css.feedback__list}>
    {options.map((el) => 
      (<button className={css.feedback__btn} key={el} value={el} onClick={e => onLeaveFeedback(e)}>{el}</button>)
    )}     
    </div>)    
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

