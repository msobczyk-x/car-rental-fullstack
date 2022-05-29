import React from "react";
import "./Footer.scss";


const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__logo">
        <img src="./logo.png" alt="logo" />
      </div>
      <div className="Footer__info">
        <p>CAR RENTALS POLAND</p>
        <p>ul. Miałki Szlak 120</p>
        <p>80-122 Gdańsk</p>
        </div>
    </div>
  );
}

export default Footer;