import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { TodoState, TodoFilter } from './toDoTypes';

const initialState: TodoState = {
  todos: [],
  filter: "all",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    // Add a new todo
    addTodo: {
      reducer: (
        state,
        action: PayloadAction<{
          id: string;
          text: string;
          completed: boolean;
        }>
      ) => {
        state.todos.push(action.payload);
      },

      prepare: (text: string) => ({
        payload: {
          id: nanoid(),
          text,
          completed: false,
        },
      }),
    },

    // Toggle completed status
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(
        (item) => item.id === action.payload
      );

      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    // Delete a todo
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(
        (item) => item.id !== action.payload
      );
    },

    // Change the current filter
    setFilter: (state, action: PayloadAction<TodoFilter>) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  setFilter,
} = todoSlice.actions;

export default todoSlice.reducer;