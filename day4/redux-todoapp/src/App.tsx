import AddTodo from "../components/AddToDo";
import TodoList from "../components/TodoList";
import TodoFilter from "../components/TodoFilter";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <div className="todo-card">
        <h1>My Todo List</h1>
        <p className="subtitle">
          React + TypeScript + Redux Toolkit
        </p>

        <AddTodo />
        <TodoFilter />
        <TodoList />
      </div>
    </div>
  );
}