import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slices/Auth";

export const { AUTH_LOGIN, AUTH_CHECK } = authSlice.actions;

export const authReducer = authSlice.reducer;

export const rootReducer = combineReducers({
  auth: authReducer,
});
