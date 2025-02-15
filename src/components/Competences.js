import React from "react";

const Competences = () => {
  return (
    <section id="competences" className="py-16 bg-black bg-gradient-to-r from-purple-900 via-black to-purple-900  text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 mt-5 ">Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-gray-800 p-6 rounded-lg shadow-lg">
          
            <h3 className="text-xl font-semibold mb-2">Langages</h3>
            <p>Python, R, C</p>
            <img src="images/langages.jpg" alt="Langages" className="w-50 h-40 mb-100 opacity-10 animate-fade-in rounded-lg shadow-lg" />
          </div>
          <div className="card bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Developpemnt Web</h3>
            <p>HTLM, CSS, JAVA, REACT, SpringBoot</p>
            <img src="images/dev_web_mobile.jpg" alt="Langages" className="w-50 h-40 mb-100 opacity-10 animate-fade-in" />
          </div>
          <div className="card bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Sécurité-Réseau</h3>
            <p>Strongwan, Proxy, DMZ, Ldap, Snort,</p>
            <img src="images/Securite.jpg" alt="Langages" className="w-50 h-40 mb-100 opacity-10 animate-fade-in" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competences;
