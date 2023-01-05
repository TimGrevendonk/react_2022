import "./App.css";
// gebruik accolades om een specefieke functie aan te roepen in de plaats van de hele file.
import { students } from "./data";
import Counter from "./components/counter";
import { ListMap } from "./components/lists";
import LightningCounter from "./components/lightning_counter";
import ControlledComponent from "./components/controlled_component";
import Form from "./components/form";
import Accordion from "./components/accordion";
import Calculator from "./components/calculator";
import BmiCalculator from "./components/bmi_calculator";

function App() {
  return (
    <div>
      {/* <Accordion></Accordion> */}
      {/* <hr /> */}
      {/* <Form></Form> */}
      {/* <hr /> */}
      {/* <ControlledComponent></ControlledComponent> */}
      {/* <Counter></Counter> */}
      {/* <LightningCounter></LightningCounter> */}
      {/* <ListMap students={students} /> */}
      {/* <Calculator text="234"></Calculator> */}
      <BmiCalculator></BmiCalculator>
    </div>
    // <></>
  );
}

export default App;
