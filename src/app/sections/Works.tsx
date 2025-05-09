import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import ProjectCard from "../components/cards/ProjectCard";
import { projects } from "../data/ProjectsData";

import Background from "../components/Background";

export default function Works() {
    return (
        <>
            <AnimatedSection
                id="works"
                className="min-h-screen px-6 sm:px-20 py-24 flex flex-col items-center justify-center relative"
            >

                <div className="text-center text-white max-w-4xl mx-auto relative z-10 mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: false }}
                        className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#99f2c8] to-[#bcf5da] bg-clip-text text-transparent"
                    >
                        Works
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: false }}
                        className="text-gray-300 max-w-lg mx-auto"
                    >
                        Check out some of my recent projects that showcase my skills and passion for development.
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    viewport={{ once: false }}
                    className="w-full px-4 sm:px-0 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 "
                >

                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.5 }}
                    viewport={{ once: false }}
                    className="mt-12"
                >

                </motion.div>
                <Background />

            </AnimatedSection>

        </>

    );
}