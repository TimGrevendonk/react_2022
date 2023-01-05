function Hello({ ...props }) {
  return (
    <h1>
      Hello {props.target}! {props.text}
    </h1>
  );
}

// You don't need to make all functions
// in the component available, only 1 default
export default Hello;
