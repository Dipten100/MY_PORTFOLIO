import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const [MenuToggler, setMenuToggler] = useState(false);

  return (
    <header className="header">
      <Link to={"/"} className="logo">
        Dipten <span>.</span>
      </Link>

      <label
        htmlFor=""
        className={`icon-menu ${MenuToggler ? "active" : ""}`}
        onClick={() => setMenuToggler(!MenuToggler)}
      >
        <div className="bar bar--1"></div>
        <div className="bar bar--2"></div>
        <div className="bar bar--3"></div>
      </label>

      <nav className={`navbar ${MenuToggler ? "active" : ""}`}>
        <Link to={"/"} style={{ "--i": "0" }}>
          Home
        </Link>
        {/* <Link to={"/services"} style={{ "--i": "1" }}>
          Services
        </Link> */}
        <Link to={"/resume"} style={{ "--i": "2" }}>
          Resume
        </Link>
        <Link to={"/projects"} style={{ "--i": "3" }}>
          Projects
        </Link>
        <Link to={"/contact"} style={{ "--i": "4" }}>
          Contact
        </Link>
      </nav>
      <Link to={"/contact"} className="hire-btn">
        <button type="button" className="lab-btn">
          Hire me
        </button>
      </Link>
    </header>
  );
};

export default Navbar2;
