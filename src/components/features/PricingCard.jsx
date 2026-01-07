import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const PricingCard = ({ plan, isPopular, onSelect }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
    className={`relative p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] border transition-all duration-500 flex flex-col h-full ${isPopular ? 'bg-slate-900 text-white border-transparent shadow-2xl shadow-blue-900/40 z-10 scale-100 md:scale-105' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-xl dark:shadow-slate-900/50 hover:border-blue-300 dark:hover:border-blue-700 group'}`}
  >
    {isPopular && (
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-transparent z-0"></div>
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-1.5 rounded-full text-xs md:text-sm font-black shadow-xl z-20 whitespace-nowrap uppercase tracking-wider">
          En Çok Tercih Edilen
        </div>
      </>
    )}
    
    <div className="relative z-10 flex flex-col h-full flex-1">
      <div className="mb-6 md:mb-8">
        <h3 className={`text-2xl md:text-3xl font-black mb-2 md:mb-3 ${isPopular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{plan.name}</h3>
        <p className={`text-[11px] md:text-sm font-medium leading-relaxed ${isPopular ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>{plan.description}</p>
      </div>

      <div className="mb-8 md:mb-10">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl md:text-5xl font-black tracking-tighter">{plan.price}</span>
          {plan.price !== "Özel Teklif" && <span className={`text-[10px] md:text-sm font-bold opacity-60`}>/başlangıç</span>}
        </div>
      </div>

      <ul className="space-y-4 md:space-y-5 mb-10 flex-1">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm md:text-[15px]">
            <div className={`mt-0.5 p-1 rounded-full shrink-0 ${isPopular ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'}`}>
              <CheckCircle2 size={14} />
            </div>
            <span className={`font-semibold leading-tight ${isPopular ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}>{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        onClick={onSelect}
        className={`w-full py-4 md:py-5 rounded-2xl font-black text-sm md:text-base transition-all mt-auto shadow-lg active:scale-[0.98] ${isPopular ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-500/20' : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-blue-50 dark:hover:bg-slate-600 border border-transparent'}`}
      >
        Detaylı Bilgi Al
      </button>
    </div>
  </motion.div>
);
