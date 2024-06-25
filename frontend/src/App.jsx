import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthenticatedRoute from "./utils/AuthenticatedRoute";
import { setToken } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      dispatch(setToken(token));
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <AuthenticatedRoute token={token}>
            <Home />
          </AuthenticatedRoute>
        }
      />
    </Routes>
  );
}

export default App;
