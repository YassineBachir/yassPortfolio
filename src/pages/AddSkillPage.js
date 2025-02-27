import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddSkillPage() {
  const navigate = useNavigate();
  const [skillName, setSkillName] = useState('');
  const [skillDescription, setSkillDescription] = useState('');

  const [skillIcon, setSkillIcon] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const formData = new FormData();
      formData.append('name', skillName);
      formData.append('description', skillDescription);
      
      if (skillIcon) {
        formData.append('icon', skillIcon);
      }

      const response = await fetch('/api/skills', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        navigate("/admin");
      } else {
        console.error('Erreur lors de l\'ajout de la compétence');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleIconChange = (e) => {
    setSkillIcon(e.target.files[0]);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center py-16 px-6 bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white overflow-hidden">
      <h1 className="text-3xl font-bold mb-6">Ajouter une Nouvelle Compétence</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-lg">
        <input
          type="text"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
          placeholder="Nom de la Compétence"
          className="bg-gray-800 p-2 rounded-lg text-white"
        />

        <textarea
          value={skillDescription}
          onChange={(e) => setSkillDescription(e.target.value)}
          placeholder="Description de la Compétence"
          className="bg-gray-800 p-2 rounded-lg text-white h-40"
        />

        {/* <select
          value={skillLevel}
          onChange={(e) => setSkillLevel(e.target.value)}
          className="bg-gray-800 p-2 rounded-lg text-white"
        >
          <option value="">Niveau de la Compétence</option>
          <option value="Débutant">Débutant</option>
          <option value="Intermédiaire">Intermédiaire</option>
          <option value="Avancé">Avancé</option>
          <option value="Expert">Expert</option>
        </select> */}

        <input
          type="file"
          onChange={handleIconChange}
          accept="image/*"
          className="bg-gray-800 p-2 rounded-lg text-white"
        />

        <button
          type="submit"
          className="bg-green-500 px-4 py-2 rounded-lg font-bold shadow-md hover:bg-green-400 transition"
        >
          Ajouter la Compétence
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
