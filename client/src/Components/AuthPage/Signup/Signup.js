import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css"; // Create a CSS file for this component

const Signup = () => {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button className="submit-button">Submit</button>
      </form>

      <Link to="/login" className="login-link">
        <button className="login-button">Login</button>
      </Link>
    </div>
  );
};

export default Signup;
