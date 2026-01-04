import React from 'react';
import { Globe, Database, Cloud, ShieldCheck } from 'lucide-react';

export const LogoMarquee = () => (
  <div className="w-full overflow-hidden opacity-70 grayscale-[30%] hover:grayscale-0 transition-all duration-700 py-6">
    <div className="flex justify-between items-center gap-16 md:gap-32 animate-pulse flex-wrap justify-center">
       <div className="text-2xl font-black text-slate-400 hover:text-[#4285F4] transition-colors flex items-center gap-2 filter drop-shadow-sm hover:scale-110 duration-300 cursor-pointer"><Globe size={24}/> GLOBAL TECH</div>
       <div className="text-2xl font-black text-slate-400 hover:text-[#00A4EF] transition-colors flex items-center gap-2 filter drop-shadow-sm hover:scale-110 duration-300 cursor-pointer"><Database size={24}/> DATA SYSTEMS</div>
       <div className="text-2xl font-black text-slate-400 hover:text-[#FF9900] transition-colors flex items-center gap-2 filter drop-shadow-sm hover:scale-110 duration-300 cursor-pointer"><Cloud size={24}/> CLOUD CORP</div>
       <div className="text-2xl font-black text-slate-400 hover:text-[#1DB954] transition-colors flex items-center gap-2 filter drop-shadow-sm hover:scale-110 duration-300 cursor-pointer"><ShieldCheck size={24}/> SECURE NET</div>
    </div>
  </div>
);
