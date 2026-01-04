import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CtaSection = ({ setActivePage, t }) => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-transparent"></div>
      <motion.div 
         animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
         className="absolute -top-1/2 -left-1/2 w-[100%] h-[100%] bg-blue-400/20 rounded-full blur-[150px]"
      />
      <motion.div 
         animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
         className="absolute -bottom-1/2 -right-1/2 w-[100%] h-[100%] bg-purple-400/20 rounded-full blur-[150px]"
      />

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight drop-shadow-sm px-2">
          {t.cta.title}
        </h2>
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-sm">
          {t.cta.description}
        </p>
        <button 
          onClick={() => setActivePage('contact')}
          className="bg-white text-blue-600 px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-2xl shadow-blue-900/30 hover:shadow-blue-900/50 hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-3 mx-auto group"
        >
          {t.cta.button} <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform"/>
        </button>
      </div>
    </section>
  );
};
