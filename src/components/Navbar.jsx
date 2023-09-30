import React from "react";
import PropTypes from "prop-types";
import {  Link } from "react-router-dom";


function Navbar(props) {
  return (
    <div>
      {/* bg-light */}
      <nav
        className="navbar navbar-expand-lg navbar-light rounded"
        // style={{ backgroundColor: "#a4d1f1" }}
        // style={{ backgroundColor: "#fbc02d" }}
        style={props.myStyle}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{ color: props.myStyle.color }}
          >
            <b>{props.title}</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  style={{ color: props.myStyle.color }}
                >
                  <Link to="/" className="linkItem">Home</Link>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  style={{ color: props.myStyle.color }}
                >
                  <Link to="/about" className="linkItem">{props.about}</Link>
                  
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                style={{ color: props.myStyle.color }}
              >
                Search
              </button>
            </form>
            <button
              type="button"
              className="btn btn-primary mx-5"
              onClick={props.cT}
            >
              Change Theme
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string };

export default Navbar;
