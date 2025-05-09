"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import {
  RiReactjsFill,
  RiNodejsFill,
  RiGithubFill,
  RiDatabase2Fill,
  RiTailwindCssFill,
  RiNextjsFill,
  RiJavascriptFill,
  RiAndroidFill,
} from "@remixicon/react";

const techStacks = [
  { name: "React", icon: RiReactjsFill },
  { name: "Node.js", icon: RiNodejsFill },
  { name: "GitHub", icon: RiGithubFill },
  { name: "MongoDB", icon: RiDatabase2Fill },
  { name: "Next.js", icon: RiNextjsFill },
  { name: "Tailwind", icon: RiTailwindCssFill },
  { name: "TypeScript", icon: RiJavascriptFill },
  { name: "Android", icon: RiAndroidFill },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <AnimatedSection
      id="about"
      className="min-h-screen px-6 sm:px-20 py-24 flex flex-col items-center justify-center relative"
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
          className="text-white/80 text-lg mb-10"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          since the 1500s.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-12 text-white"
        >
          Stacks
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex flex-wrap justify-center gap-6"
        >
          {techStacks.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.25 }}
              className="group relative w-16 h-16 p-2 bg-white/10 rounded-xl backdrop-blur-md border border-white/10 flex items-center justify-center"
            >
              <tech.icon className="w-10 h-10 text-white" />

              <div className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-white text-black text-xs font-semibold px-2 py-1 rounded-md shadow-md whitespace-nowrap z-20">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
