import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setFilter } from "../features/todos/todoSlice";
import type { TodoFilter as FilterType } from "../features/todos/toDoTypes";

export default function TodoFilter() {
  const dispatch = useAppDispatch();

  const { todos, filter } = useAppSelector(
    (state) => state.todo
  );

  const remaining = todos.filter(
    (todo) => !todo.completed
  ).length;

  const filters: FilterType[] = [
    "all",
    "active",
    "completed",
  ];

  return (
    <div className="todo-controls">
      <span>{remaining} tasks remaining</span>

      <div className="filter-buttons">
        {filters.map((item) => (
          <button
            key={item}
            className={filter === item ? "active-filter" : ""}
            onClick={() => dispatch(setFilter(item))}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}