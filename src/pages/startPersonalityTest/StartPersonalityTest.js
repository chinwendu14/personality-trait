/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "../../components/button/Button";
import "./startpersonality.scss";
import { TraitQuestion } from "./testQuestion";
import { useNavigate } from "react-router-dom";

const StartPersonalityTest = () => {
  const [activeQuestion, setactiveQuest] = useState(0);

  const { questions } = TraitQuestion;
  const { answer, question, option } = questions[activeQuestion];
  const history = useNavigate();
  const [disableBtn, setDisableBtn] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [result, setResult] = useState({
    rightAnswer: 0,
    wrongAnswer: 0,
  });
  const handleSelect = (itemAnswer, index) => {
    setDisableBtn(true);
    setSelectedAnswerIndex(index);

    if (itemAnswer === answer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };
  const handleSubmit = () => {
    setactiveQuest((prev) => prev + 1);
    setSelectedAnswerIndex(null);
    setDisableBtn(false);

    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            rightAnswer: prev.rightAnswer + 20,
          }
        : {
            ...prev,
            wrongAnswer: prev.wrongAnswer + 20,
          }
    );

    if (activeQuestion === questions.length - 1) {
      if (result.rightAnswer > result.wrongAnswer) {
        history("/introvert");
      } else {
        history("/extrovert");
      }
    }
  };
  return (
    <div className="personalityTest">
      <div className="personalityTest__bannerDiv">
        <h1> Personality Test</h1>
      </div>
      <div className="personalityTest__bgAsh">
        <div className="personalityTest__bg">
          <div>
            <p>Question {activeQuestion + 1}/5</p>
            <h1>{question}</h1>
            <i>All questions are required</i>
            <div>
              <ul>
                {option.map((item, index) => {
                  return (
                    <li
                      onClick={() => handleSelect(item, index)}
                      key={index}
                      className={
                        selectedAnswerIndex === index ? "answerChoosen" : null
                      }
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <Button
              text={activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              onClick={handleSubmit}
              className={disableBtn ? "" : "disable"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPersonalityTest;
