"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

import AnimatedSection from "../AnimatedSection";

const techStacks = [
  { name: "React", src: "/logos/react.svg" },
  { name: "Next.js", src: "/logos/nextjs.svg" },
  { name: "Tailwind", src: "/logos/tailwind.svg" },
  { name: "Node.js", src: "/logos/nodejs.svg" },
  { name: "TypeScript", src: "/logos/typescript.svg" },
  { name: "Git", src: "/logos/git.svg" },
  { name: "Framer Motion", src: "/logos/framer.svg" },
  { name: "MongoDB", src: "/logos/mongodb.svg" },
];

export default function About() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleWheel = (e: React.WheelEvent) => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += e.deltaY;
      }
    };

    
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
          className="text-white/80 text-lg mb-26"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.
        </motion.p>


        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-4 text-white "
        >
          Stacks
        </motion.h3>

        <motion.div
            ref={scrollRef}
            onWheel={handleWheel}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex space-x-6 "
            >
          {techStacks.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex-shrink-0 w-16 h-16 p-2 bg-white/10 rounded-xl backdrop-blur-md border border-white/10 flex items-center justify-center"
              title={tech.name}
            >
              <img src={tech.src} alt={tech.name} className="w-10 h-10 object-contain" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
