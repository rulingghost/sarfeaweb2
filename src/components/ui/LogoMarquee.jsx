import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Database, Cloud, ShieldCheck, Zap, Cpu, Layers, Server } from 'lucide-react';

const LOGOS = [
  { icon: Globe, name: "GLOBAL TECH", color: "#4285F4" },
  { icon: Database, name: "DATA SYSTEMS", color: "#00A4EF" },
  { icon: Cloud, name: "CLOUD CORP", color: "#FF9900" },
  { icon: ShieldCheck, name: "SECURE NET", color: "#1DB954" },
  { icon: Zap, name: "n8n AUTOMATION", color: "#FF6C37" },
  { icon: GitBranch, name: "MAKE FLOW", color: "#EA4335" },
  { icon: Cpu, name: "AUTO CORE", color: "#E91E63" },
  { icon: Layers, name: "STACK FLOW", color: "#9C27B0" },
  { icon: Server, name: "SERVER PLUS", color: "#607D8B" },
];

export const LogoMarquee = () => {
  return (
    <div className="relative py-10 md:py-16 overflow-hidden">
      {/* Gradient Fades for Smooth Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white dark:from-[#0b1120] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white dark:from-[#0b1120] to-transparent z-10"></div>
      
      <div className="flex select-none overflow-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-nowrap gap-8 md:gap-16 items-center shrink-0 pr-8 md:pr-16"
        >
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 md:gap-4 px-6 md:px-8 py-3 md:py-4 rounded-2xl glass-v2 border-slate-200 dark:border-slate-800/50 hover:border-blue-500/30 transition-all duration-300 group cursor-pointer"
            >
              <div 
                className="transition-transform duration-300 group-hover:scale-110"
                style={{ color: logo.color }}
              >
                <logo.icon size={22} className="md:w-6 md:h-6" />
              </div>
              <span className="text-sm md:text-lg font-black text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors whitespace-nowrap tracking-wide">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
