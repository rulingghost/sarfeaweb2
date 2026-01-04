import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { HelmetProvider } from 'react-helmet-async';
import { translations } from './translations';
import { LANGUAGES } from './constants';

// Layout
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileBottomNav } from './components/layout/MobileBottomNav';

// Sections & Features
import { Newsletter } from './components/sections/Newsletter';
import { CookieConsent } from './components/ui/CookieConsent';
import { Toast } from './components/ui/Toast';
import { ProjectCalculator } from './components/features/ProjectCalculator';
import { DynamicSEO } from './components/ui/DynamicSEO';


// Pages
import { Home } from './pages/Home';
import { Solutions } from './pages/Solutions';
import { Process } from './pages/Process';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [toast, setToast] = useState(null);
  
  // Language State
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return LANGUAGES.some(l => l.code === saved) ? saved : 'tr';
  });
  const t = translations[language];

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

  // Smooth Scroll to Top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
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
      default:
        if (activePage.startsWith('blog-post-')) {
            const postId = activePage.replace('blog-post-', '');
            const finalId = isNaN(postId) ? postId : parseInt(postId, 10);
            return <BlogPost postId={finalId} setActivePage={setActivePage} t={t} language={language} />;
        }
        return null;
    }
  };

  return (
    <HelmetProvider>
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 font-sans selection:bg-purple-500/30 dark:selection:bg-blue-500/30">

      {/* Automated SEO Engine */}
      <DynamicSEO activePage={activePage} language={language} t={t} />

      <CookieConsent t={t} />
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 origin-left z-[100] shadow-[0_1px_8px_rgba(59,130,246,0.5)]" style={{ scaleX }} />
      
      {/* Scroll to Top Button (Hidden on Mobile for App Nav) */}
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

      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isScrolled={isScrolled} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
        t={t} 
      />

      <AnimatePresence mode="wait">
        <motion.main
          key={activePage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {renderContent()}
        </motion.main>
      </AnimatePresence>

      <Newsletter t={t} />
      <Footer t={t} setActivePage={setActivePage} />

      {/* App-like Mobile Bottom Navigation */}
      <MobileBottomNav activePage={activePage} setActivePage={setActivePage} t={t} />
    </div>
    </HelmetProvider>
  );
}

export default App;