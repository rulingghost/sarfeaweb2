import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Code2, Server, Cloud, Boxes, Database, GitBranch, Layers, Terminal } from 'lucide-react';

export const TechStackSection = ({ t }) => {
  return (
    <section className="py-12 md:py-32 bg-white dark:bg-slate-900 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title={t.tech_stack.title} 
          subtitle={t.tech_stack.subtitle} 
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {[
            { name: "React & Next.js", icon: Code2, desc: t.tech_stack.items[0].desc, color: "blue" },
            { name: "Node.js & Python", icon: Server, desc: t.tech_stack.items[1].desc, color: "green" },
            { name: "AWS & Azure", icon: Cloud, desc: t.tech_stack.items[2].desc, color: "orange" },
            { name: "Docker & K8s", icon: Boxes, desc: t.tech_stack.items[3].desc, color: "cyan" },
            { name: "PostgreSQL & MongoDB", icon: Database, desc: t.tech_stack.items[4].desc, color: "purple" },
            { name: "CI/CD Pipeline", icon: GitBranch, desc: t.tech_stack.items[5].desc, color: "pink" },
            { name: "Microservices", icon: Layers, desc: t.tech_stack.items[6].desc, color: "indigo" },
            { name: "REST & GraphQL", icon: Terminal, desc: t.tech_stack.items[7].desc, color: "teal" }
          ].map((tech, i) => (
            <Reveal key={i} delay={i * 50}>
              <SpotlightCard className={`p-5 md:p-6 rounded-2xl md:rounded-3xl h-full flex flex-col items-center text-center group cursor-default`} color={tech.color}>
                <div className={`w-10 h-10 md:w-16 md:h-16 bg-${tech.color}-100 dark:bg-${tech.color}-900/30 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-${tech.color}-500/10`}>
                  <tech.icon size={20} className={`text-${tech.color}-600 dark:text-${tech.color}-400 md:hidden`} />
                  <tech.icon size={32} className={`text-${tech.color}-600 dark:text-${tech.color}-400 hidden md:block`} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 md:mb-2 text-sm md:text-lg">{tech.name}</h4>
                <p className="text-[10px] md:text-sm text-slate-600 dark:text-slate-400 font-medium h-fit">{tech.desc}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
