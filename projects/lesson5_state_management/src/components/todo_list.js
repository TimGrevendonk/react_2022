import { useRecoilValue } from "recoil";
import { todoListFilteredState, todoListState } from "../store";

import TodoItem from "./todo_item";
import TodoItemCreator from "./todo_item_creator";
import TodoListFilters from "./todo_list_filters";
import TodoListStats from "./todo_list_stats";

export default function TodoList() {
  const todoList = useRecoilValue(todoListFilteredState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
