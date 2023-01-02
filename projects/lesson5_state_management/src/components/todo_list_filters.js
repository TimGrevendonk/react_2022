import { useRecoilState } from "recoil";
import { todoListFilterState } from "../store";

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  function updateFilter(event) {
    setFilter(event.target.value);
  }

  return (
    <p>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </p>
  );
}
