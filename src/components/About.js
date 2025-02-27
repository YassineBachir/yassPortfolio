import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaLock, FaChartBar, FaBrain, FaBook, FaDumbbell, FaUtensils } from "react-icons/fa";

const interests = [
  { icon: <FaLock className="text-red-400" />, label: "Cybersécurité" },
  { icon: <FaChartBar className="text-yellow-400" />, label: "Data" },
  { icon: <FaBrain className="text-blue-400" />, label: "Intelligence Artificielle" },
  { icon: <FaBook className="text-green-400" />, label: "Lecture" },
  { icon: <FaDumbbell className="text-pink-400" />, label: "Fitness" },
  { icon: <FaUtensils className="text-orange-400" />, label: "Cuisine" },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white overflow-hidden"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
        
        
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full max-w-[400px] overflow-hidden mx-auto relative"
        >
          <img
            src="images/image2.png"
            alt="Profile"
            className="w-200 h-150 mr-11 rounded-full border-4 border-purple-500 shadow-lg"
          />
        </motion.div>

       
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-2/3 text-center md:text-left max-w-[600px] "
        >
          <h2 className="text-4xl font-bold text-white mb-6 mt-6 mr-10">À propos de moi</h2>
          <p className="max-w-2xl">
            Je suis passionnée par la technologie et déterminée à approfondir mes connaissances
            sur les dernières tendances du secteur. Ma curiosité intellectuelle me pousse à rester 
            informée des avancées technologiques et à explorer de nouveaux horizons à travers des 
            projets académiques et des stages.
          </p>

        
          <div className="flex justify-center md:justify-start gap-6 mt-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-400">1</h3>
              <p>Années d'Expérience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-400">10</h3>
              <p>Projets Réalisés</p>
            </div>
          </div>

         
          <h3 className="text-3xl font-bold mt-8">Centres d'intérêt</h3>
          <motion.div
  className="mt-4 flex flex-wrap justify-center md:justify-start gap-3"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.5, delay: 0.3 }}
>
  {interests.map((interest, index) => (
    <motion.div
      key={index}
      className="bg-gray-800 p-2 rounded-md shadow-md flex items-center gap-1 text-sm font-medium"
      whileHover={{ scale: 1.05, rotate: 3 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {interest.icon} {interest.label}
    </motion.div>
  ))}
</motion.div>

          
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-black font-bold rounded-lg shadow-md hover:scale-105 transition-transform">
              Me Contacter
            </a>
            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold rounded-lg shadow-md opacity-70 hover:opacity-100 hover:scale-105 transition-transform">
              <a href="/CV_Yassine_MB_Ndiaye.pdf" target="_blank">Mon CV</a>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
