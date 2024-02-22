import { createSlice } from "@reduxjs/toolkit";
import { IThread } from "../../types/thread";

const initialThread: IThread[] = [];

export const threadSlice = createSlice({
  name: "thread",
  initialState: initialThread,
  reducers: {
    GET_THREAD: (state, action) => {
      const thread: IThread[] = action.payload.map((data: IThread) => {
        return {
          id: data.id,
          content: data.content,
          image: data.image,
          created_at: data.created_at,
          updated_at: data.updated_at,
          user: {
            id: data?.user?.id,
            email: data.user?.email,
            fullName: data.user?.fullName,
            photo_profile: data.user?.photo_profile,
            username: data.user?.username,
          },
          reply: data.reply,
          like: data.like,
        };
      });

      return thread;
    },
    POST_THREAD: (state, action) => {
      console.log(`state`, state);
      console.log(`action`, action);
    },
  },
});

// export const { GET_THREAD, POST_THREAD } = threadSlice.actions;
// export default threadSlice.reducer;