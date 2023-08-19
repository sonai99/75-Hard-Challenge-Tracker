import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Create a CSS file for this component

const Login = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button className="submit-button">Submit</button>
      </form>

      <Link to="/signup" className="signup-link">
        <button className="signup-button">Sign Up</button>
      </Link>
    </div>
  );
};

export default Login;
