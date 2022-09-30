import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      title: "Mengerjakan Exercise",
      completed: true,
    },
    {
      id: 2,
      title: "Mengerjakan Assignment",
      completed: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    todoAdded(state, action) {
      let newTodo = [...state.data];
      newTodo = [...newTodo, { id: state.data.length + 1, title: action.payload, completed: false }];
      state.data = newTodo;
    },
    todoDeleted(state, action) {
      let deleted = state.data.filter((task) => task.id !== action.payload);
      state.data = deleted;
    },
    todoCheckbox(state, action) {
      let todos = state.data.map((el) => (el.id === action.payload ? { ...el, completed: !el.completed } : el));
      state.data = todos;
    },
  },
});

export const { todoAdded, todoDeleted, todoCheckbox } = todoSlice.actions;
export default todoSlice.reducer;
