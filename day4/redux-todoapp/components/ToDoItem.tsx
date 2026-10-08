import { useAppDispatch } from "../app/hooks";
import {
  toggleTodo,
  deleteTodo,
} from "../features/todos/todoSlice";

import type { Todo } from "../features/todos/toDoTypes";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="todo-item">
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />

        <span className={todo.completed ? "completed" : ""}>
          {todo.text}
        </span>
      </label>

      <button
        className="delete-btn"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        Delete
      </button>
    </div>
  );
}