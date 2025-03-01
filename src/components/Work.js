import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Work = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#work") {
      setTimeout(() => {
        const element = document.querySelector("#work");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500); 
    }
  }, [location]);

  
  return (
    <section id="work" className="py-16 bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white">
      <div className="container mx-auto text-center">
     
        <motion.h2
           variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    animate="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-4xl font-bold mb-8 mt-5"
        >
          Mes Projets
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
          <motion.div
             variants={fadeIn("up", 0.2)}
                      initial="hidden"
                      whileInView="show"
                      animate="show"
                      viewport={{ once: false, amount: 0.3 }}
                   
            className="card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <Link to="/projet1"  rel="noopener noreferrer" className="block cursor-pointer hover:bg-gray-700 transition duration-300 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Détection de présence de striga (Data science)</h3>
              <p>Ce projet consiste à détecter la présence de striga dans les champs.</p>
            </Link>
          </motion.div>

        
          <motion.div
            variants={fadeIn("up", 0.2)}          
            initial="hidden"
            whileInView="show"
            animate="show"
            viewport={{ once: false, amount: 0.3 }}
                               
                      
            className="card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <Link to="/projet2" className="block cursor-pointer hover:bg-gray-700 transition duration-300 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Création d’un site e-commerce</h3>
              <p>Ce site permet de faire des achats en ligne et est consacré uniquement aux femmes.</p>
            </Link>
          </motion.div>

          
          

         
          <motion.div
           variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    animate="show"
                    viewport={{ once: false, amount: 0.3 }}
                  
            className="card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <Link to="/projet3" className="block cursor-pointer hover:bg-gray-700 transition duration-300 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Création d'un carnet d'adresse avec JavaSwing</h3>
              <p>Dans ce projet, nous allons créer un carnet d'adresse.</p>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.2)}
                     initial="hidden"
                     whileInView="show"
                     animate="show"
                     viewport={{ once: false, amount: 0.3 }}
                     
            className="card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <Link to="/projet4" className="block cursor-pointer hover:bg-gray-700 transition duration-300 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Conception et Réalisation d’une plateforme
              SaaS générique de prise de Rendez-vous</h3>
              <p>Dans ce projet, nous avons créer un site pour permettre de prendre rendez-vous.</p>
            </Link>
          </motion.div>
          

        
          <motion.div
             variants={fadeIn("up", 0.2)}
                      initial="hidden"
                      whileInView="show"
                      animate="show"
                      viewport={{ once: false, amount: 0.3 }}
                    
            className="card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <Link to="/projet5" className="block cursor-pointer hover:bg-gray-700 transition duration-300 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Détection d'intrusion avec le Pentest Snort</h3>
              <p>Mise en place d’un outil Pentest (Snort) pour détecter une intrusion.</p>
            </Link>
          </motion.div>

          
          <motion.div
             variants={fadeIn("up", 0.2)}
                      initial="hidden"
                      whileInView="show"
                      animate="show"
                      viewport={{ once: false, amount: 0.3 }}
                     
            className="card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <Link to="/projet6" className="block cursor-pointer hover:bg-gray-700 transition duration-300 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Analyse des données sur l’agriculture au Sénégal</h3>
              <p>Analyser les données de l'agriculture.</p>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
