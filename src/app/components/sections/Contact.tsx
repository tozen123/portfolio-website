import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";


export default function Contact() {
    return (
        <AnimatedSection
            id="contacts"
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
                    Contact Me
                </motion.h2>

               
            </div>
            
        </AnimatedSection>
    );
}