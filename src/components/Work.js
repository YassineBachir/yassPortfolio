import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Work = () => {
  return (
    <section id="work" className="py-16 bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white">
      <div className="container mx-auto text-center">
        {/* Animation du titre */}
        <motion.h2
           variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-4xl font-bold mb-8 mt-5"
        >
          Mes Projets
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Projet 1 */}
          <motion.div
             variants={fadeIn("up", 0.2)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.3 }}
                   
            className="card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <Link to="/projet1" className="block cursor-pointer hover:bg-gray-700 transition duration-300 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Détection de présence de striga (Data science)</h3>
              <p>Ce projet consiste à détecter la présence de striga dans les champs.</p>
            </Link>
          </motion.div>

          {/* Projet 2 */}
          <motion.div
            variants={fadeIn("up", 0.2)}          
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
                               
                      
            className="card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <Link to="/projet2" className="block cursor-pointer hover:bg-gray-700 transition duration-300 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Création d’un site e-commerce</h3>
              <p>Ce site permet de faire des achats en ligne et est consacré uniquement aux femmes.</p>
            </Link>
          </motion.div>

          {/* Projet 3 */}
          <motion.div
           variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                  
            className="card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <Link to="/projet3" className="block cursor-pointer hover:bg-gray-700 transition duration-300 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Création d'un carnet d'adresse avec JavaSwing</h3>
              <p>Dans ce projet, nous allons créer un carnet d'adresse.</p>
            </Link>
          </motion.div>

          {/* Projet 4 */}
          <motion.div
            variants={fadeIn("up", 0.2)}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: false, amount: 0.3 }}
                     
            className="card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <Link to="/projet4" className="block cursor-pointer hover:bg-gray-700 transition duration-300 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Feu de circulation et contrôle de badge sur l’autoroute</h3>
              <p>Ce projet consistait à détecter si les feux de circulation sont allumés ou non.</p>
            </Link>
          </motion.div>

          {/* Projet 5 */}
          <motion.div
             variants={fadeIn("up", 0.2)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.3 }}
                    
            className="card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <Link to="/projet5" className="block cursor-pointer hover:bg-gray-700 transition duration-300 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Détection d'intrusion avec le Pentest Snort</h3>
              <p>Mise en place d’un outil Pentest (Snort) pour détecter une intrusion.</p>
            </Link>
          </motion.div>

          {/* Projet 6 */}
          <motion.div
             variants={fadeIn("up", 0.2)}
                      initial="hidden"
                      whileInView="show"
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
