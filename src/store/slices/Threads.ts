import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { getThread } from "../redux/createAsync";

import {
  createThread,
  deleteThread,
  getThread,
  getThreadByUser,
  likeThread,
} from "../asyncThunk/createAsync";
import { IThread } from "../../types/thread";

export const threadsSlice = createSlice({
  name: "threads",
  initialState: {
    threads: [] as IThread[],
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
        console.log(action.payload);
        state.threads = action.payload;
      }
    );
    // builder.addCase(createThread.pending, (state) => {
    //   state.loading = true;
    // });
    builder.addCase(createThread.fulfilled, (state, action) => {
      state.threads.push(action.payload.data);
      console.log(`action`, action);
      console.log(`state.user`, state.threads);
    });

    builder.addCase(deleteThread.fulfilled, (state, action) => {
      state.threads = state.threads.filter(
        (item) => item.id !== action.payload.id
      );
    });

    builder.addCase(getThreadByUser.fulfilled, (state, action) => {
      console.log(action.payload);
    });

    builder.addCase(likeThread.fulfilled, (state, action) => {
      console.log(`action`, action);
      state.threads = state.threads.filter((item) => {
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

export default threadsSlice.reducer;
