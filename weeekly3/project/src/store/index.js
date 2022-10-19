import { combineReducers, configureStore } from "@reduxjs/toolkit";
import destinationSlice from "./features/destinationSlice";
import usersSlice from "./features/usersSlice";

const reducer = combineReducers({
  users: usersSlice,
  destination: destinationSlice,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
