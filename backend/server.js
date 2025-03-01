const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const upload = multer({ dest: "uploads/" });


app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const skills = [
  { id: 1, nom: "JavaScript", description: "Développement web", icon: null },
  { id: 2, nom: "Python", description: "Data science", icon: null },
];

const projects = [];


app.get("/api/skills", (req, res) => {
  res.json(skills);
});


app.post("/api/skills", upload.single("icon"), (req, res) => {
  console.log("Requête reçue !");
  console.log("Body:", req.body);
  console.log("Fichier:", req.file);

  const { nom, description } = req.body;

  if (!nom || !description) {
    return res.status(400).json({ error: "Nom et description sont obligatoires." });
  }

  const newSkill = {
    id: skills.length + 1,
    nom,
    description,
    iconPath: req.file ? `/uploads/${req.file.filename}` : null,
  };

  skills.push(newSkill);
  res.status(201).json({ message: "Compétence ajoutée avec succès!", skill: newSkill });
});


app.post("/api/projects", upload.single("image"), (req, res) => {
  console.log("Requête reçue pour un projet !");
  console.log("Body:", req.body);
  console.log("Fichier:", req.file);

  const { nom, description } = req.body;

  if (!nom || !description) {
    return res.status(400).json({ error: "Nom et description sont obligatoires." });
  }

  const newProject = {
    id: projects.length + 1,
    nom,
    description,
    imagePath: req.file ? `/uploads/${req.file.filename}` : null,
  };

  projects.push(newProject);
  res.status(201).json({ message: "Projet ajouté avec succès!", project: newProject });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(` Serveur démarré sur http://localhost:${PORT}`);
});
