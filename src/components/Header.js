import React from "react";

const Header = () => {
  return (
    <nav className="navbar bg-base-100 fixed top-0 w-full z-10 shadow-md bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white">
      <div className="container mx-auto flex justify-between items-center px-4">
        <a className="text-xl font-bold text-white">Yassine<span className="text-purple-400">NDIAYE</span></a>
        <div className="flex gap-4">
          <a href="#about" className="btn btn-ghost">About</a>
        
          <a href="#work" className="btn btn-ghost">Work</a>
          
        </div>
      </div>
    </nav>
  );
};

export default Header;
