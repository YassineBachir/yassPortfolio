import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";


const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section
      id="competences"
      className="py-8 bg-black bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white"
    >
      <div className="container mx-auto text-center">
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          animate="show"
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8"
        >
         
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="images/sofkills.png"
              alt="Soft Skills"
              className="w-100 h-80 opacity-90 rounded-lg shadow-lg"
            />
          </div>

          
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl font-bold text-purple-400 mb-4">
              Mes <span className="text-purple-600">SOFTSKILLS</span>
            </h2>
            

           
            <div className="grid grid-cols-2 ">
              {[
                "Autonomie",
                "Agilité",
                "Confiance en soi",
                "Adaptation",
                "Collaboration",

                "Travail en équipe",
                "Rigueur",
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("right", 0.1 * index)}
                  initial="hidden"
                  whileInView="show"
                   animate="show"
                  viewport={{ once: false, amount: 0.3 }}
                  className="bg-gray-600 text-white px-2 py-3 m-2 rounded-lg shadow-lg relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-blue-500"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-16"></div>
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl font-bold mb-8 mt-5"
        >
           <h2 className="text-3xl font-bold text-purple-400 mb-4">
               <span className="text-purple-600">Mes Compétences </span>
            </h2>
        </motion.h2>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="card bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            
            <p>Python</p>
            <div className="flex justify-center items-center">
            <img
              src="images/python.png"
              alt="Langages"
              className="w-40 h-40 opacity-80 rounded-lg shadow-lg mt-4"
            />
            </div>
            
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="card bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            
            <p>R</p>
            <div className="flex justify-center items-center">
            <img
              src="images/R.png"
              alt="Langages"
              className="w-40 h-40 opacity-80 rounded-lg shadow-lg mt-4"
            />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="card bg-gray-800 p-6 rounded-lg shadow-lg"
          >
           
            <p> C</p>
            <div className="flex justify-center items-center">
            <img
              src="images/C.png"
              alt="Langages"
              className="w-40 h-40 opacity-80 rounded-lg shadow-lg mt-4"
            />
            </div>
           
          </motion.div>

      
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="card bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            
            <p>HTML, CSS & Javascript</p>
            <div className="flex justify-center items-center">
            <img
              src="images/html-js-css.png"
              alt="Langages"
              className="w-40 h-40 opacity-80 rounded-lg shadow-lg mt-4"
            />
            </div>
          </motion.div>
          {/* <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="card bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Développement Web</h3>
            <p>Javascript</p>
            <img
              src="images/dev_web_mobile.jpg"
              alt="Développement Web"
              className="w-50 h-40 opacity-80 rounded-lg shadow-lg mt-4"
            />
          </motion.div> */}

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="card bg-gray-800 p-6 rounded-lg shadow-lg"
          >
           
            <p>Java</p>
            <div className="flex justify-center items-center">
            <img
              src="images/java.png"
              alt="Langages"
              className="w-40 h-40 opacity-80 rounded-lg shadow-lg mt-4"
            />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="card bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            
            <p>React</p>
            <div className="flex justify-center items-center">
            <img
              src="images/react.png"
              alt="Langages"
              className="w-40 h-40 opacity-80 rounded-lg shadow-lg mt-4"
            />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="card bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            
            <p>SQL</p>
            <div className="flex justify-center items-center">
            <img
              src="images/sql.png"
              alt="Langages"
              className="w-40 h-40 opacity-80 rounded-lg shadow-lg mt-4"
            />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="card bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            
            <p>NoSQL</p>
            <div className="flex justify-center items-center">
            <img
              src="images/nosql.png"
              alt="Langages"
              className="w-40 h-40 opacity-80 rounded-lg shadow-lg mt-4"
            />
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="card bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            
            <p>Tableau</p>
            <div className="flex justify-center items-center">
            <img
              src="images/tableau.png"
              alt="Langages"
              className="w-40 h-40 opacity-80 rounded-lg shadow-lg mt-4"
            />
            </div>
          </motion.div>

          
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="card bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Sécurité-Réseau</h3>
            <p>StrongSwan, Proxy, DMZ, LDAP, Snort</p>
            <img
              src="images/Securite.jpg"
              alt="Sécurité"
              className="w-50 h-40 opacity-80 rounded-lg shadow-lg mt-4"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
