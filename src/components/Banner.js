import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants"; 
const Banner = () => {
  return (
    <section
      id="banner"
      className="hero min-h-screen bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
       
        <motion.img
          src="images/yass11.png "
          alt="Profile"
          className="max-w-sm rounded-lg ml-4 shadow-2xl rotate-[-90deg] "
          variants={fadeIn("right", 0.5)} 
          initial="hidden"
          whileInView="show"
          animate="show"
          viewport={{ once: false, amount: 0.3 }}
        />

       
        <motion.div
          variants={fadeIn("left", 0.3)} 
          initial="hidden"
          whileInView="show"
          
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="text-5xl font-bold">
            Yassine{" "}
            <span className="font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
              <TypeAnimation
                sequence={["MOUHAMED", 2000, "BACHIR", 2000, "NDIAYE", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="py-6 text-1xl font-semibold uppercase leading-4">
            Je suis {" "}
            <span className="text-1xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
              <TypeAnimation
                sequence={[
                  "Data Scientiste",
                  2000,
                  "Développeuse Web",
                  2000,

                  // " en Système D'Information",
                  // 2000,
                  // " et de Données",
                  // 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </p>
           {/* <div className="flex gap-4">
            <button href="#contact" className="btn btn-primary">Me Contacter</button>
            <button className="btn btn-outline">Mon CV</button>
          </div> */}

          
          <motion.div
            className="flex justify-center gap-4 mt-10 mr-52"
            variants={fadeIn("up", 0.5)} // Animation vers le haut
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <a
              href="https://github.com/YassineBachir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 text-3xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yassine-mouhamed-bachir-ndiaye-99b232253"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 text-3xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/bintbashirrr?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 text-3xl"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:ndiaye.yassine30@gmail.com"
              className="text-gray-400 hover:text-blue-400 text-3xl"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
