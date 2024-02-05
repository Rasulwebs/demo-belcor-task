import { appInstance } from "@/configs/axios.config";
import { UserTypes } from "@/types/userTypes";

export const AuthService = {
  async login(props: UserTypes.UserFormLoginType) {
    return await appInstance.post("/users", { ...props });
  },

  async register(props: UserTypes.UserFormRegisterType) {
    return await appInstance.post("/users", { ...props });
  },
  async getAllUsers() {
    const { data } = await appInstance.get<UserTypes.UserAdditionalInfoType[]>("/users");
    return data;
  },

  async checkUser(props: UserTypes.UserCheckType) {
    return await appInstance.get(`/users?username=${props.username}`);
  },
};
