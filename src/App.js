import React from "react";   
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

import Work from "./components/Work";
import Nav from "./components/Nav";
import Competences from "./components/Competences";


//import ProjetEcommerce from "./pages/ProjetEcommerce";
import Striga from "./pages/Striga.js";




const App = () => {
    return (
        <Router> 
            <Header />
            <Banner />
            <About />
            <Competences />
            <Work />
            <Contact />
            <Nav />
            
            <Routes>
                <Route path="/" element={<Work />} />
                {/* <Route path="/projet1" element={<Striga />} /> */}
                {/* <Route path="/projet2" element={<ProjetEcommerce />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
