import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  // reducers for different actions
  reducer: {
    auth: authReducer,
  },
});

export default store;
