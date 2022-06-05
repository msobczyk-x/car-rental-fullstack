import React from "react";

import Navbar from "./components/navbar/Navbar";

import AnimatedRoutes from "./components/animated-routes/AnimatedRoutes";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";


const App = () => {
  return (
    
    <BrowserRouter>
    
      <div className="App">

      
        <Navbar />
        <AnimatedRoutes />

        <Footer/>
      </div>
      
    </BrowserRouter>
    
  );
};

export default App;
