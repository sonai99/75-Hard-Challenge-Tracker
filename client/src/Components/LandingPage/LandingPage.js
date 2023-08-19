import React from "react";
import Rules from "./Rules/Rules";
import About from "./About/About";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <About />
      <Rules />
      <Link to="tasks">
        <button
          style={{
            backgroundColor: "white",
            color: "black",
            fontSize: "20px",
            padding: "15px 30px",
            borderRadius: "8px",
            border: "0.5px solid black",
            cursor: "pointer",
            transition: "background-color 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "black";
            e.target.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";
            e.target.style.color = "black";
          }}
        >
          Start the challenge now
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
