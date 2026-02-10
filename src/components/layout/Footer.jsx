import React from 'react';
import { ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';

export const Footer = ({ t, setActivePage }) => {
  return (
    <footer className="bg-slate-950 text-white py-20 relative overflow-hidden">
      {/* ... background elements ... */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-900 via-blue-900/50 to-slate-900"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setActivePage('home')}>
              <img src="/logo.png" alt="SARFEA Logo" className="h-14 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-all hover:scale-110" />
              <span className="text-2xl font-black tracking-tighter">SARFEA<span className="text-blue-500">.</span></span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed font-medium">
              {t.footer.slogan}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2"><ChevronRight size={18} className="text-blue-500"/> {t.footer.sitemap}</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              {NAV_ITEMS.filter(item => item.id !== 'contact').map((item) => (
                <li key={item.id}>
                  <button onClick={() => setActivePage(item.id)} className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> 
                    {t.navbar[item.labelKey]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2"><ChevronRight size={18} className="text-blue-500"/> {t.footer.corporate}</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><button className="hover:text-blue-400 transition-colors">{t.footer.privacy}</button></li>
              <li><button className="hover:text-blue-400 transition-colors">{t.footer.terms}</button></li>
              <li><button className="hover:text-blue-400 transition-colors">{t.footer.kvkk}</button></li>
              <li><button className="hover:text-blue-400 transition-colors">{t.footer.careers}</button></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-medium">
          <p>{t.footer.rights}</p>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all group"><span className="font-bold">In</span></button>
            <button className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all group"><span className="font-bold">Tw</span></button>
            <button className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all group"><span className="font-bold">Ig</span></button>
          </div>
        </div>
      </div>
    </footer>
  );
};
