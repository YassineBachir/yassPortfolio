import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white "
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
          <img
            src="/path-to-your-image.png"
            alt="Profile"
            className="w-72 h-72 rounded-full border-4 border-purple-500 shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 text-center md:text-left ">
          <h2 className="text-4xl font-bold text-white mb-10 opacity-12 animate-fade-in mt-6">À propos de moi</h2>
          <p className="max-w-2xl ">
            Je suis passionnée par la technologie et déterminée à approfondir mes connaissances
            sur les dernières tendances du secteur. Ma curiosité intellectuelle me pousse à rester 
            informée des avancées technologiques et à explorer de nouveaux horizons à travers des 
            projets académiques et des stages.
          </p>

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-6 mt-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-400">1</h3>
              <p>Années d'Expérience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-400">10</h3>
              <p>Projets Réalisés</p>
            </div>
            
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-center md:justify-start gap-4">
           {/* Bouton Me Contacter */}
  <a
    href="#contact"
    className="px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-black font-bold rounded-lg shadow-md hover:scale-105 transition-transform"
  >
    Me Contacter
  </a>


<button  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold rounded-lg shadow-md opacity-70 hover:opacity-100 hover:scale-105 transition-transform">
 
  <a
    href="/CV_Yassine_MB_Ndiaye.pdf"
    target="_blank"
   
  >
    Mon CV
  </a>
</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
