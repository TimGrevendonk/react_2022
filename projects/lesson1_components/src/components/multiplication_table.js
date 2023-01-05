// multiplicationTable function:
function MultiplicationTable({ ...props }) {
  const style = {
    fontFamily: "Comic Sans MS",
    textAlign: "center",
    width: 200,
    padding: 0,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#ffe0b2",
    filter: "drop-shadow(0px 0px 5px #666)",
  };

  return (
    <div style={style}>
      <Header number={props.number}></Header>
      <Row number={props.number}></Row>
    </div>
  );
}

// MultiplicationTable function:
function CapitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// multiplicationTable function:
function Header({ ...props }) {
  const stringNumbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    " six",
    "seven",
    "eight",
    "nine",
  ];
  const style = {
    fontSize: 50,
    color: "#e65100",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#ff9800",
  };

  return (
    <div style={style}>{CapitalizeString(stringNumbers[props.number])}</div>
  );
}

// multiplicationTable function:
function Row({ ...props }) {
  console.log("[multiplication_table] render:", { props });

  console.log("array", [...Array(10)]);
  const style = {
    fontSize: 20,
    color: "#455a64",
  };

  return (
    <div style={style}>
      {/* define an numbered array to loop with in JSX */}
      {[...Array(10)]
        // the map goes over each value in the array.
        .map((value, index) => {
          return (
            <MultplicationField
              index={index + 1}
              number={props.number}
            ></MultplicationField>
          );
        })}
    </div>
  );
}

// MultiplicationTable function:
function MultplicationField({ ...props }) {
  return (
    <>
      {props.index} x {props.number} = {props.index * props.number}
      <br />
    </>
  );
}

export default MultiplicationTable;
