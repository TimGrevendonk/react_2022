import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/hello";
import Letter from "./components/letter";
import Card from "./components/color_card";
import MultiplicationTable from "./components/multiplication_table";
import Rater from "./components/rater";
import ProgressBar from "./components/progress_bar";

function App() {
  return (
    <div className="App">
      <ProgressBar percentage="75" color="#ce4b99"></ProgressBar>

      <ProgressBar percentage="15" color="#ce1b29"></ProgressBar>

      <ProgressBar percentage="65" color="#125b69"></ProgressBar>
      <div>
        <Rater rating="9" max="11"></Rater>
      </div>
      <div>
        <MultiplicationTable number="9"></MultiplicationTable>
        <MultiplicationTable number="3"></MultiplicationTable>
      </div>
      <Card color={"#880088"}>A</Card>
      <Card color={"#002222"}></Card>
      <Card color={"#000088"}></Card>

      <Hello target={"Batman"} />
      <Hello target={"Bono"} text={"goes brrrrr"} />

      <Letter bgcolor="#58B3FF" text={"color"}>
        A
      </Letter>
      <Letter bgcolor="#FF605F">E</Letter>
      <Letter bgcolor="#FFD52E">I</Letter>
      <Letter bgcolor="#49DD8E">O</Letter>
      <Letter bgcolor="#AE99FF">U</Letter>
    </div>
  );
}

export default App;
