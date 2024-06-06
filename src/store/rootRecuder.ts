import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/Auth";
// import { threadSlice } from "./slices/Thread";
import { threadsSlice } from "./slices/Threads";
import { suggestSlice } from "./slices/Suggest";
import { threadByIdSlice } from "./slices/threadById";

export const { AUTH_LOGIN, AUTH_CHECK, AUTH_LOGOUT } = authSlice.actions;

export const authReducer = authSlice.reducer;

export const rootReducer = configureStore({
  reducer: combineReducers({
    auth: authReducer,
    threads: threadsSlice.reducer,
    threadById: threadByIdSlice.reducer,
    suggest: suggestSlice.reducer,
  }),
});
