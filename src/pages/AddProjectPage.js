import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProjectPage() {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectImage, setProjectImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const formData = new FormData();
      formData.append('name', projectName);
      formData.append('description', projectDescription);
    
      if (projectImage) {
        formData.append('image', projectImage);
      }

      const response = await fetch('/api/projects', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        navigate("/admin");
      } else {
        console.error('Erreur lors de l\'ajout du projet');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (e) => {
    setProjectImage(e.target.files[0]);
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

      <button
        onClick={() => navigate("/admin")}
        className="bg-red-500 px-4 py-2 rounded-lg font-bold shadow-md hover:bg-red-400 transition mt-4"
      >
        Retour
      </button>
    </div>
  );
}
