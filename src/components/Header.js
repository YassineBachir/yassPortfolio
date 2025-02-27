import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar bg-base-100 fixed top-0 w-full z-10 shadow-md bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-xl font-bold text-white">
          Yassine<span className="text-purple-400">NDIAYE</span>
        </Link>
        <div className="flex gap-4">
        <Link to="/skills" className="btn btn-ghost">
  Compétences
</Link>


<a href="/#work" className="btn btn-ghost">
  Work
  </a>
{/* </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
