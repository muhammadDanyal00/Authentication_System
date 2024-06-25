import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// initial state
const initialState = {
  user: null,
  token: Cookies.get("token") || null,
  loading: false,
  error: null,
};

// reducer functions
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.error = null;
      Cookies.remove("token");
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, setToken } =
  authSlice.actions;

export default authSlice.reducer;
