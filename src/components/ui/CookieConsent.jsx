import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export const CookieConsent = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-[120] bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col gap-4"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">{t?.cookie?.title || "Çerez Politikası"}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t?.cookie?.text || "Deneyiminizi iyileştirmek için çerezleri kullanıyoruz."}
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setIsVisible(false)} className="flex-1 px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
              {t?.cookie?.reject || "Reddet"}
            </button>
            <button onClick={handleAccept} className="flex-1 px-4 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-lg shadow-blue-500/20">
              {t?.cookie?.accept || "Kabul Et"}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
