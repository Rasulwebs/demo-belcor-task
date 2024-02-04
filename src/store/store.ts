import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice/userSlice";

export const store = configureStore({
  reducer: UserReducer,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
