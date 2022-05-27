import React from "react";
import "./Main.scss";
import HeaderPage from "../header-page/HeaderPage";
import About from "../about/About";
import Footer from "../footer/Footer";
const Main = () => {
  return (
    <div className="Main">

      <HeaderPage />
      <About />
      <Footer />
    </div>
  );
};

export default Main;
