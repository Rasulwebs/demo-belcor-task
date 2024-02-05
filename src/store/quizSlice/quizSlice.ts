import { QuizTypes } from "@/types/quizTypes";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";

const initialState: QuizTypes.InitialStateQuizData = {
  subject: "",
  options: [],
  numberQuestion: 0,
  correctAnswers: 0,
  isOpenResultsModal: false,
};

const QuizSlice = createSlice({
  name: "allQuizData",
  initialState,
  reducers: {
    setAllQuizData(state, payload: PayloadAction<QuizTypes.AllQuizData>) {
      state.subject = payload.payload.subject;
      state.options = payload.payload.options;
      // window.localStorage.setItem("subject", payload.payload.subject);
    },
    setNumberAnswers(state, payload: PayloadAction<number>) {
      state.numberQuestion = payload.payload;
    },
    setCorrectAnswers(state, payload: PayloadAction<number>) {
      state.correctAnswers = payload.payload;
    },
    setIsOpenResultsModal(state, payload: PayloadAction<boolean>) {
      state.isOpenResultsModal = payload.payload;
    },
  },
});

export const {
  setAllQuizData,
  setNumberAnswers,
  setCorrectAnswers,
  setIsOpenResultsModal,
} = QuizSlice.actions;

export default QuizSlice.reducer;
