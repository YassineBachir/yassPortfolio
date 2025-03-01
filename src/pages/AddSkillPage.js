import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddSkillPage() {
  const navigate = useNavigate();
  const [skillName, setSkillName] = useState('');
  const [skillDescription, setSkillDescription] = useState('');
  const [skillIcon, setSkillIcon] = useState(null);
  const [message, setMessage] = useState('');

  const handleIconChange = (e) => {
    setSkillIcon(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nom', skillName);
    formData.append('description', skillDescription);
    if (skillIcon) {
      formData.append('icon', skillIcon);
    }

    try {
      const response = await fetch('http://localhost:5000/api/skills', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessage("Compétence ajoutée avec succès!");
        setSkillName('');
        setSkillDescription('');
        setSkillIcon(null);
        e.target.reset();

        setTimeout(() => {
          setMessage("");
          navigate("/admin");
        }, 2000);
      } else {
        setMessage("Erreur lors de l'ajout de la compétence.");
      }
    } catch (error) {
      setMessage("Une erreur est survenue.");
    }
  };

  const goToAdminPage = () => {
    navigate("/admin");
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
