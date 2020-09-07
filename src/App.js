import React, { useState } from "react";
import "./App.css";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";

function App() {
  const [msg, setMsg] = useState("");

  function moveTo(page) {
    let val;
    switch (page) {
      case "login":
        val = <LoginPage />;
        setMsg(val);
        break;

      case "register":
        setMsg(<RegistrationPage />);
        break;

      default:
        setMsg("");
    }
    console.log(msg);
  }

  return (
    <div className="App">
      <div className="Header">
        <div className="MenuBar">
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/login" id="login" onClick={(e) => moveTo(e.target.id)}>
            LOGIN
          </a>
        </div>
      </div>
      <div className="Content">
        <h1>{msg}</h1>
      </div>
    </div>
  );
}

export default App;
