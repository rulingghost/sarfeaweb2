import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Heart } from 'lucide-react';

const DESKTOP_QUERY = '(min-width: 1024px)';

/**
 * Sunum sayfaları yalnızca geniş ekranda gösterilir; telefon ve dar ekranlarda nazik bir bilgilendirme gösterilir.
 */
export function DesktopPresentationGate({ children, setActivePage }) {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(DESKTOP_QUERY).matches : true
  );

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  if (!isDesktop) {
    return (
      <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md rounded-3xl border border-slate-200/80 bg-white/80 p-8 text-center shadow-[0_20px_60px_-15px_rgba(15,23,42,0.15)] backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/75 dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.45)]"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-blue-600 dark:from-blue-400/20 dark:to-violet-400/20 dark:text-blue-400">
            <Monitor className="h-7 w-7" strokeWidth={1.5} />
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
            Sarfea sunumu
          </p>
          <h1 className="mt-3 text-xl font-semibold leading-snug text-slate-800 dark:text-slate-100 md:text-2xl">
            Bu sunumu sizin için en doğru şekilde sunabilmek adına
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
            İçerik geniş ekran ve masaüstü deneyimine göre hazırlandı. Dilerseniz bilgisayarınızdan veya
            dizüstünüzden bu sayfayı açarak sunumu rahatça izleyebilirsiniz.
          </p>
          <p className="mt-5 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-500">
            <Heart className="h-4 w-4 text-rose-400/90" strokeWidth={1.75} aria-hidden />
            <span>Teşekkür ederiz, iyi günler dileriz.</span>
          </p>
          {setActivePage && (
            <button
              type="button"
              onClick={() => setActivePage('home')}
              className="mt-8 w-full rounded-xl border border-slate-200 bg-slate-50 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              Ana sayfaya dön
            </button>
          )}
        </motion.div>
      </div>
    );
  }

  return children;
}
