import React from "react";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaLaptopCode } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white backdrop-blur-lg px-6 py-3 rounded-full flex gap-6 shadow-lg">
      <a href="#banner" className="text-gray-400 hover:text-blue-400">
        <FaHome size={24} />
      </a>
      <a href="#about" className="text-gray-400 hover:text-blue-400 ">
        <FaUser size={24} />
      </a>
      <a href="#competences" className="text-gray-400 hover:text-blue-400">
  <FaLaptopCode size={24} />
</a>
      <a href="#work" className="text-gray-400 hover:text-blue-400">
        <FaBriefcase size={24} />
      </a>
      <a href="#contact" className="text-gray-400 hover:text-blue-400">
        <FaEnvelope size={24} />
      </a>
   
    </nav>
  );
};

export default Nav;
