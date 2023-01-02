import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import capitals_api from "../apis/capitals_api";
import highscores_api from "../apis/highscores_api";
import InputForm from "./input_form";

function Game() {
  const navigate = useNavigate();
  const capitalsApi = new capitals_api();
  const highscoresApi = new highscores_api();

  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const questionCount = capitalsApi.count();

  // Game function:
  function checkAnswer(answer) {
    if (answer === capitalsApi.get(question).capital) {
      setScore(score + 1);
    }
    setQuestion(question + 1);
  }

  function saveAnswer(event) {
    event.preventDefault();
    highscoresApi.add(event.target[0].value, score);
    navigate("/");
  }

  function showBody() {
    if (question !== questionCount) {
      return showQuestion();
    }
    return showForm();
  }

  function showQuestion() {
    return (
      <>
        <p>
          {question + 1}. Which city is the capital of{" "}
          <b>{capitalsApi.get(question).country}</b>?
        </p>
        {capitalsApi.getAnswers(question).map((answer, index) => {
          return (
            <div className="city" onClick={() => checkAnswer(answer)}>
              <p key={index}>{answer}</p>
            </div>
          );
        })}
      </>
    );
  }

  function showForm() {
    return (
      <div>
        <p>
          The end! Score: {score}/{questionCount}
        </p>
        <br /> <InputForm submitItem={saveAnswer} caption="Submit" />
      </div>
    );
  }

  //   Main return function of Game.
  return (
    <div>
      <h2>
        Game: {question}/{capitalsApi.count()}
      </h2>
      {showBody()}
      <br />
      <Link onClick={() => navigate(-1)}>Stop playing</Link>
    </div>
  );
}

export default Game;
