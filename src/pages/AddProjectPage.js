import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProjectPage() {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectImage, setProjectImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nom', projectName);
    formData.append('description', projectDescription);
    if (projectImage) {
      formData.append('image', projectImage);
    }

    try {
      const response = await fetch("http://localhost:5000/api/projects", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("Projet ajouté avec succès!");
        setProjectName('');
        setProjectDescription('');
        setProjectImage(null);
        e.target.reset();

        setTimeout(() => {
          setMessage("");
          
          ;
        }, 2000);
      } else {
        setMessage("Erreur lors de l'ajout du projet.");
      }
    } catch (error) {
      setMessage("Une erreur est survenue.");
    }
  };

  const handleImageChange = (e) => {
    setProjectImage(e.target.files[0]);
  };

  
  const goToAdminPage = () => {
    navigate("/admin"); 
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center py-16 px-6 bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white overflow-hidden">
      <h1 className="text-3xl font-bold mb-6">Ajouter un Nouveau Projet</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-lg">
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Nom du Projet"
          className="bg-gray-800 p-2 rounded-lg text-white"
        />
        <textarea
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          placeholder="Description du Projet"
          className="bg-gray-800 p-2 rounded-lg text-white h-40"
        />
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          className="bg-gray-800 p-2 rounded-lg text-white"
        />
        <button
          type="submit"
          className="bg-green-500 px-4 py-2 rounded-lg font-bold shadow-md hover:bg-green-400 transition"
        >
          Ajouter le Projet
        </button>
        
      </form>
      {message && <div className="mt-4 p-3 bg-green-500 text-white rounded-lg">{message}</div>}
      
      
      <button
        onClick={goToAdminPage}
        className="mt-4 px-4 py-2 bg-blue-500 rounded-lg text-white font-bold shadow-md hover:bg-blue-400 transition"
      >
        Retour 
      </button>
    </div>
  );
}
