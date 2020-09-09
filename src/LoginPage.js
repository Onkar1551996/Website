import React from "react";
import "./LoginPage.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import RegistrationPage from "./RegistrationPage";

function LoginPage() {
  return (
    <Router>
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
              Register
            </NavLink>
          </p>
        </div>
      </div>
      <Route path="/register" exact strict component={RegistrationPage} />
    </Router>
  );
}

export default LoginPage;
