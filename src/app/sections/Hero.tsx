'use client';

import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

export default function Hero() {
  return (
    <AnimatedSection
      id="home"
      className="min-h-screen px-6 sm:px-20 py-24 flex items-center justify-center relative"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-50">
        <div className="hidden md:block md:w-1/3"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:w-1/1 flex justify-center"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-xl max-w-md w-full text-center">
            <img
              src="/images/profile.png"
              alt="Picture Me"
              className="w-64 h-64 rounded-full mx-auto mb-6 border-4 border-white/30 object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold mb-2">Hello,</h1>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.10 }}
                whileTap={{ scale: 0.95 }}
                className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#99f2c8] to-[#bcf5da] bg-clip-text text-transparent transition duration-300 inline-block"
              >
                I'm Christian Serwelas
              </motion.a>
            </div>
            <p className="text-sm text-white/80">Full-stack Developer</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="md:w-1/3 text-center md:text-left"
        >
          <div className="">
            <motion.h2
              className="text-xl sm:text-2xl font-semibold italic text-white/60 transition-all duration-100"
              whileHover={{
                textShadow: "0 0 18px rgba(153, 242, 200, 1)",
                color: "#99f2c8"
              }}
            >
              I build impactful system solutions.
            </motion.h2>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}