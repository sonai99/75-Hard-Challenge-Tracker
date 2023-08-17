import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="main-div">
          <div class="left">
            <div class="title">
              <h1 class="title-name">
                75 Hard Challenge <br />
                <span>Tracker</span>
              </h1>
            </div>
          </div>
          <div class="right">
            <div class="button">
              <button>Login</button>
              <button>SignUp</button>
            </div>
          </div>
        </div>
      );
}

export default Header