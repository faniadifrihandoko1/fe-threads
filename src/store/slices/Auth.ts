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

      const user: IUser = {
        id: userLogin.id,
        username: userLogin.username,
        fullName: userLogin.fullName,
        email: userLogin.email,
        photo_profile: userLogin.photo_profile,
        bio: userLogin.bio,
        follower_count: userLogin.follower?.length,
        following_count: userLogin.following?.length,
      };
      return user;
    },
    AUTH_CHECK: (state, action) => {
      const payload = action.payload;

      const user: IUser = {
        id: payload.id,
        username: payload.username,
        fullName: payload.fullName,
        email: payload.email,
        photo_profile: payload.photo_profile,
        bio: payload.bio,
        follower_count: payload.follower_count,
        following_count: payload.following_count,
      };
      return user;
    },

    AUTH_LOGOUT: () => {
      setAuthToken("");
      localStorage.removeItem("token");

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      return initialAuthUser;
    },
  },
});
