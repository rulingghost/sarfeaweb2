import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

export const Toast = ({ message, onClose, t }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50, x: '50%' }}
    animate={{ opacity: 1, y: 0, x: '50%' }}
    exit={{ opacity: 0, y: 20, x: '50%' }}
    className="fixed bottom-8 right-1/2 translate-x-1/2 md:right-8 md:translate-x-0 z-[100] bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-4 rounded-xl shadow-2xl shadow-indigo-500/20 flex items-center gap-3 min-w-[300px] border border-white/10 dark:border-slate-200/20"
  >
    <CheckCircle className="text-green-500" size={24} />
    <div>
      <h4 className="font-bold text-sm">{t?.toast?.title || "Talep Alındı!"}</h4>
      <p className="text-sm opacity-90">{message}</p>
    </div>
    <button onClick={onClose} className="ml-auto opacity-50 hover:opacity-100 transition-opacity">
      <X size={18} />
    </button>
  </motion.div>
);
