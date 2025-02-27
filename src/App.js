import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Striga from "./pages/Striga";
import Banner from "./components/Banner";
import About from "./components/About";
import Competences from "./components/Competences";
import Work from "./components/Work";
import Contact from "./components/Contact";
import ProjetEcommerce from "./pages/ProjetEcommerce";
import CarnetAdresse from "./pages/CarnetAdresse";
import SenRV from "./pages/SenRV";
import AdminPage from "./components/AdminPage";
import Skills from "./pages/Skills";
import LoginPage from "./components/LoginPage";
import AddProjectPage from "./pages/AddProjectPage";
import AddSkillPage from "./pages/AddSkillPage";

function PrivateRoute({ children }) {
  return localStorage.getItem("isAuthenticated") === "true" ? children : <Navigate to="/login" />;
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<>
              <Banner />
              <About />
              <Competences />
              <Work />
              <Contact />
            </>
          } />
         
          <Route path="/projet1" element={<Striga />} />
          <Route path="/projet2" element={<ProjetEcommerce />} />
          <Route path="/projet3" element={<CarnetAdresse />} />
          <Route path="/projet4" element={<SenRV />} />
          <Route path="/projet5" element={<Striga />} />
          <Route path="/skills" element={<Skills />} />
        
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<PrivateRoute><AdminPage /></PrivateRoute>} />
        <Route path="/add-project" element={<AddProjectPage />} />
        <Route path="/add-skill" element={<AddSkillPage />} />
      </Routes>
    </Router>
  );
};

export default App;
