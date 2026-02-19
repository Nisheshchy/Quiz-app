/** @format */

import React, { useRef, useState } from "react";
import "./Quiz.css";
import { data } from "../../assets/data";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const question = data[index]; // Derive question from index

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return;
      }
      setIndex((prev) => prev + 1);
      setLock(false);
      option_array.forEach((option) => {
        if (option.current) {
          option.current.classList.remove("wrong");
          option.current.classList.remove("correct");
        }
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setScore(0);
    setLock(false);
    setResult(false);
    // Don't need to setQuestion because it's derived
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      {result ? (
        <div className="result-container">
          <h2 className="score-text">
            You Scored {score} out of {data.length}
          </h2>
          <div className="score-percentage">
            {Math.round((score / data.length) * 100)}% Accuracy
          </div>
          <button onClick={reset}>Try Again</button>
        </div>
      ) : (
        <div key={index} className="question-fade">
          <h2>
            {index + 1}. {question.question}
          </h2>
          <ul>
            <li ref={Option1} onClick={(e) => checkAns(e, 1)}>
              {question.option1}
            </li>
            <li ref={Option2} onClick={(e) => checkAns(e, 2)}>
              {question.option2}
            </li>
            <li ref={Option3} onClick={(e) => checkAns(e, 3)}>
              {question.option3}
            </li>
            <li ref={Option4} onClick={(e) => checkAns(e, 4)}>
              {question.option4}
            </li>
          </ul>
          {lock && (
            <div className="explanation">
              <b>Explanation:</b>
              {question.explanation}
            </div>
          )}
          <button
            onClick={next}
            className={!lock ? "button-disabled" : ""}
            disabled={!lock}
          >
            Next Question
          </button>
          <div className="index">
            Question {index + 1} of {data.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
