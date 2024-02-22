import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slices/Auth";
import { threadSlice } from "./slices/Thread";

export const { AUTH_LOGIN, AUTH_CHECK } = authSlice.actions;
export const { GET_THREAD } = threadSlice.actions;

export const authReducer = authSlice.reducer;
export const threadReducer = threadSlice.reducer;

export const rootReducer = combineReducers({
  auth: authReducer,
  thread: threadReducer,
});
