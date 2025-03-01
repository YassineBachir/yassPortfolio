import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useLocation } from "react-router-dom";

const Work = () => {
  const [projects, setProjects] = useState([]);
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

  useEffect(() => {
    // Remplace "http://localhost:5000/api/projects" par l'URL de ton backend
    fetch("http://localhost:5000/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Erreur lors de la récupération des projets:", error));
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
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              animate="show"
              viewport={{ once: false, amount: 0.3 }}
              className="card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <Link to={`/projet/${project.id}`} className="block cursor-pointer hover:bg-gray-700 transition duration-300 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{project.nom}</h3>
                <p>{project.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
