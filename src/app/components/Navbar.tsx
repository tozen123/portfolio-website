"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="font-poppins w-full px-4 md:px-20 py-4 fixed top-0 left-0 z-50 bg-transparent backdrop-blur-md"
  >
    <nav className="w-full px-4 md:px-80 py-12 fixed top-0 left-0 z-50 bg-transparent backdrop-blur-md">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold text-[color:var(--foreground)]">
          Portfolio
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? (
              <X className="text-[color:var(--foreground)]" />
            ) : (
              <Menu className="text-[color:var(--foreground)]" />
            )}
          </button>
        </div>

        <div className="hidden md:flex gap-8 text-[color:var(--foreground)]">
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#works" className="hover:underline">Works</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden text-[color:var(--foreground)]">
          <Link href="#about" className="hover:underline" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#works" className="hover:underline" onClick={() => setIsOpen(false)}>Works</Link>
          <Link href="#contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
    </motion.nav>
  );
}
