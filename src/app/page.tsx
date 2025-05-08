  'use client'

  import { motion } from "framer-motion";
  import Navbar from "./components/Navbar";
  import Background from "./components/Background";


  import About from "./components/sections/About";
  import Work from "./components/sections/Works";

  export default function Home() {
    return (
      <>
        <Navbar />
        <Background />

        <main className="relative p-8 sm:p-20 min-h-screen grid place-items-center font-[family-name:var(--font-geist-sans)] text-white">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-xl max-w-md w-full text-center"
          >
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
          </motion.div>
          
        </main>
        <About />
        <Work />
       

      </>
    );
  }
