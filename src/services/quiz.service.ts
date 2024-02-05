import { appInstance } from "@/configs/axios.config";
import { QuizTypes } from "@/types/quizTypes";
import { UserTypes } from "@/types/userTypes";

export const QuizService = {
  async getAllQuizSubject() {
    const { data } = await appInstance.get<QuizTypes.AllQuizData[]>("/quiz");
    return data;
  },

  async getAllQuizData(subject: string) {
    const { data } = await appInstance.get<QuizTypes.AllQuizData>(
      `/quiz?subject=${subject}`
    );
    return data;
  },

  async putCorrectAnswers(id: string, correctAnswers: number) {
    const { data } = await appInstance.put<UserTypes.IUser>(
      `/users/${id}`,
      {
        correctAnswers: correctAnswers,
      }
    );
    return data;
  },
};
