
import { motion } from "framer-motion";
import { Project } from "../../data/ProjectsData";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
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
              <i className="ri-github-fill text-lg"></i>
            </a>
          )}
          {project.links.live && (
            <a 
              href={project.links.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
            >
              <i className="ri-external-link-fill text-lg"></i>
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.map((tech, i) => (
            <div 
              key={i} 
              className="flex items-center bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-300"
            >
              <i className={tech.icon + " mr-1"}></i>
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}