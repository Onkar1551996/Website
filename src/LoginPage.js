import React from "react";
import "./LoginPage.css";
import RegistrationPage from "./RegistrationPage";

function LoginPage() {
  function register() {
    return <RegistrationPage />;
  }
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
          <a href="/register" onClick={register}>
            &nbsp;Resgister Now.
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
