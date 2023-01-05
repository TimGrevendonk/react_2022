import { useState } from "react";

function Number({ display }) {
  var textStyle = {
    fontSize: 72,
    fontFamily: "sans-serif",
    color: "#333",
    fontWeight: "bold"
  };

  return (
    <div style={textStyle}>
      {display}
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const backgroundStyle = {
    padding: 50,
    backgroundColor: "#FFC53A",
    width: 250,
    height: 100,
    borderRadius: 10,
    textAlign: "center"
  };
  
  function handleClick(event, operation) {
    if (operation === "-") {
      setCount(count - 1);
    } else if (event.shiftKey) {
      setCount(count + 10);
    } else {
      setCount(count + 1);
    }
  }

  function Button({...props}) {
    return (
      <>
      <button onClick={(event) => handleClick(event, props.operation)}>
        {props.operation} {props.text}
      </button>
      </>
    );
  }

  return (
    <div style={backgroundStyle}>
      <Number display={count}/>
      <Button onClick={handleClick} operation={"-"} />
      <Button onClick={handleClick} operation={"+"} text={"helllooo"} />
    </div>
  );
}

export default Counter;