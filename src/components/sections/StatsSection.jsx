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
      <section className="py-24 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title={t.stats_section.title} 
            subtitle={t.stats_section.subtitle} 
          />
          <LogoMarquee />
        </div>
      </section>

      <section className="py-32 bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
                {t.stats_section.main_title_prefix} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">{t.stats_section.main_title_suffix}</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-medium">
                {t.stats_section.description}
              </p>
              
              {/* Bento Grid Implementation */}
              <div className="bento-grid">
                <SpotlightCard className="col-span-1 sm:col-span-2 row-span-1 p-8 rounded-[2rem] glass-v2 flex flex-col justify-between group" color="blue">
                  <div className="flex justify-between items-start">
                    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                        <Globe size={28} />
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-blue-600 dark:text-blue-500"><CountUp end={45} />+</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white mb-1">{t.stats_section.cards[0].label}</div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Küresel standartlarda dijital çözüm ortağınız.</p>
                  </div>
                </SpotlightCard>
                
                <SpotlightCard className="col-span-1 row-span-1 p-8 rounded-[2rem] glass-v2 flex flex-col items-center text-center group" color="purple">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl text-purple-600 dark:text-purple-400 mb-4 group-hover:rotate-12 transition-transform">
                    <Code2 size={24} />
                  </div>
                  <div className="text-3xl font-black text-purple-600 dark:text-purple-500 mb-2"><CountUp end={120} />+</div>
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-tight">{t.stats_section.cards[1].label}</div>
                </SpotlightCard>
                
                <SpotlightCard className="col-span-1 row-span-1 p-8 rounded-[2rem] glass-v2 flex flex-col items-center text-center group" color="green">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-2xl text-green-600 dark:text-green-400 mb-4 group-hover:scale-110 transition-transform">
                    <TrendingUp size={24} />
                  </div>
                  <div className="text-3xl font-black text-green-600 dark:text-green-500 mb-2"><CountUp end={99} />%</div>
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-tight">{t.stats_section.cards[2].label}</div>
                </SpotlightCard>
                
                <SpotlightCard className="col-span-1 sm:col-span-2 row-span-1 p-8 rounded-[2rem] glass-v2 flex items-center gap-6 group" color="orange">
                  <div className="p-5 bg-orange-100 dark:bg-orange-900/30 rounded-[1.5rem] text-orange-600 dark:text-orange-400 group-hover:-translate-y-1 transition-transform">
                    <Box size={32} />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-orange-600 dark:text-orange-500 mb-1"><CountUp end={24} />/7</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">{t.stats_section.cards[3].label}</div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Kesintisiz teknik destek ve bakım.</p>
                  </div>
                </SpotlightCard>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="relative group perspective-1000">
                {/* Floating Decorative Elements */}
                <motion.div 
                    style={{ y: yParallax }}
                    className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 pointer-events-none"
                />
                
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2.5rem] transform rotate-3 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team" 
                  className="relative rounded-[2.5rem] shadow-2xl border-4 border-white dark:border-slate-800 z-10 transform transition-transform duration-700 group-hover:rotate-0 group-hover:scale-[1.01]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};
