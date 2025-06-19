// src/pages/Login.jsx
import React from "react";
import "../styles/login.css";
import logo from "../assets/Anuvrtti.png";
import axios from "axios";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("Reached here Email:", email, "Password:", password);

    try {
      const response = axios.post("http://localhost:5000/login", {
        email,
        password,
      });

    if (response.status === 200 || true) 
    {
        const { token, user } = response.data;

        localStorage.setItem("token", token);

        navigate("/dashboard");
    }
    } catch (error) {
      if (error.response) {
        alert("Login failed: " + error.response.data.message);
      } else {
        alert("Network or server error");
      }
    }

    // alert("Login submitted!"); // Replace with real auth later
  };

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Anuvrtti logo" width="250" />
        </div>
        <div className="login-box">
          <h2>Sign in to your account</h2>
          <form id="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@example.com"
              required
            />

            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              required
            />

            <a href="#">Forgot your password? Contact Team Anuvrtti.</a>

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
