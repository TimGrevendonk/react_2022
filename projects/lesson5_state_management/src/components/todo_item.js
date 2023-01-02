import { useRecoilState } from "recoil";
import { todoListState } from "../store";

export default function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  function editItemText(event) {
    const index = todoList.findIndex((todoItem) => todoItem === item);
    const newList = [
      ...todoList.slice(0, index),
      {
        ...item,
        text: event.target.value,
      },
      ...todoList.slice(index + 1),
    ];

    setTodoList(newList);
  }

  function toggleItemCompletion() {
    const index = todoList.findIndex((todoItem) => todoItem === item);
    const newList = [
      ...todoList.slice(0, index),
      {
        ...item,
        isCompleted: !item.isCompleted,
      },
      ...todoList.slice(index + 1),
    ];

    setTodoList(newList);
  }

  function deleteItem() {
    const index = todoList.findIndex((todoItem) => todoItem === item);
    const newList = [...todoList.slice(0, index), ...todoList.slice(index + 1)];

    setTodoList(newList);
  }

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}
