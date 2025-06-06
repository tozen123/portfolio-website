import { motion } from "framer-motion";
import { Project } from "../../data/ProjectsData";
import { RiGithubFill, RiExternalLinkFill } from "@remixicon/react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, 
        delayChildren: 0.5, 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.15 * index }}
      viewport={{ once: false }}
      className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-5 border-transparent hover:border-[#44524B]"
    >
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-contain object-center"
          loading="lazy"
        />
        <div className="absolute top-0 right-0 p-2 space-x-2">
          {project.links.github && (
            <a 
              href={project.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
            >
              <RiGithubFill />
            </a>
          )}
          {project.links.live && (
            <a 
              href={project.links.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
            >
              <RiExternalLinkFill />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
        
        <motion.div 
          className="flex flex-wrap gap-2 mt-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {project.techStack.map((tech, i) => (
            <motion.div 
              key={i} 
              className="flex items-center px-3 py-1 rounded-full text-xs text-gray-950"
              style={{ backgroundColor: '#2ae88e' }}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: '#1ad67c',
                transition: { duration: 0.5 } 
              }}
            >
              {tech.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}