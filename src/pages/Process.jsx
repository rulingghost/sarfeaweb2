import React from 'react';
import { Search, LayoutDashboard, Code2, ShieldCheck, Rocket } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { Reveal } from '../components/ui/Reveal';

export const Process = ({ t }) => {
  return (
    <div className="pt-28 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader 
          title={t.process_page.title} 
          subtitle={t.process_page.subtitle} 
        />
        
        <div className="relative mt-24">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-blue-500/20 hidden md:block rounded-full"></div>
          
          {[
            { icon: Search, color: "blue" },
            { icon: LayoutDashboard, color: "purple" },
            { icon: Code2, color: "pink" },
            { icon: ShieldCheck, color: "orange" },
            { icon: Rocket, color: "green" }
          ].map((config, i) => {
            const step = t.process_page.steps[i];
            return (
            <Reveal key={i}>
              <div className={`flex items-center justify-between mb-24 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 md:gap-0`}>
                <div className="w-full md:w-5/12 relative">
                   {/* Card Hover Effect Enhanced */}
                  <SpotlightCard className={`p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border-2 border-slate-100 dark:border-slate-800 relative overflow-hidden transition-all duration-500 hover:border-${config.color}-300 dark:hover:border-${config.color}-800/50`} color={config.color}>
                    <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-${config.color}-600 dark:text-${config.color}-400 transform group-hover:scale-110 duration-500`}>
                      <config.icon size={120} />
                    </div>
                    <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-slate-100/0 dark:from-slate-800 dark:to-slate-900/0 absolute bottom-4 right-6 z-0 opacity-50 select-none">{step.step}</span>
                    <div className="relative z-10">
                      <div className={`w-14 h-14 bg-${config.color}-100 dark:bg-${config.color}-900/30 rounded-2xl flex items-center justify-center text-${config.color}-600 dark:text-${config.color}-400 mb-6 shadow-md shadow-${config.color}-500/10 group-hover:scale-110 transition-transform`}>
                        <config.icon size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{step.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{step.desc}</p>
                    </div>
                  </SpotlightCard>
                  {i !== 4 && <div className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full h-24 w-1 bg-gradient-to-b from-slate-200 to-transparent dark:from-slate-800"></div>}
                </div>
                
                <div className="hidden md:flex w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full items-center justify-center text-white font-black z-10 border-4 border-white dark:border-slate-950 shadow-lg shadow-blue-500/20 transform hover:scale-125 transition-transform">
                  {i + 1}
                </div>
                
                <div className="w-full md:w-5/12"></div>
              </div>
            </Reveal>
          )})}
        </div>
      </div>
    </div>
  );
};
