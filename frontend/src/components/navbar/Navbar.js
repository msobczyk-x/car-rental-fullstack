import React from "react";
import "./Navbar.scss";


const Navbar = () => {
  return (
    <div className="Navbar">
     <div className="Navbar__logo">
       <h1>CAR RENTALS</h1>
       <h2>POLAND</h2>
       </div>
        <div className="Navbar__anks">
          
            <a>Home</a>
            <a>About</a>
            <a>Fleet</a>
            <a>Regulamins</a>
          
          </div>
    </div>
  );
}

export default Navbar;
