import { createSlice } from "@reduxjs/toolkit";
import { initialUserState } from "../Types";
const initialState: initialUserState = {
  uid: "",
  photo: "",
  email: "",
  displayName: "",
  user: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
export default userSlice.reducer;
export const { login, logout } = userSlice.actions;
