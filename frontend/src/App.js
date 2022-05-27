import React from "react";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main-home/Main";
import "./App.scss";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
