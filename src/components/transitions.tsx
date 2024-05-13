"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function ProjectTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      transition={{ duration: 0.7 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
