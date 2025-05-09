'use client'

import Navbar from "./components/Navbar";
import Background from "./components/Background";


import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Work from "./components/sections/Works";
import Hero from "./components/sections/Hero";


import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Background />
      <main className="relative p-8 sm:p-20 min-h-screen grid place-items-center font-[family-name:var(--font-geist-sans)] text-white">
        <Hero />
      </main>
      <About />
      <Work />
      <Contact />

      <Footer />
    </>
  );
}
