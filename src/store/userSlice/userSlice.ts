import { UserTypes } from "@/types/userTypes";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";

function getUser(): UserTypes.AuthUserTypes | null {
  if (typeof window !== "undefined") {
    return JSON.parse(window.localStorage.getItem("user") as string);
  } else {
    return null;
  }
}
const initialUser = getUser();

const initialState: UserTypes.IUser | null = {
  user: initialUser,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, payload: PayloadAction<UserTypes.AuthUserTypes>) {
      state.user = payload.payload;
      window.localStorage.setItem("user", JSON.stringify(payload.payload));
    },
    removeUser(state) {
      state.user = null;
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("subject");
    },
  },
});

export const { setUser, removeUser } = UserSlice.actions;

export default UserSlice.reducer;
