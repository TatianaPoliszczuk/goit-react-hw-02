import s from "./Options.module.css";

const Options = ({ onLeaveFeedback, onReset, totalFeedback }) => {
  return (
    <ul className={s.buttonWrapper}>
      <li>
        <button
          className={s.optionButtonGood}
          onClick={() => onLeaveFeedback("good")}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className={s.optionButtonNeutral}
          onClick={() => onLeaveFeedback("neutral")}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className={s.optionButtonBad}
          onClick={() => onLeaveFeedback("bad")}
        >
          Bad
        </button>
      </li>

      {totalFeedback > 0 && (
        <li>
          <button className={s.optionButtonReset} onClick={onReset}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;