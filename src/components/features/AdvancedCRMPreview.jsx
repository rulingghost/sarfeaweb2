import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, Users, CreditCard, Settings, 
  Bell, Search, CheckCircle2,
  Briefcase, MessageSquare, Ticket, ChevronRight, Clock, MoreHorizontal, Phone, Mail, Video, Mic, Smartphone,
  X, Check
} from 'lucide-react';

export const AdvancedCRMPreview = ({ t }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeTicket, setActiveTicket] = useState(1);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [notification, setNotification] = useState(null);

  // Simulate an incoming notification after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification({
        id: Date.now(),
        user: "Atlas Holding",
        msg: "Yeni revize dosyaları yüklendi.",
        icon: <Briefcase size={12}/>
      });
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-[500px] bg-[#0f172a] flex overflow-hidden select-none font-sans text-xs shadow-2xl relative rounded-[1.5rem] border border-slate-800 ring-1 ring-slate-800/50">
       {/* Ambient Glows */}
       <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
       <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Internal Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute top-4 right-4 z-[100] bg-[#1e293b] border border-blue-500/30 p-3 rounded-xl shadow-2xl flex items-center gap-3 w-64 backdrop-blur-xl"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              {notification.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-slate-100 font-bold text-[10px] truncate">{notification.user}</div>
              <div className="text-slate-500 text-[9px] truncate">{notification.msg}</div>
            </div>
            <button onClick={() => setNotification(null)} className="text-slate-600 hover:text-white transition-colors">
              <X size={14}/>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Collapsed Sidebar */}
      <div className="w-20 hidden md:flex flex-col items-center py-6 border-r border-slate-800/50 bg-[#0f172a]/95 backdrop-blur-xl relative z-20">
         <motion.div 
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 mb-8 shrink-0 cursor-pointer overflow-hidden p-1.5"
         >
           <img src="/logo.png" alt="S" className="w-full h-full object-contain brightness-0 invert" />
         </motion.div>
         
         <div className="flex flex-col gap-6 w-full px-3">
            <SideItem 
                icon={<LayoutDashboard size={20}/>} 
                active={activeTab === 'dashboard'} 
                onClick={() => setActiveTab('dashboard')} 
                tooltip="Genel Bakış"
            />
            <SideItem 
                icon={<Briefcase size={20}/>} 
                active={activeTab === 'projects'} 
                onClick={() => setActiveTab('projects')}
                tooltip="Projeler"
                badge="12" 
            />
            <SideItem 
                icon={<Users size={20}/>} 
                active={activeTab === 'customers'} 
                onClick={() => setActiveTab('customers')} 
                tooltip="Müşteriler"
            />
            <SideItem 
                icon={<MessageSquare size={20}/>} 
                active={activeTab === 'support'} 
                onClick={() => setActiveTab('support')}
                tooltip="İletişim"
                badge="5"
                badgeColor="emerald"
            />
         </div>
         
         <div className="mt-auto flex flex-col gap-4 pb-2">
             <SideItem icon={<Settings size={20}/>} tooltip="Ayarlar" />
             <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-600 flex items-center justify-center text-white text-[10px] font-bold ring-2 ring-[#0f172a] cursor-pointer hover:ring-indigo-500/50 transition-all relative">
                MK
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#0f172a]"></span>
             </div>
         </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col bg-[#0b1120] relative z-10 overflow-hidden">
        {/* Top Navigation */}
        <div className="h-16 border-b border-slate-800/50 flex items-center justify-between px-6 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-30">
           <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                  <h2 className="text-slate-100 font-bold text-sm tracking-tight">
                      {activeTab === 'dashboard' && 'Yönetim Paneli'}
                      {activeTab === 'projects' && 'Proje Yönetimi'}
                      {activeTab === 'customers' && 'Mişteri Listesi'}
                      {activeTab === 'support' && 'İletişim Merkezi'}
                  </h2>
                  {activeTab === 'dashboard' && (
                      <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                          </span>
                          <span className="text-[9px] font-bold text-emerald-500">Canlı</span>
                      </span>
                  )}
              </div>
              <div className="flex items-center gap-1 text-[10px] text-slate-500">
                  <span>Sarfea Suite</span>
                  <span className="text-slate-700">/</span>
                  <span className="text-blue-400">v2.4 Enterprise</span>
              </div>
           </div>
           
           <div className="flex items-center gap-4">
               <div className={`hidden lg:flex items-center bg-slate-800/50 rounded-lg px-3 py-1.5 border transition-all duration-300 ${isSearchFocused ? 'w-64 border-blue-500 shadow-blue-500/10 bg-slate-800 shadow-lg' : 'w-48 border-slate-700/50 hover:border-slate-600/80'}`}>
                  <Search size={14} className={`${isSearchFocused ? 'text-blue-400' : 'text-slate-500'} mr-2 transition-colors`}/>
                  <input 
                    type="text" 
                    placeholder="Ara (Cmd+K)..." 
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className="bg-transparent border-none outline-none text-slate-300 placeholder:text-slate-600 text-[10px] w-full"
                  />
               </div>
               <div className="h-6 w-[1px] bg-slate-800/50 hidden md:block"></div>
               <button className="relative p-1.5 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white group">
                  <Bell size={18}/>
                  <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-[#0f172a] group-hover:scale-110 transition-transform"></span>
               </button>
           </div>
        </div>

        {/* Dynamic Views */}
        <div className="flex-1 overflow-y-auto p-6 scroll-smooth no-scrollbar">
            <AnimatePresence mode="wait">
                {activeTab === 'dashboard' && <DashboardView key="dashboard" />}
                {activeTab === 'projects' && <ProjectsView key="projects" />}
                {activeTab === 'customers' && <CustomersView key="customers" />}
                {activeTab === 'support' && <SupportView key="support" activeTicket={activeTicket} setActiveTicket={setActiveTicket} />}
            </AnimatePresence>
        </div>
      </div>
      
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes waveform {
          0%, 100% { height: 10px; }
          50% { height: 20px; }
        }
        .waveform-bar { animation: waveform 1s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

/* --- Views --- */

const DashboardView = () => (
    <motion.div 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
        className="flex flex-col gap-6"
    >
       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
           <KPICard title="Toplam Ciro" value="₺485.2K" trend="+%18" color="indigo" icon={<CreditCard size={18}/>} progress={85} />
           <KPICard title="Aktif Müşteri" value="142" trend="+12" color="blue" icon={<Users size={18}/>} progress={92} />
           <KPICard title="Projeler" value="48" trend="Aktif" color="emerald" icon={<Briefcase size={18}/>} progress={60} />
           <KPICard title="Anlık Görüşme" value="8" trend="Canlı" color="emerald" icon={<Video size={18}/>} progress={100} pulse />
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
          <div className="lg:col-span-2 space-y-4">
             <div className="bg-[#1e293b]/50 p-5 rounded-2xl border border-slate-800/50 hover:border-slate-700/50 transition-colors shadow-sm">
                 <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-slate-100 font-bold text-xs">Gelir Analizi</h3>
                        <p className="text-slate-500 text-[10px]">İletişim trafiği ile artan satışlar</p>
                    </div>
                    <div className="flex gap-2">
                        {[45, 50, 65, 60, 80, 50, 70, 85, 75, 95, 90, 100].map((h, i) => (
                            <div key={i} className="group/bar relative w-2 md:w-3 bg-slate-800/50 rounded-sm h-16 flex items-end overflow-hidden cursor-pointer">
                                <motion.div initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.05 }}
                                  className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-sm group-hover/bar:from-blue-500 group-hover/bar:to-blue-300 transition-all" />
                            </div>
                        ))}
                    </div>
                 </div>
                 <div className="space-y-2 pt-3 border-t border-slate-800/50">
                     <DealRow client="Ataköy Hold." project="Kurumsal ERP" amount="₺120K" status="İmzalandı" />
                     <DealRow client="LogiTech A.Ş." project="Filo Takip" amount="₺85K" status="Görüşülüyor" />
                     <DealRow client="Vega Perakende" project="B2B E-Ticaret" amount="₺45K" status="Teklifte" />
                 </div>
             </div>
          </div>

          <div className="bg-[#1e293b]/50 p-5 rounded-2xl border border-slate-800/50 h-full flex flex-col hover:border-slate-700/50 transition-colors shadow-sm">
              <div className="flex justify-between items-center mb-4">
                  <h3 className="text-slate-100 font-bold text-xs">Son İletişimler</h3>
                  <MoreHorizontal size={14} className="text-slate-500 cursor-pointer hover:text-white transition-colors"/>
              </div>
              <div className="space-y-4 relative pl-3.5 before:absolute before:left-[6px] before:top-1.5 before:bottom-1.5 before:w-[1px] before:bg-slate-800">
                  <ActivityItem user="Ahmet Y." action="Görüntülü Görüşme" target="TechSol CEO" time="Şimdi" color="emerald" icon={<Video size={10}/>} />
                  <ActivityItem user="Selin K." action="Telefon Araması" target="Global Logistics" time="5dk" color="blue" icon={<Phone size={10}/>} />
                  <ActivityItem user="Mert M." action="E-posta Yanıtı" target="Finans Corp" time="12dk" color="orange" icon={<Mail size={10}/>} />
                  <ActivityItem user="Can B." action="Toplantı Notu" target="Creative Std" time="25dk" color="purple" icon={<Briefcase size={10}/>} />
                  <ActivityItem user="Zeynep A." action="Mobil Bildirim" target="Omega Retail" time="1sa" color="blue" icon={<Smartphone size={10}/>} />
              </div>
          </div>
       </div>
    </motion.div>
);

const ProjectsView = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4">
         <div className="flex justify-between items-center">
             <div className="flex gap-2">
                 <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Aktif Projeler (12)</span>
             </div>
             <button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all flex items-center gap-1.5 shadow-lg shadow-blue-500/20 active:scale-95">
                 <Briefcase size={12}/> Yeni Proje
             </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProjectCard name="Atlas ERP v2" client="Atlas Holding" progress={75} deadline="15 Oca" status="Prod" team={['MK', 'CY', 'AA']} />
            <ProjectCard name="Finans Mobil" client="Kripto A.Ş." progress={35} deadline="22 Şub" status="Dev" team={['SB', 'TR']} />
            <ProjectCard name="Lojistik AI" client="Kargo Plus" progress={90} deadline="30 Ara" status="Test" team={['MK']} />
            <ProjectCard name="E-Ticaret" client="Moda Life" progress={15} deadline="10 Mar" status="Plan" team={['ZA', 'BB', 'CC']} />
            <ProjectCard name="HR Portal" client="Human Inc." progress={55} deadline="05 May" status="Dev" team={['AA', 'MK']} />
            <ProjectCard name="Smart City" client="Belediye" progress={10} deadline="20 Haz" status="Plan" team={['TR']} />
         </div>
    </motion.div>
);

const CustomersView = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-[#1e293b]/50 rounded-2xl border border-slate-800/50 overflow-hidden hover:border-slate-700/50 transition-colors shadow-sm">
        <table className="w-full text-left">
            <thead className="bg-slate-900/50 text-slate-500 font-bold uppercase text-[9px]">
                <tr>
                    <th className="px-5 py-3">Müşteri</th>
                    <th className="px-5 py-3">Sektör</th>
                    <th className="px-5 py-3">İletişim</th>
                    <th className="px-5 py-3">Durum</th>
                    <th className="px-5 py-3 text-right">#</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
                <CustomerRow name="TechSolutions" email="info@tech.com" sector="Yazılım" status="Active" activity="Şimdi" />
                <CustomerRow name="Global Logistics" email="ops@log.com" sector="Lojistik" status="Active" activity="5dk önce" />
                <CustomerRow name="Creative Studio" email="hi@create.co" sector="Medya" status="Active" activity="10dk önce" />
                <CustomerRow name="Finans Corp" email="finance@corp.com" sector="Finans" status="Active" activity="20dk önce" />
                <CustomerRow name="Delta Group" email="contact@delta.net" sector="İnşaat" status="Active" activity="1s önce" />
                <CustomerRow name="Omega Retail" email="sales@omega.com" sector="E-Ticaret" status="Active" activity="1s önce" />
                <CustomerRow name="Alpha Const." email="build@alpha.com" sector="Mimarlık" status="Active" activity="2s önce" />
                <CustomerRow name="Beta Energy" email="nrg@beta.com" sector="Enerji" status="Active" activity="1g önce" />
            </tbody>
        </table>
    </motion.div>
);

const SupportView = ({ activeTicket, setActiveTicket }) => {
    const tickets = [
        { id: 1, title: "Mert K. (CTO)", desc: "API Entegrasyonu hk.", time: "Şimdi", status: "Görüşülüyor", color: "emerald", type: "call", avatar: "Mert" },
        { id: 2, title: "Selin Y. (Ops)", desc: "Dosya bekliyor", time: "2dk", status: "Beklemede", color: "blue", type: "mail", avatar: "Selin" },
        { id: 3, title: "Can T. (Dev)", desc: "Migration onayı", time: "5dk", status: "Chat", color: "purple", type: "chat", avatar: "Can" },
        { id: 4, title: "Ahmet A. (Mob)", desc: "Log dosyaları", time: "12dk", status: "Chat", color: "purple", type: "chat", avatar: "Ahmet" }
    ];

    const currentTicket = tickets.find(t => t.id === activeTicket) || tickets[0];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4 h-full">
            <div className="w-5/12 flex flex-col gap-3 pr-1 overflow-y-auto no-scrollbar">
                {tickets.map(t => (
                    <TicketItem 
                        key={t.id}
                        {...t} 
                        active={activeTicket === t.id} 
                        onClick={() => setActiveTicket(t.id)} 
                    />
                ))}
            </div>
            <div className="w-7/12 bg-[#1e293b]/30 rounded-xl border border-slate-800/50 px-6 py-8 flex items-center justify-center flex-col text-slate-500 relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-32 flex items-end justify-center gap-1 opacity-20 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div 
                            key={i}
                            animate={currentTicket.type === 'call' ? { height: [10, Math.random() * 60 + 20, 10] } : { height: 5 }}
                            transition={{ repeat: Infinity, duration: 0.5 + Math.random() * 0.5 }}
                            className={`w-1.5 ${currentTicket.color === 'emerald' ? 'bg-emerald-500' : 'bg-blue-500'} rounded-t-sm`}
                        />
                    ))}
                </div>
                
                <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center mb-4 relative z-10 ring-4 ring-slate-800 shadow-2xl">
                    <div className={`absolute inset-0 rounded-full border-2 ${currentTicket.type === 'call' ? 'border-emerald-500/30 animate-[ping_2s_linear_infinite]' : 'border-blue-500/10'}`}></div>
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${currentTicket.avatar}`} alt="Avatar" className="w-full h-full rounded-full opacity-90" />
                    <div className={`absolute bottom-0 right-0 w-6 h-6 ${currentTicket.color === 'emerald' ? 'bg-emerald-500' : 'bg-blue-500'} rounded-full border-2 border-slate-800 flex items-center justify-center text-white`}>
                        {currentTicket.type === 'call' ? <Mic size={12} /> : currentTicket.type === 'chat' ? <MessageSquare size={12}/> : <Mail size={12}/>}
                    </div>
                </div>
                <h4 className="text-slate-100 font-bold text-sm mb-1 relative z-10">{currentTicket.title}</h4>
                <p className={`text-[10px] text-center max-w-[180px] font-medium relative z-10 mb-6 ${currentTicket.type === 'call' ? 'text-emerald-400' : 'text-blue-400'}`}>
                    {currentTicket.type === 'call' ? 'Ses Bağlantısı Aktif • 04:12' : currentTicket.type === 'chat' ? 'Yazıyor...' : 'E-posta Bekleniyor'}
                </p>
                
                <div className="flex gap-4 relative z-10">
                    {currentTicket.type === 'call' ? (
                        <>
                            <button className="w-10 h-10 rounded-full bg-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center border border-red-500/30 shadow-lg shadow-red-500/10"><Phone size={18} className="rotate-[135deg]"/></button>
                            <button className="w-10 h-10 rounded-full bg-slate-700/50 text-slate-300 hover:bg-slate-600 transition-all flex items-center justify-center"><Video size={18}/></button>
                            <button className="w-10 h-10 rounded-full bg-slate-700/50 text-slate-300 hover:bg-slate-600 transition-all flex items-center justify-center"><Mic size={18}/></button>
                        </>
                    ) : (
                        <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-bold text-[10px] hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2">
                             <Check size={14}/> Yanıtla
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

/* --- Components --- */

const SideItem = ({ icon, active, onClick, tooltip, badge, badgeColor = 'blue' }) => (
    <div 
      onClick={onClick}
      className={`w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200 group relative ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'text-slate-500 hover:bg-slate-800 hover:text-indigo-400'}`}
    >
        {icon}
        {badge && (
            <span className={`absolute -top-1 -right-1 text-[9px] min-w-[16px] h-[16px] flex items-center justify-center rounded-full text-white font-bold bg-${badgeColor}-500 border-2 border-[#0f172a] shadow-sm`}>{badge}</span>
        )}
        <div className="absolute left-12 bg-slate-800 text-slate-200 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap border border-slate-700/50 shadow-xl transition-opacity z-50 font-medium">
            {tooltip}
        </div>
    </div>
);

const KPICard = ({ title, value, trend, color, icon, progress, pulse }) => (
    <div className="bg-[#1e293b]/50 p-4 rounded-xl border border-slate-800/50 hover:border-slate-700 transition-colors group flex flex-col justify-between h-24 cursor-pointer hover:bg-[#1e293b]/80 relative overflow-hidden">
        <div className="flex justify-between items-start relative z-10">
             <div className={`p-2 rounded-lg bg-${color}-500/10 text-${color}-400 group-hover:scale-110 transition-transform`}>{icon}</div>
             <div className={`px-1.5 py-0.5 rounded text-[9px] font-bold bg-${color}-500/10 text-${color}-400 flex items-center gap-1`}>
                {pulse && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>}
                {trend}
             </div>
        </div>
        <div className="relative z-10">
            <div className="text-slate-500 text-[10px] font-bold truncate mb-0.5">{title}</div>
            <div className="text-lg font-bold text-slate-100 tracking-tight truncate">{value}</div>
        </div>
        {progress && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-800/50">
                <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} className={`h-full bg-${color}-500`} transition={{ duration: 1 }} />
            </div>
        )}
    </div>
);

const DealRow = ({ client, project, amount, status }) => (
    <div className="flex items-center justify-between p-2 hover:bg-slate-800/50 rounded-lg transition-colors cursor-pointer group">
        <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center font-bold text-[10px] text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {client.charAt(0)}
            </div>
            <div className="min-w-0">
                <div className="text-slate-200 font-bold text-[11px] truncate">{client}</div>
                <div className="text-slate-500 text-[9px] truncate">{project}</div>
            </div>
        </div>
        <div className="text-right shrink-0 ml-2">
             <div className="text-slate-200 font-bold text-[11px]">{amount}</div>
        </div>
    </div>
);

const ActivityItem = ({ user, action, target, time, color, icon }) => (
    <div className="flex gap-3 relative z-10 group cursor-default">
        <div className={`w-5 h-5 rounded-full mt-0.5 shrink-0 bg-${color}-500/10 text-${color}-400 flex items-center justify-center border border-${color}-500/20 group-hover:scale-110 transition-transform`}>
            {icon}
        </div>
        <div className="min-w-0">
             <div className="flex items-center gap-1.5">
                 <span className="text-slate-200 font-bold text-[11px] truncate">{user}</span>
                 <span className="text-slate-500 text-[9px]">{time}</span>
             </div>
             <div className="text-slate-400 text-[10px] truncate">
                <span className={`text-${color}-400 font-medium`}>{action}</span>: {target}
             </div>
        </div>
    </div>
);

const ProjectCard = ({ name, client, progress, deadline, status, team }) => (
    <div className="bg-[#1e293b]/50 p-4 rounded-xl border border-slate-800/50 hover:border-blue-500/30 hover:bg-[#1e293b]/80 transition-all cursor-pointer group relative overflow-hidden shadow-sm">
        <div className="flex justify-between items-start mb-2 relative z-10">
             <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-xs group-hover:rotate-6 transition-transform">
                 {client.charAt(0)}
             </div>
             <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${status === 'Prod' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-blue-500/10 text-blue-400'}`}>{status}</span>
        </div>
        <h4 className="relative z-10 text-slate-100 font-bold text-xs mb-0.5 truncate group-hover:text-blue-400 transition-colors uppercase tracking-tight">{name}</h4>
        <p className="relative z-10 text-slate-500 text-[10px] mb-3 truncate">{client}</p>
        
        <div className="relative z-10 w-full bg-slate-800 h-1 rounded-full overflow-hidden mb-3">
             <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} className="bg-blue-500 h-full rounded-full" transition={{ duration: 1, delay: 0.2 }} />
        </div>
        
        <div className="relative z-10 flex items-center justify-between">
             <div className="flex -space-x-1.5">
                 {team.map((initials, i) => (
                     <div key={i} className="w-4 h-4 rounded-full bg-slate-700 border border-[#1e293b] flex items-center justify-center text-[8px] text-white font-bold transition-transform hover:-translate-y-1" title="Team Member">
                         {initials}
                     </div>
                 ))}
             </div>
             <span className="text-[9px] text-slate-500 flex items-center gap-1"><Clock size={10}/> {deadline}</span>
        </div>
    </div>
);

const CustomerRow = ({ name, email, sector, status, activity }) => (
    <tr className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-l-2 border-transparent hover:border-blue-500">
        <td className="px-5 py-3">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-[10px]">
                    {name.charAt(0)}
                </div>
                <div className="min-w-0 max-w-[100px] lg:max-w-none">
                    <div className="text-slate-200 font-bold text-[10px] truncate group-hover:text-blue-400 transition-colors">{name}</div>
                    <div className="text-slate-500 text-[9px] truncate">{email}</div>
                </div>
            </div>
        </td>
        <td className="px-5 py-3 text-slate-400 text-[10px] font-medium">{sector}</td>
        <td className="px-5 py-3">
             <div className="flex items-center gap-1.5 text-[9px] text-slate-400">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                 {activity}
             </div>
        </td>
        <td className="px-5 py-3">
            <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold flex w-fit items-center gap-1 ${status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-700/50 text-slate-400'}`}>
                {status}
            </span>
        </td>
        <td className="px-5 py-3 text-right">
            <ChevronRight size={14} className="text-slate-600 inline-block group-hover:text-white transition-colors"/>
        </td>
    </tr>
);

const TicketItem = ({ title, desc, time, status, color, active, onClick }) => (
    <div 
        onClick={onClick}
        className={`p-3 rounded-xl border mb-2 cursor-pointer transition-all duration-300 ${active ? 'bg-blue-600/10 border-blue-500/40 shadow-lg shadow-blue-500/5' : 'bg-[#1e293b]/50 border-slate-800/50 hover:border-slate-700'}`}
    >
         <div className="flex justify-between mb-1">
             <span className={`text-${color}-400 text-[9px] font-bold`}>{status}</span>
             <span className="text-slate-500 text-[9px]">{time}</span>
         </div>
         <h4 className={`font-bold text-xs mb-0.5 truncate transition-colors ${active ? 'text-blue-400' : 'text-slate-200'}`}>{title}</h4>
         <p className="text-slate-500 text-[10px] truncate">{desc}</p>
    </div>
);
