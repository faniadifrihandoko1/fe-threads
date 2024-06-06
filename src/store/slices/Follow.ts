import { createSlice } from "@reduxjs/toolkit";

export const followSlice = createSlice({
  name: "follow",
  initialState: {
    isLoading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
