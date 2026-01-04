import React from 'react';
import { motion } from 'framer-motion';
import { Home, LayoutGrid, MessageSquare, Briefcase, User } from 'lucide-react';

export const MobileBottomNav = ({ activePage, setActivePage, t }) => {
  const items = [
    { id: 'home', icon: Home, label: t.navbar.home },
    { id: 'solutions', icon: LayoutGrid, label: t.navbar.solutions },
    { id: 'blog', icon: MessageSquare, label: "Blog" },
    { id: 'about', icon: User, label: t.navbar.about },
    { id: 'contact', icon: Briefcase, label: t.navbar.contact },
  ];

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-[60]">
      <div className="bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-2 flex items-center justify-around shadow-2xl shadow-blue-500/20">
        {items.map((item) => {
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className="relative flex flex-col items-center gap-1 p-2 focus:outline-none"
            >
              <motion.div
                animate={{
                  scale: isActive ? 1.2 : 1,
                  color: isActive ? '#60a5fa' : '#94a3b8'
                }}
                className={`transition-colors ${isActive ? 'text-blue-400' : 'text-slate-400'}`}
              >
                <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              </motion.div>
              
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -top-1 w-1 h-1 bg-blue-400 rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
