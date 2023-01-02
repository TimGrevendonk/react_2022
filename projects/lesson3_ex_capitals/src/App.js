import { Routes, Route, BrowserRouter } from "react-router-dom";

import MainMenu from "./components/main_menu";
import Game from "./components/game";
import Highscores from "./components/highscores";
import Info from "./components/info";

import "./style.css";

function Main() {
  return (
    <div className="content">
      <Routes>
        <Route path={"/"} element={<MainMenu />} />
        <Route path={"/game"} element={<Game />} />
        <Route path={"/highscores"} element={<Highscores />} />
        <Route path={"/info"} element={<Info />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
