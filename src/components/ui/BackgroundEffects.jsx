import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Mesh Gradient Bulutları */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 60, -40, 0],
          scale: [1.1, 0.9, 1.2, 1.1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 120, -60, 0],
          y: [0, 80, -100, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-indigo-400/5 dark:bg-indigo-600/5 rounded-full blur-[100px]"
      />

      {/* Gren (Noise) Overlay */}
      <div className="noise-overlay" />
    </div>
  );
};
