import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants"; 

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Stage en Développement Web",
      company: "LITA ESP",
      duration: "06/01/2024 - 07/03/2024",
      description: "Conception et Réalisation d’une plateforme SaaS générique de prise de Rendez-vous avec REACT",
    },
    {
      id: 2,
      title: "Stage en Développement Web",
      company: "Labolatoire UAM",
      duration: "02/06/2024 - 13/07/2024",
      description: "Création d’une plateforme EDA pour le polytech de Diamniadio (UAM) avec Moodle.",
    },
  ];

  return (
    <section
      id="experiences"
      className="py-6 px-4 bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Expériences</h2>
        
        {/* Grille des expériences */}
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="bg-gray-800 shadow-md p-5 rounded-lg text-white"
            >
              <h3 className="text-xl font-semibold">{experience.title}</h3>
              <p className="text-gray-400">{experience.company}</p>
              <p className="text-gray-400">{experience.duration}</p>
              <p className="text-gray-300 mt-2">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
