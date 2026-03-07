import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, X, ArrowRight, Zap, Calculator, Mail, BookOpen, Layout } from 'lucide-react';

export const CommandSearch = ({ isOpen, onClose, setActivePage, t }) => {
  const [search, setSearch] = useState('');

  const navigationItems = useMemo(() => [
    { id: 'home', label: t.navbar.home, icon: Layout, category: 'Navigasyon' },
    { id: 'solutions', label: t.navbar.solutions, icon: Zap, category: 'Navigasyon' },
    { id: 'process', label: t.navbar.process, icon: Layout, category: 'Navigasyon' },
    { id: 'about', label: t.navbar.about, icon: Layout, category: 'Navigasyon' },
    { id: 'blog', label: t.navbar.blog, icon: BookOpen, category: 'Navigasyon' },
    { id: 'contact', label: t.navbar.contact, icon: Mail, category: 'Navigasyon' },
    { id: 'harita', label: 'Global Harita (Jumbo)', icon: Layout, category: 'Haritalar' },
    { id: 'belediye', label: 'Türkiye Belediyeleri', icon: Layout, category: 'Haritalar' },
    { id: 'calculator', label: 'Fiyat Hesapla', icon: Calculator, category: 'Araçlar', special: 'calculator' },
  ], [t]);

  const filteredItems = useMemo(() => {
    if (!search) return navigationItems;
    return navigationItems.filter(item => 
      item.label.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, navigationItems]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(); // Invert logic to toggle if needed, but App.jsx handles state
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[120] flex items-start justify-center pt-[5vh] md:pt-[10vh] px-4 pointer-events-auto"
    >
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md" onClick={onClose} />
      
      <motion.div 
        initial={{ y: -20, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: -20, opacity: 0, scale: 0.98 }}
        className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 relative z-10"
      >
        <div className="flex items-center px-4 py-4 border-b border-slate-100 dark:border-slate-800">
          <Search className="text-slate-400 mr-3 shrink-0" size={20} />
          <input 
            autoFocus
            type="text" 
            placeholder="Nereye gitmek istersiniz?..." 
            className="flex-1 bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder:text-slate-500 font-medium text-base"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors md:hidden text-slate-400">
             <X size={20} />
          </button>
          <div className="hidden md:flex items-center gap-1.5 px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
            Esc
          </div>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2 no-scrollbar">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-slate-500 font-medium">Sonuç bulunamadı.</p>
            </div>
          ) : (
            <div className="space-y-4 py-2">
              {['Navigasyon', 'Haritalar', 'Araçlar'].map(category => {
                const categoryItems = filteredItems.filter(item => item.category === category);
                if (categoryItems.length === 0) return null;
                return (
                  <div key={category}>
                    <h3 className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-1">{category}</h3>
                    <div className="space-y-1">
                      {categoryItems.map(item => (
                        <button
                          key={item.id}
                          className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/10 group transition-all text-left"
                          onClick={() => {
                            if (item.special === 'calculator') {
                              window.dispatchEvent(new CustomEvent('open-calculator'));
                            } else {
                              setActivePage(item.id);
                            }
                            onClose();
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 transition-colors">
                              <item.icon size={18} />
                            </div>
                            <span className="font-bold text-slate-700 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">{item.label}</span>
                          </div>
                          <ArrowRight size={14} className="text-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                  <span className="w-5 h-5 flex items-center justify-center rounded bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-[10px] shadow-sm font-bold">↑↓</span>
                  <span className="text-[10px] text-slate-500 font-medium">Gezin</span>
              </div>
              <div className="flex items-center gap-1">
                  <span className="w-8 h-5 flex items-center justify-center rounded bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-[10px] shadow-sm font-bold">Enter</span>
                  <span className="text-[10px] text-slate-500 font-medium">Seç</span>
              </div>
           </div>
           <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
              SARFEA <Command size={10} /> K
           </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
