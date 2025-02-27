import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function CarnetAdresse() {
  return (
    <section
      id="striga"
      className="py-16 bg-black bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white"
    >
      <div className="container mx-auto text-center">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl font-bold mb-8 mt-5"
        >
          Projet Carnet d'adresse
        </motion.h1>

        <motion.h3
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-2xl font-semibold mt-6"
        >
          Gestion des contacts ✨
        </motion.h3>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center mt-10"
        >
          <img
            src="images/carnet.png"
            alt="Boutique en ligne"
            className="w-100 h-80 opacity-80 rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.p
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg max-w-2xl mx-auto mt-10"
        >
          Ce projet consiste à développer une application de gestion de contacts en utilisant Java Swing pour l'interface graphique et JDBC pour la gestion des données. 
          L'application permettra aux utilisateurs d'ajouter, modifier, supprimer et rechercher des contacts de manière simple et intuitive.
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-2xl mx-auto mt-10 text-left"
        >
    
          <h3 className="text-xl font-semibold mt-6"> 1️⃣ Gestion des contacts</h3>
          <p className="mt-2">
         
📌 Ajouter un nouveau contact (Nom, Prénom, Téléphone, Email, Adresse).
✏️ Modifier un contact existant.
❌ Supprimer un contact.
🔍 Rechercher un contact par nom, numéro de téléphone ou email.
📋 Afficher la liste des contacts sous forme de JTable (tableau interactif).
          </p>

          <h3 className="text-xl font-semibold mt-6"> 2️⃣  Interface utilisateur (UI)</h3>
          <p className="mt-2">
         
Fenêtre principale avec menu de navigation.
Formulaire d’ajout/modification de contact avec des champs textuels et des boutons d’action.
Tableau interactif (JTable) avec pagination et tri.
Messages d’alerte et de confirmation (JOptionPane).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
