import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slices/Auth";
import { threadSlice } from "./slices/Thread";
import userReducer from "../store/slices/Test";

export const { AUTH_LOGIN, AUTH_CHECK, AUTH_LOGOUT } = authSlice.actions;
export const { GET_THREAD, POST_THREAD } = threadSlice.actions;
// export const {} = userSlice.actions;

export const authReducer = authSlice.reducer;
export const threadReducer = threadSlice.reducer;

export const rootReducer = combineReducers({
  auth: authReducer,
  thread: threadReducer,
  user: userReducer,
});
