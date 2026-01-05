import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export const Newsletter = ({ t }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API Call
    setTimeout(() => {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-900/20"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t?.newsletter?.title || "Teknoloji Bültenimize Abone Olun"}</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">{t?.newsletter?.text || "En yeni teknoloji trendleri, yazılım dünyasından haberler ve Sarfea'dan güncellemeler için bültenimize katılın."}</p>
        
        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="flex-1 relative">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t?.newsletter?.placeholder || "E-posta adresiniz"} 
                disabled={status === 'loading' || status === 'success'}
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:bg-white/20 transition-colors backdrop-blur-sm disabled:opacity-50"
              />
              {status === 'success' && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400">
                      <CheckCircle2 size={24} />
                  </div>
              )}
          </div>
          <button 
            disabled={status === 'loading' || status === 'success'}
            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[140px]"
          >
            {status === 'loading' ? (
                <div className="w-5 h-5 border-2 border-blue-600/30 border-t-blue-600 rounded-full animate-spin"></div>
            ) : status === 'success' ? (
                t?.newsletter?.success || "Abone Olundu!"
            ) : (
                <>
                    {t?.newsletter?.button || "Abone Ol"}
                    <Send size={18} />
                </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
