


import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";


import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaDocker, FaGithub, FaLinux, FaDatabase } from "react-icons/fa";
import { SiC, SiTableau, SiPandas, SiR, SiMysql, SiMongodb, SiFirebase, SiWireguard , SiJenkins, SiKubernetes} from "react-icons/si";


const Competences = () => {
  return (
    <section
      id="competences"
      className="py-16 bg-black bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
   
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl font-bold mb-8 mt-5"
        >
          Compétences
        </motion.h2>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-8 text-5xl text-center">
 

  <FaPython className="text-blue-400 transition-transform duration-300 hover:scale-110" />
  <FaHtml5 className="text-orange-500 transition-transform duration-300 hover:scale-110" />
  <FaCss3Alt className="text-blue-500 transition-transform duration-300 hover:scale-110" />
  <FaJs className="text-yellow-400 transition-transform duration-300 hover:scale-110" />
  <SiC className="text-blue-400 transition-transform duration-300 hover:scale-110" />
  <FaReact className="text-blue-400 transition-transform duration-300 hover:scale-110" />
  <FaDocker className="text-blue-500 transition-transform duration-300 hover:scale-110" />
  <SiTableau className="text-yellow-500 transition-transform duration-300 hover:scale-110" />
  <SiR className="text-blue-500 text-6xl transition-transform duration-300 hover:scale-110" />
  <SiPandas className="text-blue-400 transition-transform duration-300 hover:scale-110" />

  <SiMysql className="text-blue-500 transition-transform duration-300 hover:scale-110" />
  <SiMongodb className="text-green-500 transition-transform duration-300 hover:scale-110" />
  <SiFirebase className="text-yellow-500 transition-transform duration-300 hover:scale-110" />
  <FaDatabase className="text-gray-400 transition-transform duration-300 hover:scale-110" />

  <FaGithub className="text-white transition-transform duration-300 hover:scale-110" />
  <FaLinux className="text-gray-500 transition-transform duration-300 hover:scale-110" />

  <SiWireguard className="text-red-500 transition-transform duration-300 hover:scale-110" />
  <SiJenkins className="text-red-500 transition-transform duration-300 hover:scale-110" />
  <SiKubernetes className="text-red-500 transition-transform duration-300 hover:scale-110" />
</div>
      </div>
      
    </section>
  );
};

export default Competences;
