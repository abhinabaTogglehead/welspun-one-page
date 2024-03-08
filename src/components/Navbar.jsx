import React, { useEffect, useState } from "react";
import "./Navbar.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import { Sidebar } from "react-pro-sidebar";
import { LogoImg } from "../assets";
import { HiMenuAlt1 } from "react-icons/hi";
import Navbar2 from "./Navbar2";
function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 834);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 834);
    }

    window.addEventListener("resize", handleResize);


    return () => window.removeEventListener("resize", handleResize);
    if (!CSS.supports("backdrop-filter", "blur(10px)")) {
      document.body.classList.add("no-backdrop-filter");
    }

  }, []);
  return (
    <div className="navbar-container">
      {isMobile ? (
        <Navbar2 />
      ) : (
        <div className="desktop-navbar navbar-container">
          <img src={LogoImg} alt="main logo" id="logo-img" />
          <p className="nav-item dropdown poppins-medium navbar-text">
            <a
              className="nav-link dropdown-toggle font-size-main"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              About Us
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="nav-item dropend">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
              </li>
            </ul>
          </p>
          <p className="nav-item dropdown poppins-medium navbar-text">
            <a
              className="nav-link dropdown-toggle font-size-main"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              What We Do
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="nav-item dropend">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
              </li>
            </ul>
          </p>
          <p className="nav-item dropdown poppins-medium navbar-text">
            <a
              className="nav-link dropdown-toggle font-size-main"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Our Impact
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="nav-item dropend">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
              </li>
            </ul>
          </p>
          <p className="nav-item dropdown poppins-medium navbar-text">
            <a
              className="nav-link dropdown-toggle font-size-main"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Location
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="nav-item dropend">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
              </li>
            </ul>
          </p>
          <p className="nav-item dropdown poppins-medium navbar-text">
            <a
              className="nav-link dropdown-toggle font-size-main"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Newsroom
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="nav-item dropend">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
              </li>
            </ul>
          </p>
          <p className="nav-item dropdown poppins-medium navbar-text">
            <a
              className="nav-link dropdown-toggle font-size-main"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Enquire With Us
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="nav-item dropend">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
              </li>
            </ul>
          </p>
          <p className="nav-item dropdown poppins-medium navbar-text">
            <a
              className="nav-link dropdown-toggle font-size-main"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Partner Portal
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="nav-item dropend">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
              </li>
            </ul>
          </p>
          <p className="nav-item dropdown poppins-medium navbar-text">
            <a
              className="nav-link dropdown-toggle font-size-main"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Investor Portal
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="nav-item dropend">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
              </li>
            </ul>
          </p>
        </div>
      )}
    </div>
  );
}

export default Navbar;
