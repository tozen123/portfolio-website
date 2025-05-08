"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";


export default function About() {
  return (
    <AnimatedSection
      id="about"
      className="min-h-screen px-6 sm:px-20 py-24 flex items-center justify-center relative"
    >

      <div className="text-center text-white max-w-2xl relative z-10"> 
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#99f2c8] to-[#bcf5da] bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-white/80 text-lg"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </motion.p>
      </div>
    </AnimatedSection>
  );
}
