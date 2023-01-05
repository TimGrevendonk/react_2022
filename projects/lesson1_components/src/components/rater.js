// Rater function:
function Rater({ ...props }) {
  console.log("[rater] rendered:", { props });

  const style = {
    fontSize: 20,
    color: "#455a64",
    fontFamily: "Comic Sans MS",
    textAlign: "center",
    width: 200,
    padding: 0,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    filter: "drop-shadow(0px 0px 5px #666)",
  };
  console.log("max", [...Array(props.max)]);

  return (
    <div style={style}>
      <Label percantage={props.rating / props.max}></Label>
      {[...Array(parseInt(props.max))].map((value, index) => {
        console.log("===", value, index);
        return <Star rating={props.rating} index={index}></Star>;
      })}
    </div>
  );
}

// Rater function:
function Label({ ...props }) {
  console.log(props.percantage);
  return checkRating(props.percantage);
}

// Rater function:
function checkRating(rating) {
  if (rating < 0.1) {
    return <div>disaster</div>;
  }
  if (rating < 0.3) {
    return <div>insufficient</div>;
  }
  if (rating < 0.5) {
    return <div>sufficient</div>;
  }
  if (rating < 0.6) {
    return <div>average</div>;
  }
  if (rating < 0.8) {
    return <div>good</div>;
  }
  if (rating < 0.9) {
    return <div>very good</div>;
  }
  return <div>exellent</div>;
}

// Rater function:
function Star({ ...props }) {
  const style = {
    width: 50,
  };
  if (props.index < props.rating) {
    return <img style={style} src="/images/starOn.png" alt="no star" />;
  }
  return <img style={style} src="/images/starOff.png" alt="a star" />;
}

export default Rater;
