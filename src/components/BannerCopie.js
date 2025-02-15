import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section className="hero min-h-screen bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="images/image1.png"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Profile"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Yassine
            <div className="h-10 overflow-hidden inline-block ml-2">
              <div className="flex flex-col animate-scroll-text text-purple-400">
                
                <span>MOUHAMED</span>
                <span>BACHIR</span>
                <span>NDIAYE</span>
                
              </div>
            </div>
          </h1>
          <p className="py-6">
            Je suis un{" "}
            <span className="text-purple-400">
              <TypeAnimation
                sequence={[
                  "Développeur Web", 20,
                  "Data Scientist", 20,
                  "Ingénieur Réseaux", 20
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary">Me Contacter</button>
            <button className="btn btn-outline">Mon CV</button>
          </div>

          {/* Icônes de réseaux sociaux */}
          <div className="flex justify-center gap-4 mt-10">
            {/* GitHub */}
            <a
              href="https://github.com/YassineBachir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 text-3xl"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yassine-mouhamed-bachir-ndiaye-99b232253"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 text-3xl"
            >
              <FaLinkedin />
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/bintbashirrr?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 text-3xl"
            >
              <FaTwitter />
            </a>

            {/* Email */}
            <a
              href="mailto:ndiaye.yassine30@gmail.com"
              className="text-gray-400 hover:text-blue-400 text-3xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
