import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calculator, Activity, Share2, Star } from 'lucide-react';
import { TiltContainer } from '../ui/TiltContainer';
import { AdvancedCRMPreview } from '../features/AdvancedCRMPreview';

export const HeroSection = ({ navigateTo, onOpenCalculator, t }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden -z-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
        <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-80 h-80 bg-blue-400/30 dark:bg-blue-600/20 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-soft-light" />
        <motion.div style={{ y: y2 }} className="absolute top-40 right-10 w-96 h-96 bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-soft-light" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-indigo-400/30 dark:bg-indigo-600/20 rounded-full blur-[100px] animate-pulse animation-delay-4000 mix-blend-multiply dark:mix-blend-soft-light" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] mask-image-radial-gradient"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card text-blue-700 dark:text-blue-300 text-sm font-bold shadow-sm bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-md border border-blue-100 dark:border-blue-800 hover:bg-blue-100/80 dark:hover:bg-blue-900/50 transition-colors cursor-default">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-blue-500 to-indigo-500"></span>
              </span>
              {t.hero.tag}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              {t.hero.title_prefix} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 animate-gradient-x">
                {t.hero.title_suffix}
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg font-medium">
              {t.hero.description}
            </p>
            
            <div className="flex flex-wrap gap-5">
              <button onClick={() => navigateTo('contact')} className="px-10 py-4 bg-gradient-to-r from-slate-900 to-indigo-900 dark:from-white dark:to-slate-200 text-white dark:text-slate-900 rounded-2xl font-bold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 active:scale-95 flex items-center gap-3 group">
                {t.hero.btn_start} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={onOpenCalculator} className="px-10 py-4 bg-white/80 dark:bg-slate-800/80 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white rounded-2xl font-bold transition-all hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 backdrop-blur-sm flex items-center gap-3 group active:scale-95">
                <Calculator size={20} className="text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform"/> {t.hero.btn_scope}
              </button>
            </div>

            <div className="flex items-center gap-8 pt-6 border-t border-slate-200/60 dark:border-slate-700/60">
              <div className="flex -space-x-5 pl-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-[3px] border-white dark:border-slate-900 bg-slate-200 flex items-center justify-center overflow-hidden shadow-sm hover:z-10 hover:scale-110 transition-all relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover"/>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500 drop-shadow-sm">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-bold mt-1"><span className="text-slate-900 dark:text-white">100+</span> {t.hero.references}</p>
              </div>
            </div>
          </motion.div>

          {/* SAĞ TARAF - GELİŞMİŞ CRM MOCKUP (Artık Tilt Efektli!) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block perspective-1000"
          >
            {/* 3D Tilt Wrapper Ekledim */}
            <TiltContainer>
                <div className="relative z-10 bg-[#0f172a] rounded-[1.5rem] p-0 shadow-2xl shadow-blue-900/40 border-4 border-slate-800 transition-all duration-300 group overflow-hidden">
                    <AdvancedCRMPreview t={t} />
                </div>
            </TiltContainer>
            
            {/* Background Decorative Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 bg-white/90 dark:bg-slate-800/90 p-5 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border border-white/20 dark:border-slate-700/30 z-20 backdrop-blur-md group hover:border-green-200 dark:hover:border-green-900/50 transition-colors pointer-events-none"
            >
              <div className="absolute inset-0 bg-green-500/5 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                  <Activity size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.crm_preview.system_status}</p>
                  <p className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-1">%99.9 <span className="text-green-500 text-xs">{t.crm_preview.uptime}</span></p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-16 -left-12 bg-white/90 dark:bg-slate-800/90 p-5 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border border-white/20 dark:border-slate-700/30 z-20 backdrop-blur-md group hover:border-blue-200 dark:hover:border-blue-900/50 transition-colors pointer-events-none"
            >
              <div className="absolute inset-0 bg-blue-500/5 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <Share2 size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.crm_preview.integration}</p>
                  <p className="text-xl font-black text-slate-900 dark:text-white">{t.crm_preview.api_ready}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

