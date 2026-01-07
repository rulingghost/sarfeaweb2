import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Zap, Menu, X, ChevronRight, Globe, Search } from 'lucide-react';
import logoImage from '../../assets/logo.png';
import logoDarkImage from '../../assets/logo-dark.png';
import { LANGUAGES, NAV_ITEMS } from '../../constants';

export const Navbar = ({ activePage, setActivePage, isScrolled, darkMode, setDarkMode, language, setLanguage, setIsCommandMenuOpen, t }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-indigo-500/5 py-3 border-b border-slate-200/50 dark:border-slate-800/50 supports-[backdrop-filter]:bg-white/60' : 'bg-transparent py-4 md:py-6'}`}>
      {isScrolled && <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2.5 cursor-pointer group" onClick={() => handleNavClick('home')}>
          <img src={darkMode ? logoDarkImage : logoImage} alt="SARFEA Logo" className="h-10 md:h-12 w-auto object-contain transition-all duration-300" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button 
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              title={`${t.navbar[item.labelKey]} - SARFEA`}
              className={`text-[13px] font-bold uppercase tracking-widest transition-all relative group py-2 ${activePage === item.id ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
            >
              {t.navbar[item.labelKey]}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${activePage === item.id ? 'scale-x-100' : ''}`}></span>
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)} className="w-11 h-11 rounded-full border border-slate-200/80 dark:border-slate-700/80 text-slate-600 dark:text-yellow-400 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 hover:border-blue-300 dark:hover:border-blue-700">
            {darkMode ? <Sun size={20} className="hover:rotate-90 transition-transform" /> : <Moon size={20} className="hover:-rotate-12 transition-transform" />}
          </button>
          
          <div className="relative group/lang">
            <button 
               className="w-11 h-11 rounded-full border border-slate-200/80 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all flex items-center justify-center bg-slate-50/50 dark:bg-slate-900/50 hover:border-blue-300 dark:hover:border-blue-700 font-bold text-sm"
            >
               {language.toUpperCase()}
            </button>
            <div className="absolute top-full right-0 pt-2 w-32 hidden group-hover/lang:block animate-in fade-in slide-in-from-top-2">
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden max-h-64 overflow-y-auto no-scrollbar">
                {[...LANGUAGES].sort((a, b) => a.code === 'tr' ? -1 : 1).map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 ${language === lang.code ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/10' : 'text-slate-600 dark:text-slate-300'}`}
                  >
                    <span className={`w-2 h-2 rounded-full ${language === lang.code ? 'bg-blue-600' : 'bg-transparent'}`}></span>
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button onClick={() => handleNavClick('contact')} className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-100 hover:from-blue-600 hover:to-indigo-600 dark:hover:from-blue-500 dark:hover:to-indigo-500 text-white dark:text-slate-900 px-7 py-3 rounded-full font-bold transition-all shadow-lg shadow-slate-900/10 dark:shadow-white/5 hover:shadow-blue-500/30 flex items-center gap-2 group hover:scale-[1.02] active:scale-[0.98]">
            <Zap size={18} className="group-hover:fill-current transition-colors"/> {t.navbar.startProject}
          </button>
        </div>

        <button className="md:hidden p-2.5 text-slate-700 dark:text-white bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 w-full bg-white/95 dark:bg-slate-950/95 border-t border-slate-100 dark:border-slate-800 shadow-2xl md:hidden overflow-hidden backdrop-blur-xl"
          >
            <div className="p-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <button 
                  key={item.id} 
                  onClick={() => handleNavClick(item.id)} 
                  className={`block w-full text-left p-4 rounded-2xl font-bold transition-all ${activePage === item.id ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 pl-6 border-l-4 border-blue-600' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:pl-6'}`}
                >
                  <span className="capitalize flex items-center justify-between">
                    {t.navbar[item.labelKey]}
                    {activePage === item.id && <ChevronRight size={18} />}
                  </span>
                </button>
              ))}
              <div className="flex items-center justify-between px-4 py-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl mt-2">
                  <span className="text-slate-700 dark:text-slate-300 font-bold flex items-center gap-2">{darkMode ? <Moon size={18}/> : <Sun size={18}/>} {darkMode ? t.navbar.darkMode : t.navbar.lightMode}</span>
                  <button onClick={() => setDarkMode(!darkMode)} className={`w-14 h-8 rounded-full relative transition-colors ${darkMode ? 'bg-blue-600' : 'bg-slate-300'}`}>
                     <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-all shadow-sm flex items-center justify-center ${darkMode ? 'translate-x-6' : ''}`}>
                        {darkMode ? <Moon size={14} className="text-blue-600"/> : <Sun size={14} className="text-yellow-500"/>}
                     </div>
                  </button>
              </div>

              {/* Mobile Language Selector */}
              <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl mt-2 p-4">
                  <span className="text-slate-700 dark:text-slate-300 font-bold flex items-center gap-2 mb-3 text-sm">
                    <Globe size={18}/> Dil Seçimi / Language
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code); setIsOpen(false); }}
                        className={`py-2 rounded-lg text-xs font-bold transition-colors ${language === lang.code ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'}`}
                      >
                        {lang.shortLabel}
                      </button>
                    ))}
                  </div>
              </div>

              <button onClick={() => handleNavClick('contact')} className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-2xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                <Zap size={18} fill="currentColor"/> {t.navbar.startProject}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
