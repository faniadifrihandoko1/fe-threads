import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/thread";
import { getAllUser } from "../asyncThunk/createAsync";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [] as IUser[],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getAllUser.fulfilled,
      (state, action: PayloadAction<IUser[]>) => {
        console.log(action.payload);
        state.user = action.payload;
      }
    );
  },
});

export default userSlice.reducer;
