import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function AdminPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      id="admin"
      className="py-16 bg-black bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white"
    >
      <div className="container mx-auto text-center">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          animate="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl font-bold mb-8 mt-5"
        >
          Panneau d'administration
        </motion.h1>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          animate="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center gap-6 flex-wrap"
        >
          <div className="w-80 h-40 bg-gray-800 rounded-lg shadow-lg p-5">
            <h2 className="text-xl font-semibold">Gérer les Projets</h2>
            <p className="text-gray-400 text-sm mt-2">
              Ajouter, modifier et supprimer des projets du portfolio.
            </p>
            <button className="mt-4 px-4 py-2 bg-purple-700 rounded-lg text-white">
              Accéder
            </button>
          </div>

          <div className="w-80 h-40 bg-gray-800 rounded-lg shadow-lg p-5">
            <h2 className="text-xl font-semibold">Ajouter des Compétences</h2>
            <p className="text-gray-400 text-sm mt-2">
              Ajouter et organiser les compétences affichées sur le site.
            </p>
            <button className="mt-4 px-4 py-2 bg-purple-700 rounded-lg text-white">
              Accéder
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
