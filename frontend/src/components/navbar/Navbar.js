import React  from "react";
import "./Navbar.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = (props) => {
let navigate = useNavigate();
const token = localStorage.getItem("authTokens");
const handleLogout = () => {
  localStorage.removeItem("authTokens");
  localStorage.removeItem("user");
  navigate("/");
}

  return (
    <div className="Navbar">


      
      <div className="Navbar__logo">
        <Link to="/">
          <img src="./logo.png" alt="logo" />
        </Link>
      </div>
      {
        token ? (
     
        <div className="Navbar__links">
        <NavLink className="Navbar_button" to="/">
        Home
      </NavLink>
      <NavLink className="Navbar_button" to="/fleet">
        Fleet
      </NavLink>
      <NavLink to="/profile" className="Navbar_button">
        Manage
      </NavLink>
      <NavLink to="/" className="Navbar_button" onClick={handleLogout} >
        Logout
        </NavLink>
        </div>
        ) : (
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
        )
      }
      
    </div>
  );
};

export default Navbar;
