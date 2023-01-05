// ProgressBar function:
function ProgressBar({ ...props }) {
  console.log("[progress_bar] rendered:", { props });

  const style = {
    // border: "1px solid red",
    fontFamily: "Verdana",
    fontSize: 25,
    fontWeight: "bold",
  };

  return (
    <>
      <svg height="80" width="400" style={style}>
        <Bar color="lightgrey" width="100"></Bar>
        <Bar color={props.color} width={props.percentage}></Bar>
        <Label color={props.color} percentage={props.percentage}></Label>
      </svg>
    </>
  );
}

// ProgressBar function:
function Bar({ ...props }) {
  return (
    <>
      <g fill="none" stroke={props.color} stroke-width="25">
        <path
          stroke-linecap="round"
          d={"M20 55 l" + (parseInt(props.width) / 100) * 360 + " 0"}
        ></path>
      </g>
    </>
  );
}

// ProgressBar function:
function Label({ ...props }) {
  return (
    <text x="180" y="25" fill={props.color}>
      {props.percentage}
    </text>
  );
}

export default ProgressBar;
