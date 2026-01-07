import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { LogoMarquee } from '../ui/LogoMarquee';
import { Reveal } from '../ui/Reveal';
import { SpotlightCard } from '../ui/SpotlightCard';
import { CountUp } from '../ui/CountUp';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Box, Code2, Globe, TrendingUp } from 'lucide-react';

export const StatsSection = ({ t }) => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <>
      <section className="py-12 md:py-24 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title={t.stats_section.title} 
            subtitle={t.stats_section.subtitle} 
          />
          <LogoMarquee />
        </div>
      </section>

      <section className="py-12 md:py-32 bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
            <Reveal>
              <h2 className="text-[1.35rem] sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 md:mb-8 tracking-tight leading-tight text-center lg:text-left">
                {t.stats_section.main_title_prefix}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">{t.stats_section.main_title_suffix}</span>
              </h2>
              <p className="text-sm md:text-xl text-slate-600 dark:text-slate-400 mb-8 md:mb-12 leading-relaxed font-medium text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                {t.stats_section.description}
              </p>
              
              {/* Bento Grid Implementation */}
              <div className="bento-grid">
                <SpotlightCard className="col-span-1 sm:col-span-2 row-span-1 p-6 md:p-8 rounded-3xl md:rounded-[2rem] glass-v2 flex flex-col justify-between group" color="blue">
                  <div className="flex justify-between items-start mb-4 md:mb-0">
                    <div className="p-3 md:p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl md:rounded-2xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                        <Globe size={24} className="md:w-7 md:h-7" />
                    </div>
                    <div className="text-3xl md:text-5xl font-black text-blue-600 dark:text-blue-500"><CountUp end={45} />+</div>
                  </div>
                  <div>
                    <div className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1">{t.stats_section.cards[0].label}</div>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">Küresel standartlarda dijital çözüm ortağınız.</p>
                  </div>
                </SpotlightCard>
                
                <SpotlightCard className="col-span-1 row-span-1 p-6 rounded-3xl glass-v2 flex flex-col items-center text-center group" color="purple">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400 mb-3 group-hover:rotate-12 transition-transform">
                    <Code2 size={20} />
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-purple-600 dark:text-purple-500 mb-1"><CountUp end={120} />+</div>
                  <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-tight">{t.stats_section.cards[1].label}</div>
                </SpotlightCard>
                
                <SpotlightCard className="col-span-1 row-span-1 p-6 rounded-3xl glass-v2 flex flex-col items-center text-center group" color="green">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-600 dark:text-green-400 mb-3 group-hover:scale-110 transition-transform">
                    <TrendingUp size={20} />
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-green-600 dark:text-green-500 mb-1"><CountUp end={99} />%</div>
                  <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-tight">{t.stats_section.cards[2].label}</div>
                </SpotlightCard>
                
                <SpotlightCard className="col-span-1 sm:col-span-2 row-span-1 p-6 md:p-8 rounded-3xl md:rounded-[2rem] glass-v2 flex items-center gap-4 md:gap-6 group" color="orange">
                  <div className="p-4 md:p-5 bg-orange-100 dark:bg-orange-900/30 rounded-2xl md:rounded-[1.5rem] text-orange-600 dark:text-orange-400 group-hover:-translate-y-1 transition-transform">
                    <Box size={24} className="md:w-8 md:h-8" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-orange-600 dark:text-orange-500 mb-0.5 md:mb-1"><CountUp end={24} />/7</div>
                    <div className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">{t.stats_section.cards[3].label}</div>
                  </div>
                </SpotlightCard>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="relative group perspective-1000 mt-8 md:mt-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl md:rounded-[2.5rem] transform rotate-3 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team" 
                  className="relative rounded-3xl md:rounded-[2.5rem] shadow-2xl border-2 md:border-4 border-white dark:border-slate-800 z-10 transform transition-transform duration-700"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};
