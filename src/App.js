import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import "./App.css";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import RegistrationPage from "./RegistrationPage";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Header">
          <div className="MenuBar">
            <NavLink to="/" exact>
              HOME
            </NavLink>
            <NavLink to="/about" exact>
              ABOUT
            </NavLink>
            <NavLink to="/login" exact>
              LOGIN
            </NavLink>
            <NavLink to="/register" exact>
              REGISTER
            </NavLink>
          </div>
        </div>
      </div>
      <Route path="/" exact strict component={HomePage} />
      <Route path="/about" exact strict component={AboutUs} />
      <Route path="/login" exact strict component={LoginPage} />
      <Route path="/register" exact strict component={RegistrationPage} />
    </Router>
  );
}

export default App;
