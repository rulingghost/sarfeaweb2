import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { StatsSection } from '../components/sections/StatsSection';
import { TechStackSection } from '../components/sections/TechStackSection';
import { FaqSection } from '../components/sections/FaqSection';
import { CtaSection } from '../components/sections/CtaSection';

export const Home = ({ setActivePage, setIsCalculatorOpen, t }) => {
  return (
    <>
      <HeroSection navigateTo={setActivePage} onOpenCalculator={() => setIsCalculatorOpen(true)} t={t} />
      <StatsSection t={t} />
      <TechStackSection t={t} />
      <FaqSection t={t} />
      <CtaSection setActivePage={setActivePage} t={t} />
    </>
  );
};
