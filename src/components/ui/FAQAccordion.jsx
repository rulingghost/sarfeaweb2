import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'bg-blue-50/50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800 shadow-md' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm'}`}>
          <button 
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 dark:text-white transition-colors"
          >
            <span className={`text-lg ${openIndex === i ? 'text-blue-700 dark:text-blue-300' : ''}`}>{faq.question}</span>
            <div className={`p-2 rounded-full transition-all ${openIndex === i ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30'}`}>
              {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
            </div>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-blue-100/50 dark:border-blue-900/20 mt-2 text-[15px]">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
