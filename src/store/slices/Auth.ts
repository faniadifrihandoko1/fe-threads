import { IUser } from "../../types/auth";
import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const initialAuthUser: IUser = {
  id: 0,
  username: "",
  fullName: "",
  email: "",
  photo_profile: "",
  bio: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthUser,
  reducers: {
    AUTH_LOGIN: (state, action) => {
      console.log(`action`, action);
      localStorage.setItem("token", action.payload);

      const userLogin: IUser = jwtDecode(action.payload);

      const user: IUser = {
        id: userLogin.id,
        username: userLogin.username,
        fullName: userLogin.fullName,
        email: userLogin.email,
        photo_profile: userLogin.email,
        bio: userLogin.bio,
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
        photo_profile: payload.email,
        bio: payload.bio,
      };
      return user;
    },
  },
});
