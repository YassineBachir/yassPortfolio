import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function Striga() {
  useEffect(() => {
    window.scrollTo(0, 0); // Faire défiler vers le haut de la page après le rendu
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
          animate="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl font-bold mb-8 mt-5"
        >
          Détection de Striga
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          animate="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg"
        >
          <h2>Détection de la présence de Striga avec Python et la reconnaissance d’image</h2>
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          animate="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center mt-10"
        >
          <img
            src="images/Striga.png"
            alt="Détection de Striga"
            className="w-80 h-60 opacity-80 rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          animate="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center mt-10"
        >
          <p>
            La détection de la présence de Striga sur des images repose sur
            l’utilisation de l’apprentissage automatique et de la vision par
            ordinateur. Nous avons suivi plusieurs étapes pour développer un
            modèle capable d’identifier cette plante parasite à partir de
            photos.
            <h3 className="text-2xl font-semibold mt-6">
              Collecte et Prétraitement des Images
            </h3>
            Nous avons rassemblé un ensemble de photos contenant des images de
            champs contaminés et non contaminés par Striga. Ensuite, nous
            avons : Redimensionné les images pour assurer une cohérence dans
            les entrées du modèle. Appliqué une augmentation des données
            (rotation, variation de luminosité, etc.) pour améliorer la
            robustesse du modèle. Converti les images en tableaux de pixels
            normalisés.
            <h3 className="text-2xl font-semibold mt-6">
              Modélisation avec le Deep Learning
            </h3>
            Nous avons utilisé TensorFlow et Keras pour entraîner un réseau de
            neurones convolutionnel (CNN) capable d’identifier la présence de
            Striga. La structure du modèle comprend : Des couches de
            convolution pour extraire les caractéristiques visuelles. Des
            couches de pooling pour réduire la dimensionnalité et améliorer
            l’efficacité du traitement. Des couches denses pour finaliser la
            classification entre « Striga détecté » et « Striga absent ».
            <h3 className="text-2xl font-semibold mt-6">
              Entraînement et Évaluation du Modèle
            </h3>
            Après l’entraînement du modèle sur un ensemble d’images annotées,
            nous avons évalué sa performance avec des métriques comme :
            L’accuracy (précision globale) La matrice de confusion pour
            identifier les faux positifs et faux négatifs Le recall et la
            précision pour mesurer l’efficacité de la détection
            <h3 className="text-2xl font-semibold mt-6">
              Déploiement et Test sur Nouvelles Images
            </h3>
            Le modèle a ensuite été intégré dans un script Python permettant
            d’analyser de nouvelles images en temps réel. Avec l’aide de la
            bibliothèque OpenCV, nous avons : Chargé une image et converti ses
            couleurs. Détecté les régions d’intérêt où Striga pourrait être
            présent. Prédit la présence ou l’absence de Striga à partir du
            modèle entraîn
          </p>
        </motion.div>
      </div>
    </section>
  );
}
