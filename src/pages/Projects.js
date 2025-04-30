
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Projects = () => {
  const [projects, setProjects] = useState([]);


  const staticProjects = [
    {
      id: 1,
      title: "Détection de présence de striga (Data science)",
      description: "Ce projet consiste à détecter la présence de striga dans les champs.",
      link: "/projet1",
    },
    {
      id: 2,
      title: "Création d’un site e-commerce",
      description: "Ce site permet de faire des achats en ligne et est consacré uniquement aux femmes.",
      link: "/projet2",
    },
    {
      id: 3,
      title: "Création d'un carnet d'adresse avec JavaSwing",
      description: "Dans ce projet, nous allons créer un carnet d'adresse.",
      link: "/projet3",
    },
    {
      id: 4,
      title: "Conception et Réalisation d’une plateforme SaaS générique de prise de Rendez-vous",
      description: "Dans ce projet, nous avons créer un site pour permettre de prendre rendez-vous.",
      link: "/projet4",
    },
    {
      id: 5,
      title: "Détection d'intrusion avec le Pentest Snort",
      description: "Mise en place d’un outil Pentest (Snort) pour détecter une intrusion.",
      link: "/projet5",
    },
    {
      id: 6,
      title: "Analyse des données sur l’agriculture au Sénégal",
      description: "Analyser les données de l'agriculture.",
      link: "/projet6",
    },
    {
      id: 6,
      title: "Analyse des données sur l’agriculture au Sénégal",
      description: "Analyser les données de l'agriculture.",
      link: "/projet6",
    },
    {
      id: 6,
      title: "Analyse des données sur l’agriculture au Sénégal",
      description: "Analyser les données de l'agriculture.",
      link: "/projet6",
    },
  ];


  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects");
        const data = await response.json();
  
        setProjects(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des projets:", error);
      }
    };
    fetchProjects();
  }, []);

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
        
          {staticProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              animate="show"
              viewport={{ once: false, amount: 0.3 }}
              className="card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <Link to={project.link} className="block cursor-pointer hover:bg-gray-700 transition duration-300 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </Link>
            </motion.div>
          ))}

         
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              animate="show"
              viewport={{ once: false, amount: 0.3 }}
              className="card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <Link to={project.link} className="block cursor-pointer hover:bg-gray-700 transition duration-300 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
