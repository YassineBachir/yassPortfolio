import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Competences = () => {
  return (
    <section
      id="competences"
      className="py-16 bg-black bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl font-bold mb-8 mt-5"
        >
          Compétences
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Langages */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="card bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Langages</h3>
            <p>Python, R, C</p>
            <img
              src="images/langages.jpg"
              alt="Langages"
              className="w-50 h-40 opacity-80 rounded-lg shadow-lg mt-4"
            />
          </motion.div>

          {/* Développement Web */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="card bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Développement Web</h3>
            <p>HTML, CSS, Java, React, Spring Boot</p>
            <img
              src="images/dev_web_mobile.jpg"
              alt="Développement Web"
              className="w-50 h-40 opacity-80 rounded-lg shadow-lg mt-4"
            />
          </motion.div>

          {/* Sécurité-Réseau */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="card bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Sécurité-Réseau</h3>
            <p>StrongSwan, Proxy, DMZ, LDAP, Snort</p>
            <img
              src="images/Securite.jpg"
              alt="Sécurité"
              className="w-50 h-40 opacity-80 rounded-lg shadow-lg mt-4"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Competences;
