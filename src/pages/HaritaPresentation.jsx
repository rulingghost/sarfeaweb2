import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export function HaritaPresentation({ setActivePage }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActivePage('home');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setActivePage]);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000', position: 'fixed', top: 0, left: 0, zIndex: 9999 }}>
      {/* Ana Sayfaya Dönüş Butonu */}
      <button 
        onClick={() => setActivePage('home')}
        style={{
          position: 'fixed',
          top: '2rem',
          left: '2.5rem',
          zIndex: 10000,
          background: 'rgba(0, 0, 0, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          padding: '0.8rem 1.5rem',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          cursor: 'pointer',
          color: 'white',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(0, 242, 254, 0.2)';
          e.currentTarget.style.borderColor = 'var(--accent-primary)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }}
        title="Ana Sayfaya Dön (Esc)"
      >
         <img src="/sarfea_logo.png" alt="SARFEA Logo" style={{ height: '30px', width: 'auto' }} />
         <span style={{ fontWeight: 600, letterSpacing: '1px' }}>ANA SAYFA</span>
         <X size={20} />
      </button>

      {/* Harita Uygulaması İframe */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ width: '100%', height: '100%' }}
      >
        <iframe 
          src="/jumbo-map/index.html" 
          title="Harita Projesi" 
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </motion.div>
    </div>
  );
}
