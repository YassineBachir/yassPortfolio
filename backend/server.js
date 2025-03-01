const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer({ dest: "uploads/" });

const skills = [
  { id: 1, nom: "JavaScript", description: "Développement web", icon: null },
  { id: 2, nom: "Python", description: "Data science", icon: null },
];


app.get("/api/skills", (req, res) => {
  res.json(skills);
});


app.post("/api/skills", upload.single("icon"), (req, res) => {
  console.log("Requête reçue !");
  console.log("Body:", req.body);
  console.log("Fichier:", req.file);

  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ error: "Nom et description sont obligatoires." });
  }

  const newSkill = {
    id: skills.length + 1,
    nom: name,
    description,
    iconPath: req.file ? req.file.path : null,
  };

  skills.push(newSkill);
  res.status(201).json({ message: "Compétence ajoutée avec succès!", skill: newSkill });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
