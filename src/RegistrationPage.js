import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function RegistrationPage() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    console.log("Handled");
  }

  return (
    <div className="InputPage">
      <div className="InputBox">
        <div className="TextBox">
          <input
            type="text"
            required
            value={firstname}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
        </div>
        <div className="TextBox">
          <input
            type="text"
            required
            value={lastname}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
        </div>
        <div className="TextBox">
          <input
            type="text"
            required
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
        </div>
        <div className="TextBox">
          <input
            type="number"
            required
            value={age}
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
        </div>
        <div className="TextBox">
          <input
            type="number"
            required
            value={mobile}
            placeholder="Mobile No."
            onChange={(e) => setMobile(e.target.value)}
          />
          <br />
        </div>
        <div className="TextBox">
          <input
            type="text"
            required
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
        </div>
        <div className="TextBox">
          <input
            type="password"
            required
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
        </div>
        <div className="TextBox">
          <input type="password" required placeholder="Confirm Password" />
          <br />
        </div>
        <div className="Btn">
          <button className="SubmitBtn" type="submit" onClick={handleSubmit}>
            Register
          </button>
        </div>
        <p>
          Already Have An Account?
          <NavLink to="/login" exact>
            &nbsp; Login Now.
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default RegistrationPage;
