import { useAppSelector } from "../app/hooks";
import TodoItem from "./ToDoItem";

export default function TodoList() {
  const { todos, filter } = useAppSelector(
    (state) => state.todo
  );

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }

    return true;
  });

  return (
    <div className="todo-list">
      {filteredTodos.length === 0 ? (
        <p className="empty-message">No tasks found.</p>
      ) : (
        filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </div>
  );
}