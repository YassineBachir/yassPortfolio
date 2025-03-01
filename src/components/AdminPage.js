import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Banner from "./Banner";
import About from "./About";
import Competences from "./Competences";
import Work from "./Work";
import Contact from "./Contact";
import Header from "./Header";
import Nav from "./Nav";

export default function AdminPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("authenticated"); 
    if (!isAuthenticated) {
      navigate("/login"); 
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("authenticated"); 
    navigate("/login"); 
  };

  return (
    <section className="bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white min-h-screen">
      <Header />

      <div className="container mx-auto flex justify-end p-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-red-400 transition"
        >
          Se Déconnecter
        </button>
      </div>

      <Banner />

      <div className="container mx-auto text-center my-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/add-project")}
          className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-green-400 transition mx-2"
        >
          Ajouter un Projet
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/add-skill")}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-blue-400 transition mx-2"
        >
          Ajouter une Compétence
        </motion.button>
      </div>

      <About />
      <Competences />
      <Work />
      <Contact />
      <Nav />
    </section>
  );
}
