import { IUser } from "../../types/auth";
import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { setAuthToken } from "../../lib/axios";

const initialAuthUser: IUser = {
  id: 0,
  username: "",
  fullName: "",
  email: "",
  photo_profile: "",
  photo_cover: "",
  bio: "",
  follower_count: 0,
  following_count: 0,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthUser,
  reducers: {
    AUTH_LOGIN: (state, action) => {
      localStorage.setItem("token", action.payload);
      setAuthToken(action.payload);

      const userLogin: IUser = jwtDecode(action.payload);
      console.log(userLogin);

      state.id = userLogin.id;
      state.username = userLogin.username;
      state.fullName = userLogin.fullName;
      state.email = userLogin.email;
      state.photo_profile = userLogin.photo_profile;
      state.photo_cover = userLogin.photo_cover;
      state.bio = userLogin.bio;
      state.follower_count = userLogin.follower?.length;
      state.following_count = userLogin.following?.length;
    },
    AUTH_CHECK: (state, action) => {
      const payload = action.payload;
      state.id = payload.id;
      state.username = payload.username;
      state.fullName = payload.fullName;
      state.email = payload.email;
      state.photo_profile = payload.photo_profile;
      state.photo_cover = payload.photo_cover;
      state.bio = payload.bio;
      state.follower_count = payload.follower;
      state.following_count = payload.following;
    },

    AUTH_LOGOUT: () => {
      setAuthToken("");
      localStorage.removeItem("token");

      return initialAuthUser;
    },
  },
});
