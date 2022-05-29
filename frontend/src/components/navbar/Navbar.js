import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__logo">
        <img src="./logo.png" alt="logo" />
      </div>
      <div className="Navbar__links">
        <a href="#home" className="Navbar_button btn-active" >
          Home
        </a>
        <a href="#home" className="Navbar_button">
          About
        </a>
        <a href="#home" className="Navbar_button">
          Fleet
        </a>
        <a href="#home" className="Navbar_button">
          Services
        </a>
      </div>
    </div>
  );
};

export default Navbar;
