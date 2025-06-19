import React from 'react';
import { useNavigate } from 'react-router-dom'; // import for navigation
import { useAuth } from '../context/AuthContext';
import '../styles/login.css';
import logo from '../assets/Anuvrtti.png';

export default function Login() {
  const navigate = useNavigate(); // initialize navigation
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log('Login credentials:', { email, password });

    // Simulated authentication (always true)
    if (email && password) {
      // simulate successful login
      login();
      navigate('/dashboard'); // redirect to dashboard
    } else {
      alert("Please fill in both fields."); // basic fallback
    }
  };

  return (
    // <div className="container">
    //   <h1>Anuvrtti</h1>
    //   <div className="logo">
    //     <img src={logo} alt="Anuvrtti logo" width="250" />
    //   </div>
    //   <div className="login-box">
    //     <h2>Sign in to your account</h2>
    //     <form id="loginForm" onSubmit={handleSubmit}>
    //       <label htmlFor="email">EMAIL</label>
    //       <input type="email" id="email" name="email" placeholder="johndoe@example.com" required />

    //       <label htmlFor="password">PASSWORD</label>
    //       <input type="password" id="password" name="password" placeholder="••••••••" required />

    //       <a href="#">Forgot your password? Contact Team Anuvrtti.</a>

    //       <button type="submit">Login</button>
    //     </form>
    //   </div>
    // </div>
    <>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
    </>


  );
}



