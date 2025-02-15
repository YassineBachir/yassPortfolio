import React from "react";

const Work = () => {
  return (
    <section id="work" className="py-16 bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Détection de présence de striga(Data science);</h3>
            <p>Ce projet consister à détecter la présence de striga dans les champs.</p>
          </div>
          <div className="card bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Création d'un carnet d'adresse avec JavaSwing</h3>
            <p>Dans ce projet, nous allons cérer un carnet d'adresse</p>
          </div>
          <div className="card bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Feu de circulation et contrôle de badge sur l’autoroute</h3>
            <p>Description of the project</p>
          </div>
          <div className="card bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Création d’un site e-commerce</h3>
            <p>Ce site permet de faire des achats en ligne et est consacré uniquement aux femmes</p>
          </div>
          <div className="card bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Détection d'intrusion avec le Pentest Snort</h3>
            <p>Mise en place d’un outil Pentest (Snort) pour détecter
            une intrusion.</p>
          </div>
          <div className="card bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Analyse des données sur l’agriculture au Sénégal</h3>
            <p>Analyser les données de l'agriculture.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
