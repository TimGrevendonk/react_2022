function TodoItems({ ...props }) {
  // use map as foreach, with a key for each item.
  const output = props.items.map ( (item) => {
    return (
      // make a fcuntion from the onclick so we can give the item as value.
      <li key={item.key} onClick={() => props.onDelete(item)}>
        {item.text}
        <br />
            <div className="smallerText">
                {item.date}
            </div>
        </li>
    )
  });
  

  return (
    <ul className="theList">
      {output}
    </ul>
  );
}

export default TodoItems;
