import React from 'react';
import { LayoutDashboard, Smartphone, ShoppingBag as ShoppingBagIcon, Boxes, Users, GitBranch, Cpu, Wifi } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { TechStackMarquee } from '../components/ui/TechStackMarquee';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { PricingCard } from '../components/features/PricingCard';
import { AdvancedCRMPreview } from '../components/features/AdvancedCRMPreview';
import { Reveal } from '../components/ui/Reveal';

export const Solutions = ({ setActivePage, t, language }) => {
  return (
    <div className="pt-28 min-h-screen bg-transparent transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader 
          title={t.solutions_page.title} 
          subtitle={t.solutions_page.subtitle} 
        />
        
        <div className="mb-24">
          <TechStackMarquee technologies={[
            { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
            { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
            { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
            { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
            { name: "Docker", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
            { name: "Flutter", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" }
          ]} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-32">
          {[
            { icon: LayoutDashboard, color: "blue" },
            { icon: Smartphone, color: "purple" },
            { icon: ShoppingBagIcon, color: "green" },
            { icon: Boxes, color: "orange" },
            { icon: Users, color: "pink" },
            { icon: GitBranch, color: "cyan" },
            { icon: Cpu, color: "indigo" },
            { icon: Wifi, color: "teal" }
          ].map((config, i) => {
            const item = t.solutions_page.items[i];
            return (
            <Reveal key={i} delay={i * 50}>
              <SpotlightCard className="rounded-[2rem] p-6 h-full flex flex-col" color={config.color}>
                <div className={`w-14 h-14 rounded-2xl bg-${config.color}-100 dark:bg-${config.color}-900/30 flex items-center justify-center text-${config.color}-600 dark:text-${config.color}-400 mb-6 group-hover:scale-110 transition-transform shadow-md shadow-${config.color}-500/10 relative z-10`}>
                  <config.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 relative z-10 leading-relaxed flex-1">{item.desc}</p>
                <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className={`text-[10px] font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          )})}
        </div>

        <div className="mb-32 hidden md:block">
          <SectionHeader 
             title={language === 'en' ? "Advanced Dashboard Experience" : "Gelişmiş Yönetim Paneli Deneyimi"}
             subtitle={language === 'en' ? "Monitor detailed analytics, team interactions, and project statuses in real-time." : "Detaylı analizler, ekip iletişimi ve proje durumlarını canlı olarak izleyin."}
          />
          <Reveal>
             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[1.7rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <AdvancedCRMPreview t={t} />
             </div>
          </Reveal>
        </div>

        <div className="mb-24">
          <SectionHeader 
            title={t.pricing.title} 
            subtitle={t.pricing.subtitle} 
          />
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <PricingCard 
              onSelect={() => setActivePage('contact')}
              plan={t.pricing.plans[0]} 
            />
            <PricingCard 
              isPopular={true}
              onSelect={() => setActivePage('contact')}
              plan={t.pricing.plans[1]} 
            />
            <PricingCard 
              onSelect={() => setActivePage('contact')}
              plan={t.pricing.plans[2]} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};
