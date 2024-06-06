import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/thread";
import { getSuggest } from "../asyncThunk/suggestAysnc";

export const suggestSlice = createSlice({
  name: "suggest",
  initialState: {
    suggest: [] as IUser[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSuggest.fulfilled, (state, action) => {
      state.suggest = action.payload;
    });
  },
});

export default suggestSlice.reducer;
