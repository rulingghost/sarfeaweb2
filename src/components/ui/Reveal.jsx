import React from 'react';
import { motion } from 'framer-motion';

export const Reveal = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.35, delay: delay / 1000, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
