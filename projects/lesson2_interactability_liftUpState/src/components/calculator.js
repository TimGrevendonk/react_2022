import { useState } from "react";

function Label({ labelText }) {
  const labelStyle = {
    fontFamily: "Verdana",
    color: "#FFF",
    fontSize: 30,
  };

  return <div style={labelStyle}>{labelText}</div>;
}

function Button({ onClick, buttonValue }) {
  const buttonStyle = {
    fontFamily: "Verdana",
    fontSize: 20,
    margin: 5,
    fontWeight: "bold",
    backgroundColor: "#CCCCCC",
    color: "#FFF",
    borderStyle: "solid",
    borderColor: "#CCCCCC",
    borderRadius: 5,
    width: 70,
    height: 70,
  };

  return (
    <button
      style={buttonStyle}
      key={buttonValue}
      onClick={() => onClick(buttonValue)}
    >
      {buttonValue}
    </button>
  );
}

export default function Calculator({ ...props }) {
  const backgroundStyle = {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#00ace6",
    width: 330,
    borderRadius: 10,
    textAlign: "left",
  };

  const numbers = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "C",
    "0",
    "=",
    "/",
  ];
  const output = [];

  const [labelText, setlabelText] = useState("0");

  function handleButtonClick(value) {
    console.log(value);
    if (value === "=") {
      setlabelText(eval(labelText) + "");
    } else if (value === "C") {
      setlabelText("0");
    } else if (labelText === "0") {
      setlabelText(value);
    } else {
      setlabelText(labelText.concat(value));
    }
  }

  // const output = numbers.map((buttonValue) => {
  //   console.log(buttonValue);
  //   return (
  //     <Button
  //       key={buttonValue}
  //       buttonValue={buttonValue}
  //       onClick={handleButtonClick(buttonValue)}
  //     ></Button>
  //   );
  // });
  for (let i = 0; i < numbers.length; i++) {
    output.push(
      <Button onClick={handleButtonClick} buttonValue={numbers[i]}></Button>
    );
  }

  return (
    <div style={backgroundStyle}>
      <Label labelText={labelText}></Label>
      <div>{output}</div>
    </div>
  );
}
