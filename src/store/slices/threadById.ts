import { createSlice } from "@reduxjs/toolkit";
import { IThread } from "../../types/thread";
import { getThreadById } from "../asyncThunk/createAsync";

export const threadByIdSlice = createSlice({
  name: "threadById",
  initialState: {
    threadById: {} as IThread,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getThreadById.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getThreadById.fulfilled, (state, action) => {
      state.threadById = action.payload;
      state.isLoading = true;
    });
  },
});

export default threadByIdSlice.reducer;
