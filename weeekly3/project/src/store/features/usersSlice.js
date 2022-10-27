import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIUser from "../../apis/user.api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const retrievedUser = createAsyncThunk("fetch/retrievedUser", async () => {
  try {
    const response = await APIUser.retrieveUser();
    return response;
  } catch (err) {
    console.log(err);
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(retrievedUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(retrievedUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(retrievedUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
