import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import todoSlice from "./features/todoSlice";

const reducer = combineReducers({
  todo: todoSlice,
});

const store = configureStore({
  reducer: reducer,
  middleware: [thunk],
});

export default store;
