import React from "react";
import "./LoginSection.scss";
import { InvalidLogin, RightArrow } from "../assets";
import { useNavigate } from "react-router-dom";
function LoginSection() {
  const navigate = useNavigate();
  return (
    <div className="login-section">
      <div className="login-container">
        <h2 className="login-heading poppins-bold">Login</h2>
        <form id="login-form">
          <label htmlFor="panNumber" className="poppins-light">
            PAN Number* <br />
            <input type="text" id="panNumber" />
            <br />
            <p>Please enter valid PAN number</p>
          </label>

          <label htmlFor="mobileNumber">
            Mobile Number* <br />
            <input type="text" id="mobileNumber" />
          </label>

          <button type="submit" onClick={ () => navigate("/dashboard")}>
            SUBMIT <img src={RightArrow} alt="right arrow" />
          </button>
        </form>
        <div className="invalid-login">
          <img id="invalid-login-img" src={InvalidLogin} alt="invalid login" />
          <p>Invalid login credentials!</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSection;
