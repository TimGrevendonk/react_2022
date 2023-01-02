import { Link, useNavigate } from "react-router-dom";
import highscores_api from "../apis/highscores_api";

function Highscores() {
  const navigate = useNavigate();
  const highscores = new highscores_api();
  const output = highscores.all().map((score) => {
    return (
      <li key={score.id}>
        {score.player} - {score.score}
      </li>
    );
  });

  return (
    <div>
      <h2>Highscores</h2>
      <ol>{output}</ol>
      <Link onClick={() => navigate(-1)}>Back</Link>
    </div>
  );
}

export default Highscores;
