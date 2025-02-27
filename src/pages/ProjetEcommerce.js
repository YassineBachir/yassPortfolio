import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function ProjetEcommerce() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          Projet E-commerce
        </motion.h1>

        <motion.h3
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-2xl font-semibold mt-6"
        >
          Boutique en ligne dédiée aux femmes 🛍️✨
        </motion.h3>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex justify-center mt-10"
        >
          <img
            src="images/ecommerce.png"
            alt="Boutique en ligne"
            className="w-100 h-80 opacity-80 rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.p
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          className="text-lg max-w-2xl mx-auto mt-10"
        >
          Ce projet consiste à développer une boutique en ligne moderne et élégante spécialement conçue pour répondre aux
          besoins des femmes. L’objectif est de proposer une expérience utilisateur fluide et intuitive tout en offrant une
          large gamme de produits adaptés à leurs préférences. Chez nous, la mode se conjugue avec élégance, confort et
          tendance. Découvrez une collection soigneusement sélectionnée pour sublimer votre style et vous accompagner dans
          toutes les occasions.
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          className="max-w-2xl mx-auto mt-10 text-left"
        >
          <h3 className="text-xl font-semibold">🔹 Fonctionnalités principales</h3>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>✅ Page d’accueil attractive : Mise en avant des tendances et des promotions.</li>
            <li>✅ Catalogue de produits : Vêtements, accessoires, cosmétiques, et bien plus.</li>
            <li>✅ Système de filtres et de recherche avancée : Pour trouver facilement les articles souhaités.</li>
            <li>✅ Panier et paiement sécurisé : Intégration de plusieurs méthodes de paiement (carte, PayPal, mobile money…).</li>
            <li>✅ Espace client : Inscription, connexion, historique des commandes, suivi des livraisons.</li>
            <li>✅ Gestion des stocks et administration : Interface pour gérer les produits, commandes et clients.</li>
            <li>✅ Support client & Chat en direct : Assistance pour aider les clientes en temps réel.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">🔹 Technologies utilisées</h3>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>💻 <strong>Frontend</strong> : html + CSS + Javascript pour une interface moderne et responsive.</li>
            <li>
              🛠️ <strong>Backend</strong> : Node.js avec Express pour gérer les requêtes et l’API.
            </li>
            <li>📦 <strong>Base de données</strong> : MySQL / MongoDB pour stocker les informations produits et utilisateurs.</li>
            <li>💳 <strong>Paiement</strong> : Intégration de Stripe ou PayPal pour les transactions sécurisées.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">🔹 Objectif du projet</h3>
          <p className="mt-2">
            Créer une plateforme e-commerce dédiée aux femmes avec une navigation fluide et un design attrayant, en mettant
            l’accent sur la facilité d’achat et la sécurité des transactions.
          </p>

          <h3 className="text-xl font-semibold mt-6">👉 Pourquoi ce projet ?</h3>
          <p className="mt-2">
            Pour offrir une expérience shopping agréable et accessible en ligne, avec une sélection soignée de produits
            pensés pour les femmes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
