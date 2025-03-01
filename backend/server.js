const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const projects = [
  { id: 1, nom: "Détection de présence de striga", description: "Détection de striga dans les champs." },
  { id: 2, nom: "Création d’un site e-commerce", description: "E-commerce dédié aux femmes." },
  { id: 3, nom: "Carnet d'adresse avec JavaSwing", description: "Application Java Swing." },
  { id: 4, nom: "Plateforme SaaS de prise de rendez-vous", description: "Système de gestion de rendez-vous." },
  { id: 5, nom: "Détection d'intrusion avec Snort", description: "Utilisation de Snort pour la cybersécurité." },
  { id: 6, nom: "Analyse des données agricoles", description: "Analyse de l'agriculture au Sénégal." }
];

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});


//Verification: http://localhost:5000/api/projects