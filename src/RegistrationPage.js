import React from "react";

function RegistrationPage() {
  return (
    <div className="InputPage">
      <div className="InputBox">
        <div className="TextBox">
          <input type="text" placeholder="First Name" /> <br />
        </div>
        <div className="TextBox">
          <input type="text" placeholder="Last Name" /> <br />
        </div>
        <div className="TextBox">
          <input type="text" placeholder="Email" /> <br />
        </div>
        <div className="TextBox">
          <input type="number" placeholder="Age" /> <br />
        </div>
        <div className="TextBox">
          <input type="number" placeholder="Mobile No." /> <br />
        </div>
        <div className="Btn">
          <button className="SubmitBtn" type="submit">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
