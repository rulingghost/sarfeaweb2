import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CtaSection = ({ setActivePage, t }) => {
  return (
    <section className="py-12 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-[1.35rem] sm:text-3xl md:text-6xl font-extrabold text-white mb-6 md:mb-8 tracking-tight leading-tight px-2">
          {t.cta.title}
        </h2>
        <p className="text-sm md:text-2xl text-blue-100 mb-8 md:mb-12 max-w-3xl mx-auto font-medium leading-relaxed px-2">
          {t.cta.description}
        </p>
        <button 
          onClick={() => setActivePage('contact')}
          className="bg-white text-blue-600 px-7 md:px-12 py-3.5 md:py-5 rounded-xl md:rounded-2xl font-black text-sm md:text-lg hover:bg-blue-50 transition-all shadow-2xl flex items-center justify-center gap-2 md:gap-3 mx-auto group active:scale-[0.98]"
        >
          {t.cta.button} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
        </button>
      </div>
    </section>
  );
};
