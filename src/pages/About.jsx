import React from 'react';
import { Rocket, Target, Lightbulb, Briefcase, ShoppingBag as ShoppingBagIcon, Smartphone, Cpu, Wifi, ShieldCheck } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Reveal } from '../components/ui/Reveal';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { Timeline } from '../components/ui/Timeline';

export const About = ({ t }) => {
  return (
    <div className="pt-28 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader 
          title={t.about_page.title} 
          subtitle={t.about_page.subtitle} 
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <Reveal>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/20 group">
              <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern Office" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex items-end p-10 z-20">
                <div className="text-white">
                  <div className="inline-block px-3 py-1 bg-blue-600 rounded-full text-xs font-bold mb-3 shadow-sm">{t.about_page.office.tag}</div>
                  <h3 className="text-3xl font-bold mb-3">{t.about_page.office.location}</h3>
                  <p className="text-slate-200 font-medium leading-relaxed max-w-md">{t.about_page.office.desc}</p>
                </div>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="space-y-10">
              <div>
                 <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                   <span className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm"><Rocket size={22}/></span>
                   {t.about_page.vision.title}
                 </h3>
                 <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                   <p>
                     {t.about_page.vision.p1}
                   </p>
                   <p>
                     {t.about_page.vision.p2}
                   </p>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <SpotlightCard className="p-6 rounded-3xl" color="blue">
                  <Target className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={36} />
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">{t.about_page.values[0].title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">{t.about_page.values[0].desc}</p>
                </SpotlightCard>
                <SpotlightCard className="p-6 rounded-3xl" color="orange">
                  <Lightbulb className="text-yellow-500 mb-4 group-hover:scale-110 transition-transform" size={36} />
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">{t.about_page.values[1].title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">{t.about_page.values[1].desc}</p>
                </SpotlightCard>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mb-32">
           <SectionHeader 
              title={t.about_page.timeline_title} 
              subtitle={t.about_page.timeline_subtitle} 
           />
           <Timeline t={t}/>
        </div>

        <div className="mb-24">
          <h3 className="text-3xl font-extrabold text-center text-slate-900 dark:text-white mb-16 tracking-tight">{t.about_page.solutions_area_title}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Briefcase, color: "blue" },
              { icon: ShoppingBagIcon, color: "green" },
              { icon: Smartphone, color: "purple" },
              { icon: Cpu, color: "indigo" },
              { icon: Wifi, color: "orange" },
              { icon: ShieldCheck, color: "red" }
            ].map((config, i) => {
              const solution = t.about_page.solution_areas[i];
              return (
              <Reveal key={i} delay={i * 80}>
                <SpotlightCard className="p-8 rounded-[2rem] h-full flex flex-col" color={config.color}>
                  <div className={`w-16 h-16 bg-${config.color}-100 dark:bg-${config.color}-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-${config.color}-500/20`}>
                    <config.icon size={32} className={`text-${config.color}-600 dark:text-${config.color}-400`} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{solution.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-1 font-medium">{solution.desc}</p>
                  <div className="space-y-2">
                    {solution.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${config.color}-500`}></div>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </Reveal>
            )})}
          </div>
        </div>
      </div>
    </div>
  );
};
