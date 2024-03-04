import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { getThread } from "../redux/createAsync";

import {
  createThread,
  deleteThread,
  getThread,
  likeThread,
} from "../asyncThunk/createAsync";
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

    builder.addCase(likeThread.fulfilled, (state, action) => {
      console.log(`action`, action);
      state.user = state.user.filter((item) => {
        if (item.id === action.payload?.threadId) {
          return {
            ...item,
            like_count: action.payload?.isLike
              ? (item.like_count ?? 0) + 1
              : (item.like_count ?? 0) - 1,
          };
        }
        return item;
      });
      return state;
    });
  },
});

export default userSlice.reducer;
