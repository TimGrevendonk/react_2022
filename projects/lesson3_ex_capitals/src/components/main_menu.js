import { NavLink, Outlet, Route, Routes } from "react-router-dom";

function MainMenu() {
  return (
    <div>
      <h2>Capitals of Asia</h2>
      <ul className="menu">
        <li>
          <NavLink to="/game">Play game</NavLink>
        </li>
        <li>
          <NavLink to="/highscores">Highscores</NavLink>
        </li>
        <li>
          <NavLink to="/info">Info</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MainMenu;
