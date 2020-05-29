import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/mlog.png";
export default function Navi() {
  return (
    <div id="app">
      <div className="container" >
        <nav className="navbar navbar-expand-lg navbar-light ">
          <Link className="navbar-brand" to="/" style={{ color: "#2b7127" }}>
            <img
              src={Logo}
              alt="."
              style={{ borderRadius: "77%", height: "32px", width: "60px" }}
            ></img>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            style={{ justifyContent: "flex-end" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item active ">
                <Link className="nav-link" to="/work" style={{ color: "#2b7127" }}>
                  Work
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{ color: "#2b7127" }}>
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" style={{ color: "#2b7127" }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
