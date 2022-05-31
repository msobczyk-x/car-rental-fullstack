import React from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
  

  return (
    <div className="Navbar">
      <div className="Navbar__logo">
        <Link to="/">
          <img src="./logo.png" alt="logo" />
        </Link>
      </div>
      <div className="Navbar__links">
        <NavLink className="Navbar_button" to="/">
          Home
        </NavLink>
        <NavLink className="Navbar_button" to="/fleet">
          Fleet
        </NavLink>
        <NavLink to="/contact" className="Navbar_button">
          Contact
        </NavLink>

        <Link className="Navbar_button" to="/login">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
