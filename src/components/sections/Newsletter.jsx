import React from 'react';

export const Newsletter = ({ t }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-900/20"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t?.newsletter?.title || "Teknoloji Bültenimize Abone Olun"}</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">{t?.newsletter?.text || "En yeni teknoloji trendleri, yazılım dünyasından haberler ve Sarfea'dan güncellemeler için bültenimize katılın."}</p>
        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder={t?.newsletter?.placeholder || "E-posta adresiniz"} 
            className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:bg-white/20 transition-colors backdrop-blur-sm"
          />
          <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
            {t?.newsletter?.button || "Abone Ol"}
          </button>
        </form>
      </div>
    </section>
  );
};
