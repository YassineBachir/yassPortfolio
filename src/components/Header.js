import React from "react";
import { Link } from "react-router-dom";
import { FaTools, FaBriefcase } from "react-icons/fa"; // Icônes pour mobile

const Header = () => {
  return (
    <nav className="navbar bg-base-100 fixed top-0 w-full z-10 shadow-md bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-xl font-bold text-white">
          Yassine<span className="text-purple-400">NDIAYE</span>
        </Link>
        <div className="flex gap-2">
          {/* Bouton Compétences avec gestion responsive */}
          <Link to="/skills" className="btn btn-ghost text-sm px-2 py-1 md:text-base md:px-4 md:py-2">
            <FaTools className="block md:hidden" /> {/* Icône visible sur mobile */}
            <span className="hidden md:block">Compétences</span>
          </Link>

          {/* Bouton Work avec gestion responsive */}
          <a href="/#work" className="btn btn-ghost text-sm px-2 py-1 md:text-base md:px-4 md:py-2">
            <FaBriefcase className="block md:hidden" /> {/* Icône visible sur mobile */}
            <span className="hidden md:block">Work</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
