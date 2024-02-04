import { useAppSelector } from "../redux-hooks";

export function useAuth() {
  // const email = useAppSelector<string | null>((state) => state.email);
  // const token = useAppSelector<string | null>((state) => state.token);
  // const id = useAppSelector<string | null>((state) => state.id);

  const userDataString = localStorage.getItem("userData");
  let userData = JSON.parse(userDataString as string) || {};
  return {
    ...userData
  };
}
