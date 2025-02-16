import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";
const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-16 bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.5, ease: "easeOut" }} 
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 mt-5">Me Contacter</h2>
        <p>
          N'hésitez pas à me contacter pour des collaborations ou simplement pour en savoir plus sur moi.
        </p>
        <form className="max-w-lg mx-auto mt-6">
          <input
            type="text"
            placeholder="Votre Nom"
            className="input input-bordered w-full mb-4"
          />
          <input
            type="text"
            placeholder="Prénom(s)"
            className="input input-bordered w-full mb-4"
          />
          <input
            type="email"
            placeholder="Votre Email"
            className="input input-bordered w-full mb-4"
          />
          <textarea
            placeholder="Votre Message"
            className="textarea textarea-bordered w-full mb-4"
          ></textarea>
          <button className="btn btn-primary w-full">Envoyer Message</button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
