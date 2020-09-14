import React from "react";
import "./LoginPage.css";
import { NavLink } from "react-router-dom";

function LoginPage() {
  return (
    <div className="InputPage">
      <div className="InputBox">
        <div className="TextBox">
          <input type="text" placeholder="Username" /> <br />
        </div>
        <div className="TextBox">
          <input type="password" placeholder="Password" /> <br />
        </div>
        <div className="Btn">
          <button className="SubmitBtn" type="submit">
            Login
          </button>
          <br />
        </div>
        <p>
          Don't Have An Account?
          <NavLink to="/register" exact>
            &nbsp; Register Now.
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
