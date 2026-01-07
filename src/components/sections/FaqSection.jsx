import React, { useState, useMemo } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { FAQAccordion } from '../ui/FAQAccordion';
import { Search } from 'lucide-react';

export const FaqSection = ({ t }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = useMemo(() => {
    if (!searchTerm) return t.faq.questions;
    return t.faq.questions.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, t.faq.questions]);

  return (
    <section className="py-12 md:py-32 bg-slate-50 dark:bg-slate-950/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title={t.faq_section.title} 
          subtitle={t.faq_section.subtitle} 
        />
        
        <div className="mb-8 md:mb-10 relative max-w-md mx-auto px-1 sm:px-0">
            <input 
                type="text" 
                placeholder={t.faq_section.search_ph} 
                className="w-full pl-10 pr-4 py-3 md:py-4 rounded-xl md:rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm focus:ring-4 focus:ring-blue-500/5 outline-none transition-all text-sm md:text-base font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-6 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        </div>

        {filteredFaqs.length > 0 ? (
            <FAQAccordion faqs={filteredFaqs} />
        ) : (
            <div className="text-center py-10 text-slate-500">
                <p>Eşleşen bir sonuç bulunamadı.</p>
                <button onClick={() => setSearchTerm('')} className="text-blue-600 font-bold mt-2">Tümünü Göster</button>
            </div>
        )}
      </div>
    </section>
  );
};
