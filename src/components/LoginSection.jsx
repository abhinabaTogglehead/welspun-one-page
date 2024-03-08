import React, { useEffect, useState } from "react";
import "./LoginSection.scss";
import { InvalidLogin, RightArrow } from "../assets";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
function LoginSection() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 834);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 834);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {isMobile && <Navbar2 />}
      {!isMobile && <Navbar />}
      <div className="login-section ">
        <div className="login-container">
          <div className="login-heading-container">
            <h2
              className="login-heading poppins-bold"
              style={{
                fontFamily: "Montserrat",
                fontWeight: "700",
                fontSize: "",
              }}
            >
              Login
            </h2>
          </div>
          <form id="login-form">
            <div className="input-container">
              <label
                htmlFor="panNumber"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontFamily: "Montserrat",
                  fontWeight: "400",
                }}
                className="poppins-light"
              >
                PAN Number*
                <input type="text" id="panNumber" />
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "400",
                  }}
                >
                  Please enter valid PAN number
                </p>
              </label>

              <label
                htmlFor="mobileNumber"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontFamily: "Montserrat",
                  fontWeight: "400",
                }}
              >
                Mobile Number*
                <input type="text" id="mobileNumber" />
              </label>
            </div>

            <button
              type="submit"
              onClick={() => navigate("/dashboard")}
              style={{
                fontFamily: "Montserrat",
                fontWeight: "600",
                fontSize: "1.125em",
              }}
            >
              SUBMIT <img src={RightArrow} alt="right arrow" />
            </button>
          </form>
          <div className="invalid-login">
            <img
              style={{ width: "1.5em", height: "1.5em" }}
              id="invalid-login-img"
              src={InvalidLogin}
              alt="invalid login"
            />
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: "500",
                fontSize: "1.375em",
              }}
            >
              Invalid login credentials!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSection;
