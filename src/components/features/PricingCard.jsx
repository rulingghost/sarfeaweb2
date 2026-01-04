import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const PricingCard = ({ plan, isPopular, onSelect }) => (
  <motion.div 
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 flex flex-col overflow-hidden ${isPopular ? 'bg-slate-900 text-white border-transparent shadow-2xl shadow-blue-900/30' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-xl dark:shadow-slate-900/50 hover:border-blue-300 dark:hover:border-blue-700 group'}`}
  >
    {isPopular && (
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/20 z-0"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0 animate-pulse"></div>
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg z-20">
          En Çok Tercih Edilen
        </div>
      </>
    )}
    <div className="relative z-10 flex flex-col h-full">
      <h3 className={`text-3xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{plan.name}</h3>
      <p className={`text-sm mb-8 font-medium ${isPopular ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>{plan.description}</p>
      <div className="mb-8 flex items-baseline">
        <span className="text-5xl font-black tracking-tight">{plan.price}</span>
        {plan.price !== "Özel Teklif" && <span className={`text-sm font-medium ml-2 ${isPopular ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>/başlangıç</span>}
      </div>
      <ul className="space-y-5 mb-10 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3.5 text-[15px]">
            <div className={`p-1 rounded-full ${isPopular ? 'bg-blue-500/20' : 'bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-500/10 transition-colors'}`}>
              <CheckCircle2 size={18} className={isPopular ? 'text-blue-400' : 'text-blue-600 dark:text-blue-400'} />
            </div>
            <span className={`font-medium ${isPopular ? 'text-slate-200' : 'text-slate-700 dark:text-slate-300'}`}>{feature}</span>
          </li>
        ))}
      </ul>
      <button 
        onClick={onSelect}
        className={`w-full py-4 rounded-2xl font-bold transition-all mt-auto shadow-md hover:shadow-lg active:scale-[0.98] ${isPopular ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-500/30' : 'bg-slate-100 dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-slate-600/80 text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 border border-transparent hover:border-blue-200 dark:hover:border-blue-900/50'}`}
      >
        Detaylı Bilgi Al
      </button>
    </div>
  </motion.div>
);
