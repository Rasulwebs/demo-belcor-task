export namespace QuizTypes {
  export interface QuizOptions {
    question: string;
    a: string;
    b: string;
    c: string;
    correct: string;
  }
  export interface AllQuizData {
    subject: string;
    options: QuizOptions[] | [];
  }

  export interface InitialStateQuizData extends AllQuizData {
    numberQuestion: number;
    correctAnswers: number;
    isOpenResultsModal:boolean
  }
}
