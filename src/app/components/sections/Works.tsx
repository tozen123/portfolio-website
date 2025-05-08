import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import ProjectCard from "../../components/cards/ProjectCard";
import { projects } from "../../data/ProjectsData";

export default function Works() {
  return (
    <AnimatedSection
      id="works"
      className="min-h-screen px-6 sm:px-20 py-24 flex flex-col items-center justify-center relative"
    >
      <div className="text-center text-white max-w-4xl mx-auto relative z-10 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#99f2c8] to-[#bcf5da] bg-clip-text text-transparent"
        >
          Works
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-lg mx-auto"
        >
          Check out some of my recent projects that showcase my skills and passion for development.
        </motion.p>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12"
      >
       
      </motion.div>
    </AnimatedSection>
  );
}