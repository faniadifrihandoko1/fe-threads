import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slices/Auth";
import { threadSlice } from "./slices/Thread";
import threadsReducer from "./slices/Threads";
import { userSlice } from "./slices/User";
import { followSlice } from "./slices/Follow";

export const { AUTH_LOGIN, AUTH_CHECK, SET_FOLOWING_COUNT, AUTH_LOGOUT } =
  authSlice.actions;
export const { GET_THREAD, POST_THREAD } = threadSlice.actions;
export const { GET_FOLLOW, SET_FOLLOW, SET_FOLLOW_URL } = followSlice.actions;
// export const {} = userSlice.actions;

export const authReducer = authSlice.reducer;
export const threadReducer = threadSlice.reducer;
export const followReducer = followSlice.reducer;

export const rootReducer = combineReducers({
  auth: authReducer,
  thread: threadReducer,
  threads: threadsReducer,
  user: userSlice.reducer,
  follow: followReducer,
});
