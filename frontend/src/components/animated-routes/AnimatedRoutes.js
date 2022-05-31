import React from "react";
import "./AnimatedRoutes.scss";
import {Routes, Route, useLocation} from "react-router-dom";
import Main from "../main-home/Main";
import Login from "../login/Login";
import Fleet from "../fleet/Fleet";
import {AnimatePresence} from 'framer-motion';
import Contact from "../contact/Contact";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
              
        
        <Route exact path="/" element={<Main/>}/>
          
      
          
            
          <Route path="/fleet" element={<Fleet/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          </Routes>
          </AnimatePresence>

    );
}
export default AnimatedRoutes;