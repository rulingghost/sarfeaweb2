import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { FAQAccordion } from '../ui/FAQAccordion';

export const FaqSection = ({ t }) => {
  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-950/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title={t.faq.title} 
          subtitle={t.faq.subtitle} 
        />
        <FAQAccordion faqs={t.faq.questions} />
      </div>
    </section>
  );
};
