import React from "react";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main-home/Main";
import Login from "./components/login/Login";
import Fleet from "./components/fleet/Fleet";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main/>}/>
          
      
        <Route path="/login" element={<Login/>}/>
          
        <Route path="/fleet" element={<Fleet/>}/>
        </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
