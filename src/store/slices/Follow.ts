import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/thread";

const initialState: { followURL: string; follow: IUser[] } = {
  followURL: "follower",
  follow: [],
};

export const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {
    GET_FOLLOW: (state, action) => {
      const payload = action.payload;
      console.log(payload);
      state.follow = payload;
    },
    SET_FOLLOW_URL: (state, action) => {
      state.followURL = action.payload;
    },
    SET_FOLLOW: (state, action) => {
      const { id, is_following } = action.payload;
      const newData = state.follow.map((data: IUser) => {
        if (data.id === id) {
          return {
            ...data,
            is_following: !is_following,
          };
        }
        return data;
      });
      state.follow = newData;
      console.log(`action.payload`, action.payload);
    },
  },
});
