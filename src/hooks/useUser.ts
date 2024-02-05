import { UserTypes } from "@/types/userTypes";
import { useAppSelector } from "./redux-hooks";

export default function useUser() {
  const user = useAppSelector<UserTypes.AuthUserTypes>(
    (state) => state.user.user as UserTypes.AuthUserTypes
  );

  return {
    ...user,
  };
}
