import React, { useState } from "react";
import api from "../api/api";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css"; // Import the CSS file

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/signup", formData);
      // console.log(response.data); // Handle success
      navigate("/login");
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form className="signup-form" onSubmit={handleSignup}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="signup-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="signup-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="signup-input"
        />
        <button type="submit" className="signup-button">
          Signup
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
