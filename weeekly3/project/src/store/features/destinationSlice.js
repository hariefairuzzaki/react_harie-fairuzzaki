import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIDestination from "../../apis/destination.api";

const initialState = {
  data: [],
  currentData: [],
  status: "idle",
  error: null,
};

export const retrievedDestination = createAsyncThunk("fetch/retrievedDestination", async () => {
  try {
    const response = await APIDestination.retrieveDestination();
    return response;
  } catch (err) {
    console.log(err);
  }
});

export const getDestinationById = createAsyncThunk("fetch/getDestinationById", async (id) => {
  try {
    const response = await APIDestination.getDestinationByIds(id);
    return response;
  } catch (err) {
    console.log(err);
  }
});

const destinationSlice = createSlice({
  name: "destination",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(retrievedDestination.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(retrievedDestination.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getDestinationById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentData = action.payload;
      })
      .addCase(retrievedDestination.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default destinationSlice.reducer;
