import { useState } from "react";
import "../range.css";

function Label({ text, value }) {
  var labelStyle = {
    fontFamily: "Verdana",
    fontSize: 20,
  };

  return (
    <div style={labelStyle}>
      {text} {value}
    </div>
  );
}

function Slider({ value, min, max, onChange }) {
  // [Lift up state 5]: Set the function (saved in the property) in the input element.
  return (
    <input type="range" value={value} min={min} max={max} onChange={onChange} />
  );
}

function BmiSlider({ text, value, min, max, onChange }) {
  return (
    <>
      <Label text={text} value={value}></Label>
      {/* [Lift up state 4]: Pass the same property to the next component. */}
      <Slider value={value} min={min} max={max} onChange={onChange}></Slider>
    </>
  );
}

export default function BmiCalculator() {
  // [Lift up state 1]: Set a state.
  const [length, setLength] = useState("170");
  const [weight, setWeight] = useState("80");
  const [BMI, setBMI] = useState(weight / (length * length));

  function handleWeightChange(event) {
    setWeight(event.target.value);
    setBMI(weight / (length * length));
  }

  // [Lift up state 2]: define the function to handle the changes.
  function handleLengthChange(event) {
    // [Lift up state 6]: Extract the value to be set out of the target.
    setLength(event.target.value);
    setBMI(weight / (length * length));
  }

  var backgroundStyle = {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    paddingBottom: 20,
    border: "#333 2px dotted",
    width: 450,
    borderRadius: 10,
    textAlign: "left",
  };

  var labelStyle = {
    fontFamily: "Verdana",
    fontSize: 40,
  };

  return (
    <div style={backgroundStyle}>
      <div style={labelStyle}>BMI Calculator</div>
      <br />
      <BmiSlider
        value={length}
        text="length:"
        min={30}
        max={300}
        // [Lift up state 3]: Set the function to be called as a property (arrow function).
        onChange={handleLengthChange}
      ></BmiSlider>
      <br />
      <BmiSlider
        value={weight}
        text="weight:"
        min={3}
        max={250}
        onChange={handleWeightChange}
      ></BmiSlider>
      <br />
      <BmiSlider value={BMI * 10000} text="BMI:" min={10} max={70}></BmiSlider>
    </div>
  );
}
