import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-10 md:mb-16 px-4">
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <h2 className="text-2xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 md:mb-6 tracking-tight line-clamp-2 md:line-clamp-none">{title}</h2>
      <div className="h-1 md:h-1.5 w-16 md:w-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto mb-4 md:mb-6 rounded-full opacity-80"></div>
      <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
    </motion.div>
  </div>
);
