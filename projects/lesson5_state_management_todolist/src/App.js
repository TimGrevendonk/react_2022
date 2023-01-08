import "./App.css";
import { RecoilRoot } from "recoil";

import CharacterCounter from "./components/recoil_character_counter";
import Hello from "./components/hello";

import TodoList from "./components/todo_list";
import WeatherForecast from "./components/weather_forecast";

// // todolist setup:
// function App() {
//   return (
//     <RecoilRoot>

//       <TodoList />
//     </RecoilRoot>
//   );
// }
// export default App;

function App() {
  return (
    <RecoilRoot>
      <TodoList />
      {/* <WeatherForecast /> */}
      <br />
      <br />
      <CharacterCounter></CharacterCounter>
    </RecoilRoot>
  );
}

export default App;
