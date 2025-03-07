import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function SnortProject() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <section
      id="snort"
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
          Projet Snort : Détection d'intrusions 🔥
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          animate="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg"
        >
          <h2>Installation et Configuration de Snort pour la surveillance du réseau</h2>
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
            src="images/snort.jpg"
            alt="Snort IDS"
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
            Snort est un système de détection d'intrusions open-source permettant de surveiller le trafic réseau en temps réel.
            Nous avons suivi plusieurs étapes pour configurer Snort et analyser des attaques potentielles.
            
            <h3 className="text-2xl font-semibold mt-6">
              1️⃣ Installation et Configuration de Snort 🛠️
            </h3>
            - Installation de Snort et de ses dépendances sur un serveur Linux.  
            - Configuration des interfaces réseau pour écouter le trafic.  
            - Ajout des règles de détection personnalisées dans `snort.conf`.  

            <h3 className="text-2xl font-semibold mt-6">
              2️⃣ Détection et Analyse des Intrusions 🔍
            </h3>
            - Utilisation de Snort en mode capture (`snort -A console -q -c /etc/snort/snort.conf`).  
            - Analyse des logs générés (`/var/log/snort/alert`).  
            - Détection d'attaques DoS, scans de ports et tentatives d'injection SQL.  

            <h3 className="text-2xl font-semibold mt-6">
              3️⃣ Visualisation des Alertes 🚨
            </h3>
            - Utilisation de **Wireshark** pour inspecter les paquets capturés.  
            - Intégration avec **ELK (Elasticsearch, Logstash, Kibana)** pour une analyse graphique.  
            - Configuration de **BASE/Snorby** pour une interface web de monitoring.  

            <h3 className="text-2xl font-semibold mt-6">
              4️⃣ Amélioration et Personnalisation des Règles
            </h3>
            - Création de règles Snort spécifiques pour détecter des attaques ciblées.  
            - Ajustement du niveau de sensibilité des alertes.  
            - Mise en place d'actions de blocage automatique avec **Suricata ou PfSense**.  

            <h3 className="text-2xl font-semibold mt-6">
              📌 Conclusion
            </h3>
            Grâce à Snort, nous avons pu détecter des menaces réseau en temps réel et améliorer la sécurité de notre infrastructure.
            L'intégration avec des outils de visualisation a permis d'optimiser la gestion des alertes et d'automatiser certaines réponses aux attaques.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
