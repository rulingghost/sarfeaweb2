import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { HelmetProvider } from 'react-helmet-async';
import { translations } from './translations';
import { LANGUAGES } from './constants';

// Layout
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Sections & Features
import { Newsletter } from './components/sections/Newsletter';
import { CookieConsent } from './components/ui/CookieConsent';
import { Toast } from './components/ui/Toast';
import { ProjectCalculator } from './components/features/ProjectCalculator';
import { DynamicSEO } from './components/ui/DynamicSEO';
import { BackgroundEffects } from './components/ui/BackgroundEffects';
import { AdvancedCRMPreview } from './components/features/AdvancedCRMPreview';
import { CommandSearch } from './components/ui/CommandSearch';


// Pages
import { Home } from './pages/Home';
import { Solutions } from './pages/Solutions';
import { Process } from './pages/Process';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { JumboPresentation } from './pages/JumboPresentation';
import { HospitalPresentation } from './pages/HospitalPresentation';

function App() {
  const [activePage, setActivePage] = useState(() => {
    const path = window.location.pathname.slice(1);
    return path || 'home';
  });

  useEffect(() => {
    const handlePopState = () => {
      setActivePage(window.location.pathname.slice(1) || 'home');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const path = activePage === 'home' ? '/' : `/${activePage}`;
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
  }, [activePage]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle Command Menu: Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandMenuOpen(prev => !prev);
      }
      // Close Command Menu: Esc
      if (e.key === 'Escape') {
        setIsCommandMenuOpen(false);
      }
    };
    
    // Listen for custom events (from CommandSearch items)
    const handleOpenCalculator = () => setIsCalculatorOpen(true);
    window.addEventListener('open-calculator', handleOpenCalculator);
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-calculator', handleOpenCalculator);
    };
  }, []);
  
  // Language State
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return LANGUAGES.some(l => l.code === saved) ? saved : 'tr';
  });

  // Safe translation getter with fallback
  const t = useMemo(() => {
    const base = translations['tr'];
    const current = translations[language] || translations['tr'];
    
    // Simple deep merge for the 1st level of objects
    const merged = { ...base };
    Object.keys(current).forEach(key => {
      if (typeof current[key] === 'object' && !Array.isArray(current[key]) && current[key] !== null) {
        merged[key] = { ...base[key], ...current[key] };
      } else {
        merged[key] = current[key];
      }
    });
    return merged;
  }, [language]);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);
    
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scroll to Top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' }); // Performans için instant
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' }); // Performans için instant
  }, [activePage]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const renderContent = () => {
    switch(activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} setIsCalculatorOpen={setIsCalculatorOpen} t={t} />;
      case 'solutions':
        return <Solutions setActivePage={setActivePage} t={t} />;
      case 'process':
        return <Process t={t} />;
      case 'about':
        return <About t={t} />;
      case 'contact':
        return <Contact t={t} language={language} onShowToast={setToast} />;
      case 'blog':
        return <Blog setActivePage={setActivePage} t={t} language={language} />;
      case 'admin':
        return (
            <div className="pt-28 pb-20 px-4 min-h-screen flex flex-col items-center justify-center">
                <div className="w-full max-w-6xl">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">{t.solutions_page?.items?.[0]?.title || "Yönetim Paneli"}</h1>
                    <AdvancedCRMPreview t={t} />
                </div>
            </div>
        );
      case 'jumbo':
        return <JumboPresentation setActivePage={setActivePage} />;
      case 'hospital':
        return <HospitalPresentation setActivePage={setActivePage} />;
      default:
          if (activePage.startsWith('blog-post-')) {
            const postId = activePage.replace('blog-post-', '');
            const finalId = isNaN(postId) ? postId : parseInt(postId, 10);
            return <BlogPost postId={finalId} setActivePage={setActivePage} t={t} language={language} />;
        }
        return (
             <div className="min-h-screen flex flex-col items-center justify-center pt-20">
                 <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">404</h1>
                 <p className="text-slate-500 mb-8">Sayfa bulunamadı / Page not found</p>
                 <button onClick={() => setActivePage('home')} className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition">
                     Ana Sayfaya Dön
                 </button>
             </div>
        );
    }
  };

  return (
    <HelmetProvider>
    <div className="min-h-screen transition-colors duration-500 font-sans selection:bg-purple-500/30 dark:selection:bg-blue-500/30">

      {/* Premium Background Effects & Mesh Gradient */}
      <BackgroundEffects />

      {/* Main Content Wrapper (Elevated above background) */}
      <div className="relative z-10 overflow-x-hidden">
        {/* Automated SEO Engine */}
        <DynamicSEO activePage={activePage} language={language} t={t} />

        <CookieConsent t={t} />
        <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 origin-left z-[100] shadow-[0_1px_8px_rgba(59,130,246,0.5)]" style={{ scaleX }} />
        
        {/* Scroll to Top Button */}
        <AnimatePresence>
          {isScrolled && (
              <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  onClick={scrollToTop}
                  className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-40 bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
              >
                  <ArrowUp size={24} />
              </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {toast && <Toast message={toast} onClose={() => setToast(null)} t={t} />}
        </AnimatePresence>

        <AnimatePresence>
          {isCalculatorOpen && <ProjectCalculator isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} onShowToast={(msg) => setToast(msg)} t={t} />}
        </AnimatePresence>

        <AnimatePresence>
          {isCommandMenuOpen && (
            <CommandSearch 
              isOpen={isCommandMenuOpen} 
              onClose={() => setIsCommandMenuOpen(false)} 
              setActivePage={setActivePage} 
              t={t} 
              language={language} 
            />
          )}
        </AnimatePresence>

        <Navbar 
          activePage={activePage} 
          setActivePage={setActivePage} 
          isScrolled={isScrolled} 
          darkMode={darkMode} 
          setDarkMode={setDarkMode}
          language={language}
          setLanguage={setLanguage}
          setIsCommandMenuOpen={setIsCommandMenuOpen}
          t={t} 
        />

        <AnimatePresence mode="wait">
          <motion.main
            key={activePage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {renderContent()}
          </motion.main>
        </AnimatePresence>

        <Newsletter t={t} />
        <Footer t={t} setActivePage={setActivePage} />
      </div>
    </div>
    </HelmetProvider>
  );
}

export default App;