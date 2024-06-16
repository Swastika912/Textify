/* eslint-disable react/no-typos */
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar  navbar-expand-lg navbar-${props.mode} bg-${props.mode} `} data-bs-theme="dark">
      <div className="container-fluid">
        <Link className={`navbar-brand text-${props.mode === "light" ? "dark": "light"} `} to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link  text-${props.mode === "light" ? "dark": "light"}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode === "light" ? "dark": "light"}`} to="/about">{props.aboutText}</Link>
            </li>

          </ul>

          {/* <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={props.toggleMode} style={{height: '30px' , width: '30px'}}></div>
          </div> */}
    
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
            <label className={`form-check-label text-${props.mode === "light" ? "dark":"light"}`} htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About text here'
};


// onClick needs a function not a function call ---- so you can't call props.togglemode('primary'), so use an arrow function instead 