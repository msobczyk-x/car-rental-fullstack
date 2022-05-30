import React from "react";
import "./Navbar.scss";
import { Link,NavLink} from 'react-router-dom';


const Navbar = (props) => {

  const handleClick = (div) => {
    const divElement = document.getElementById(div);
    divElement.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="Navbar">
      <div className="Navbar__logo">
        <Link to="/">
        <img src="./logo.png" alt="logo" />
        </Link>
      </div>
      <div className="Navbar__links">
      <NavLink className="Navbar_button" to="/">Home</NavLink>
      <a href="#about" onClick={()=> {handleClick('about')}} className="Navbar_button">About</a>
       
        <NavLink className="Navbar_button" to="/fleet">
          Fleet
          </NavLink>
        
        <Link className="Navbar_button" to="/login">Log in</Link>
      </div>
    </div>
  );
};

export default Navbar;
