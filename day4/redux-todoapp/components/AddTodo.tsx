import { useState, type FormEvent } from "react";
import { useAppDispatch } from "../app/hooks";
import { addTodo } from "../features/todos/todoSlice";

export default function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim()) {
      return;
    }

    dispatch(addTodo(text.trim()));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input
        type="text"
        placeholder="Enter a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Add Todo</button>
    </form>
  );
}