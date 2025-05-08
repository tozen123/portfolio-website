"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function AnimatedSection({
  children,
  id,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
 
  const directionVariants = {
    up: { initial: { y: 100 }, animate: { y: 0 } },
    down: { initial: { y: -100 }, animate: { y: 0 } },
    left: { initial: { x: 100 }, animate: { x: 0 } },
    right: { initial: { x: -100 }, animate: { x: 0 } },
  };

  const { initial, animate } = directionVariants[direction];

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, ...initial }}
      whileInView={{ opacity: 1, ...animate }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ 
        duration: 0.7, 
        ease: "easeOut",
        delay: delay,
      }}
    >
      {children}
    </motion.section>
  );
}