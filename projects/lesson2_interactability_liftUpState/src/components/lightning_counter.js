import { useState, useEffect } from "react";


function Label({ number }) {
  const labelStyle = {
    color: "#66FFFF",
    fontSize: 50
  };

  return (
    <h1 style={labelStyle}>{number}</h1>
  );
}

function LightningCounter() {
  const [count, setCount] = useState(0)

  function add100strikes() {
    setCount(count + 100);
  };

  useEffect(() => {
    // interval: param 1 = fucntion call, param = milliseconds.
    const interval = setInterval(add100strikes, 1000);
    // everytime it starts a new timer, so we clear the timer.
    // when useEffect unmounts use the return statement to clear the interval.
    return (() => clearInterval(interval));
  });

  const divStyle = {
    width: 250,
    textAlign: "center",
    backgroundColor: "black",
    padding: 40,
    fontFamily: "sans-serif",
    color: "#999",
    borderRadius: 10
  };

  const textStyles = {
    emphasis: {
      fontSize: 38
    },
    small: {
      fontSize: 17,
      opacity: 0.5
    }
  };

  return (
    <div style={divStyle}>
      <Label number={count}/>
      <h2>LIGHTNING STRIKES</h2>
      <h2 style={textStyles.emphasis}>WORLDWIDE</h2>
      <p style={textStyles.small}>(since you loaded this example)</p>
    </div>
  );
}

export default LightningCounter;