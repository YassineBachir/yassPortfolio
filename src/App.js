import React from "react";    

import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

import Work from "./components/Work";
import Nav from "./components/Nav";
import Competences from "./components/Competences";


const App = () => {
    return (
        <div>
            <Header />
            <Banner />
            <About />
            <Competences />
            <Work />
            <Contact />
            <Nav/>
            
        </div>
    );
};

export default App;