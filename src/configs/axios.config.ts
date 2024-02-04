import axios, { AxiosError, AxiosInstance } from "axios";
import { store } from "@/store/store";
import { resetUser } from "@/utils/resetUser";
import { addNotificationAxios } from "@/utils/addNotification";

const axiosStage = "https://65ba0556b4d53c066551d897.mockapi.io/belcor";

export const appInstance: AxiosInstance = axios.create({
  baseURL: axiosStage,
  timeout: 65000,
  headers: {
    "Content-Type": "application/json",
  },
});

appInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      resetUser();
    }

    if (error.response?.status === 400) {
      addNotificationAxios(error);
    }

    throw error;
  }
);
