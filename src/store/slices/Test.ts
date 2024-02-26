import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { getThread } from "../redux/createAsync";

import { createThread, deleteThread, getThread } from "../redux/createAsync";
import { IThread } from "../../types/thread";

// const initialThread: any = [];

// export const getThread = createAsyncThunk("user/showThread", async () => {
//   try {
//     const response = await axiosInstance.get("/thread");
//     console.log(response.data);
//     return response.data;
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (error: Error | any) {
//     console.log(error);
//   }
// });

// export const createThread = createAsyncThunk(
//   "createThread",
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   async (data: any) => {
//     try {
//       const response = await axiosInstance.post("/thread", data);
//       console.log(data);
//       return response.data;
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (error: Error | any) {
//       return isRejectedWithValue(error.response.data);
//     }
//   }
// );

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [] as IThread[],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getThread.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getThread.fulfilled,
      (state, action: PayloadAction<IThread[]>) => {
        state.user = action.payload;
      }
    );
    // builder.addCase(createThread.pending, (state) => {
    //   state.loading = true;
    // });
    builder.addCase(createThread.fulfilled, (state, action) => {
      state.user.push(action.payload.data);
      console.log(`action`, action);
      console.log(`state.user`, state.user);
    });

    builder.addCase(deleteThread.fulfilled, (state, action) => {
      state.user = state.user.filter((item) => item.id !== action.payload.id);
    });
  },
});

export default userSlice.reducer;
