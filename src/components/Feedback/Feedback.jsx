import s from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback }) => {
  const positiveFeedbackPercentage = Math.round(
    (feedback.good / totalFeedback) * 100
  );
  return (
    <ul className={s.listWrapper}>
      <li className={s.listStats}>
        Good: <span>{feedback.good}</span>
      </li>
      <li className={s.listStats}>
        Neutral: <span>{feedback.neutral}</span>
      </li>
      <li className={s.listStats}>
        Bad: <span>{feedback.bad}</span>
      </li>
      <li className={s.listStats}>
        Total: <span>{totalFeedback}</span>
      </li>
      <li className={s.listStats}>
        Positive: <span>{positiveFeedbackPercentage}%</span>
      </li>
    </ul>
  );
};

export default Feedback;