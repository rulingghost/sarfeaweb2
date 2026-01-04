import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { StatsSection } from '../components/sections/StatsSection';
import { TechStackSection } from '../components/sections/TechStackSection';
import { FaqSection } from '../components/sections/FaqSection';
import { CtaSection } from '../components/sections/CtaSection';
import { SEO } from '../components/ui/SEO';

export const Home = ({ setActivePage, setIsCalculatorOpen, t }) => {
  return (
    <>
      <SEO 
        title="CRM, ERP & Kurumsal Yazılım Çözümleri" 
        description="Sarfea ile işletmenizi geleceğe taşıyın. Bulut tabanlı CRM, ERP ve özelleştirilebilir dijital ekosistemler ile verimliliğinizi artırın."
        keywords="en iyi crm, erp sistemleri, kurumsal otomasyon, işletme takip programı"
      />
      <HeroSection navigateTo={setActivePage} onOpenCalculator={() => setIsCalculatorOpen(true)} t={t} />
      <StatsSection t={t} />
      <TechStackSection t={t} />
      <FaqSection t={t} />
      <CtaSection setActivePage={setActivePage} t={t} />
    </>
  );
};
