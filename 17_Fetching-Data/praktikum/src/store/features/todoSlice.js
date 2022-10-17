import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APITodos from "../../apis/todos.api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const retrievedTodos = createAsyncThunk("fetch/getTodos", async () => {
  try {
    const response = await APITodos.retrieveTodo();
    return response;
  } catch (err) {
    console.log(err);
  }
});

export const createdTodos = createAsyncThunk("fetch/createdTodos", async ({ id, title, completed }) => {
  try {
    const response = await APITodos.createTodo({ id, title, completed });
    return response;
  } catch (err) {
    console.log(err);
  }
});

export const updatedTodos = createAsyncThunk("fetch/updatedTodos", async ({ id, completed }) => {
  try {
    const response = await APITodos.updateTodo({ id, completed });
    return response;
  } catch (err) {
    console.log(err);
  }
});

export const deletedTodos = createAsyncThunk("fetch/deletedTodos", async (id) => {
  try {
    const response = await APITodos.deleteTodo(id);
    return response;
  } catch (err) {
    console.log(err);
  }
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(retrievedTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(retrievedTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(createdTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload);
      })
      .addCase(updatedTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(deletedTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.todos?.filter((task) => task.id !== action.payload);
      })
      .addCase(retrievedTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default todoSlice.reducer;
