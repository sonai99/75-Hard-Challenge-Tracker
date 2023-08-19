import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="main-div">
      <div class="left">
        <div class="title">
          <h1 class="title-name">
            <Link to="/">
              75 Hard Challenge <br />
              <span>Tracker</span>
            </Link>
          </h1>
        </div>
      </div>
      <div class="right">
        <div class="button">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>SignUp</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
