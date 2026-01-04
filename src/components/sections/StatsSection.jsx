import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { LogoMarquee } from '../ui/LogoMarquee';
import { Reveal } from '../ui/Reveal';
import { SpotlightCard } from '../ui/SpotlightCard';
import { CountUp } from '../ui/CountUp';

export const StatsSection = ({ t }) => {
  return (
    <>
      <section className="py-24 bg-white dark:bg-slate-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title={t.stats_section.title} 
            subtitle={t.stats_section.subtitle} 
          />
          <LogoMarquee />
        </div>
      </section>

      <section className="py-32 bg-slate-50 dark:bg-slate-950/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
                {t.stats_section.main_title_prefix} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">{t.stats_section.main_title_suffix}</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-medium">
                {t.stats_section.description}
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <SpotlightCard className="p-6 rounded-3xl" color="blue">
                  <div className="text-4xl font-black text-blue-600 dark:text-blue-500 mb-2"><CountUp end={45} />+</div>
                  <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.stats_section.cards[0].label}</div>
                </SpotlightCard>
                
                <SpotlightCard className="p-6 rounded-3xl" color="purple">
                  <div className="text-4xl font-black text-purple-600 dark:text-purple-500 mb-2"><CountUp end={120} />+</div>
                  <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.stats_section.cards[1].label}</div>
                </SpotlightCard>
                
                <SpotlightCard className="p-6 rounded-3xl" color="green">
                  <div className="text-4xl font-black text-green-600 dark:text-green-500 mb-2"><CountUp end={99} />%</div>
                  <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.stats_section.cards[2].label}</div>
                </SpotlightCard>
                
                <SpotlightCard className="p-6 rounded-3xl" color="orange">
                  <div className="text-4xl font-black text-orange-600 dark:text-orange-500 mb-2"><CountUp end={24} />/7</div>
                  <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.stats_section.cards[3].label}</div>
                </SpotlightCard>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2.5rem] transform rotate-3 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team" 
                  className="relative rounded-[2.5rem] shadow-2xl border-4 border-white dark:border-slate-800 z-10 transform transition-transform duration-500 group-hover:rotate-1 group-hover:scale-[1.02]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};
