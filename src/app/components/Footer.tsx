'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/yourusername',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/yourusername',
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:your@email.com',
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full mt-20 px-6 sm:px-20 py-8 bg-gradient-to-br from-[#476658] to-white/5 backdrop-blur-md rounded-t-2xl shadow-xl"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <p className="text-sm text-white/60 text-center md:text-left">
          &copy; {new Date().getFullYear()} Christian Serwelas. All rights reserved.
        </p>

        <div className="flex gap-5">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/10 p-3 rounded-lg border border-white/10 hover:bg-white/20 transition-all text-white"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
