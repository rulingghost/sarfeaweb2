import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export function BelediyePresentation({ setActivePage }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActivePage('home');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setActivePage]);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000', position: 'fixed', top: 0, left: 0, zIndex: 9999 }}>

      {/* Harita Uygulaması İframe */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ width: '100%', height: '100%' }}
      >
        <iframe 
          src="/belediye-map/index.html" 
          title="Belediye Harita Projesi" 
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </motion.div>
    </div>
  );
}
