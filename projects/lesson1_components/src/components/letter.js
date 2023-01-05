function Letter({ ...props }) {
  const letterStyle = {
    padding: 10,
    margin: 10,
    backgroundColor: props.bgcolor,
    color: "#333",
    display: "inline-block",
    fontFamily: "monospace",
    fontSize: 32,
    textAlign: "center",
  };

  return (
    // props.children returns the content
    // of <Letter>...</Letter>
    <div style={letterStyle} className="letter">
      {props.children}
    </div>
  );
}

export default Letter;
