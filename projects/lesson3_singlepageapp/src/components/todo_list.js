import { useState } from "react";
import InputForm from "./input_form";
import TodoItems from "./todo_items";

function TodoList() {
  const initial = [
    { text: "First todo item", date: "16/06", key: "1" },
    { text: "Second todo item", date: "09/10", key: "2" },
  ];
  // set the state with the default values from "initial"
  const [items, setItems] = useState(initial);

  function handleDelete(item) {
    setItems(
      // return all items except the item wich corresponds to the key.
      items.filter((i) => i.key !== item.key)
    );
  }

  function handleInsert(task) {
    // do not manipulate the state (using .push manipulates) use setState.
    const today = new Date();
    const shortDate = today.getDate() + "/" + (today.getMonth() + 1);
    setItems([...items, { text: task, date: shortDate, key: Date.now() }]);
  }

  return (
    <div className="todoListMain">
      {/* pass the parameters to the child component. */}
      <InputForm onInsert={handleInsert} />
      <TodoItems items={items} onDelete={handleDelete} />
    </div>
  );
}

export default TodoList;
