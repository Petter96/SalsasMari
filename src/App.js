import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar.js";
import "./components/Styles/main.css";

function App(){
  return(
    <div>
      <React.Fragment>
        <Navbar/>
      </React.Fragment>
      <div className="centered">
        <h1> SALSAS MARI </h1>
        <p> Artesanales Gourmet </p>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

