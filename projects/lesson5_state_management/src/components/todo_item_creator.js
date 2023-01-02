import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../store";

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListState);

  function getId() {
    return todoList.length === 0
      ? 1
      : Math.max(...todoList.map((todo) => todo.id)) + 1;
  }

  function addItem() {
    const newList = [
      ...todoList,
      {
        id: getId(),
        text: inputValue,
        isCompleted: false,
      },
    ];

    setTodoList(newList);
    setInputValue("");
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <p>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={addItem}>Add</button>
    </p>
  );
}
