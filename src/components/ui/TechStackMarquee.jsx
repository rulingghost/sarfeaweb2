import React from 'react';

export const TechStackMarquee = ({ technologies }) => (
  <div className="flex flex-wrap justify-center gap-8 opacity-90">
     {technologies.map((tech, i) => (
       <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer">
          <div className="w-16 h-16 bg-white dark:bg-slate-800/80 rounded-2xl shadow-md flex items-center justify-center p-3 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 border border-slate-100/50 dark:border-slate-700/50 group-hover:border-blue-200 dark:group-hover:border-blue-900 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain relative z-10 filter grayscale-[20%] group-hover:grayscale-0 transition-all" />
          </div>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{tech.name}</span>
       </div>
     ))}
  </div>
);
