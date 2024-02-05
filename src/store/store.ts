import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice/userSlice";
import QuizReducer from "./quizSlice/quizSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    quiz: QuizReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
