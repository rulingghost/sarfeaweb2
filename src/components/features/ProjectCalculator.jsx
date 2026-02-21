import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, TrendingUp, Zap, MessageSquare, Users, Smartphone, GitBranch, Cpu, ShieldCheck, 
  Calculator, X, CheckCircle2, ArrowRight, ArrowLeft, Send, Trash2, Info
} from 'lucide-react';

export const ProjectCalculator = ({ isOpen, onClose, onShowToast, t }) => {
  const [selections, setSelections] = useState([]);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const staticOptions = [
    { id: 'design', icon: Palette, color: 'pink' },
    { id: 'seo', icon: TrendingUp, color: 'blue' },
    { id: 'automation', icon: Zap, color: 'orange' },
    { id: 'chatbot', icon: MessageSquare, color: 'purple' },
    { id: 'software', icon: Users, color: 'emerald' },
    { id: 'mobile', icon: Smartphone, color: 'indigo' },
    { id: 'integration', icon: GitBranch, color: 'cyan' },
    { id: 'ai', icon: Cpu, color: 'violet' },
    { id: 'security', icon: ShieldCheck, color: 'slate' },
  ];

  const options = staticOptions.map((opt, i) => ({
      ...opt,
      label: t.calculator.options?.[i]?.label || "Opsiyon",
      category: t.calculator.options?.[i]?.category || "Kategori"
  }));

  const toggleSelection = (option) => {
    if (selections.find(s => s.id === option.id)) {
      setSelections(selections.filter(s => s.id !== option.id));
    } else {
      setSelections([...selections, option]);
    }
  };

  const handleCalculatorSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const contactData = Object.fromEntries(formData.entries());
    const selectedModulesList = selections.map(s => s.label).join(", ");
    
    const payload = {
        ...contactData,
        projectType: "Kapsam Belirleyici Teklifi",
        message: `Kullanıcının Seçtiği Modüller: ${selectedModulesList} --- Not: ${contactData.note || "Yok"}`
    };

    try {
      const response = await fetch("https://formspree.io/f/mvgnzank", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        if (onShowToast) onShowToast(t.calculator.success);
        onClose();
        setTimeout(() => {
            setStep(1);
            setSelections([]);
        }, 500);
      } else {
        const errorData = await response.json();
        alert(errorData.error || t.calculator.error);
      }
    } catch {
      alert("Bağlantı hatası.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        className="bg-white dark:bg-[#0b1120] w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-8 border-b border-slate-100 dark:border-slate-800/50 flex justify-between items-center bg-slate-50 dark:bg-slate-900/50 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="p-2 bg-blue-600 rounded-lg text-white shadow-lg shadow-blue-500/30">
                <Calculator size={18} />
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                {step === 1 ? t.calculator.step1_title : t.calculator.step2_title}
              </h3>
            </div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-9">
              {step === 1 ? t.calculator.step1_desc : t.calculator.step2_desc}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {step === 1 && selections.length > 0 && (
              <button 
                onClick={() => setSelections([])}
                className="p-2 text-slate-400 hover:text-red-500 transition-colors flex items-center gap-1.5"
                title="Temizle"
              >
                <Trash2 size={18} />
              </button>
            )}
            <button onClick={onClose} className="p-2.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-all text-slate-400 hover:text-slate-900 dark:hover:text-white border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
              <X size={20} />
            </button>
          </div>
        </div>
        
        {/* Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8">
            {step === 1 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {options.map((option) => {
                        const isSelected = selections.find(s => s.id === option.id);
                        return (
                            <motion.div 
                                key={option.id}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => toggleSelection(option)}
                                className={`group flex items-center justify-between p-4 md:p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                                    isSelected 
                                    ? `border-blue-500 bg-blue-50/50 dark:bg-blue-900/20` 
                                    : 'border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 bg-slate-50/30 dark:bg-slate-900/30'
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                                        isSelected 
                                        ? `bg-blue-600 text-white shadow-lg shadow-blue-500/40` 
                                        : `bg-white dark:bg-slate-800 text-slate-400 group-hover:text-blue-500 group-hover:bg-white dark:group-hover:bg-slate-700 shadow-sm`
                                    }`}>
                                        <option.icon size={22} strokeWidth={isSelected ? 2.5 : 2} />
                                    </div>
                                    <div>
                                        <p className={`font-black tracking-tight text-sm md:text-base ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-200'}`}>
                                            {option.label}
                                        </p>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mt-0.5">
                                            {option.category}
                                        </p>
                                    </div>
                                </div>
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                                    isSelected 
                                    ? 'bg-blue-600 border-blue-600 text-white' 
                                    : 'border-slate-200 dark:border-slate-700 bg-transparent'
                                }`}>
                                    {isSelected && <CheckCircle2 size={16} />}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            ) : (
                <form id="calculator-form" onSubmit={handleCalculatorSubmit} className="space-y-6">
                    <div className="p-6 bg-blue-50/50 dark:bg-blue-900/10 rounded-[2rem] border border-blue-100 dark:border-blue-800/30">
                        <div className="flex items-center gap-2 mb-4">
                            <Info size={16} className="text-blue-600" />
                            <h4 className="font-black text-blue-900 dark:text-blue-400 text-[11px] uppercase tracking-widest">{t.calculator.selected_scope}</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {selections.map((s, i) => (
                                <span key={i} className="text-[11px] px-3 py-1.5 bg-white dark:bg-slate-800 rounded-full border border-blue-200 dark:border-blue-800/50 text-slate-700 dark:text-slate-300 font-bold shadow-sm">
                                    {s.label}
                                </span>
                            ))}
                            {selections.length === 0 && <span className="text-xs text-slate-500 italic">{t.calculator.no_module}</span>}
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">{t.calculator.name}</label>
                            <input required name="name" type="text" className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 outline-none transition-all font-bold text-slate-900 dark:text-white shadow-sm" placeholder={t.calculator.name} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">{t.calculator.email}</label>
                            <input required name="email" type="email" className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 outline-none transition-all font-bold text-slate-900 dark:text-white shadow-sm" placeholder="mail@ornek.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">{t.calculator.phone}</label>
                            <input name="phone" type="tel" className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 outline-none transition-all font-bold text-slate-900 dark:text-white shadow-sm" placeholder="0555..." />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Tercih Edilen Platform</label>
                            <select name="platform" className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 outline-none transition-all font-bold text-slate-900 dark:text-white shadow-sm appearance-none cursor-pointer">
                                <option className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">Web + Mobil</option>
                                <option className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">Sadece Web</option>
                                <option className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">Sadece Mobil</option>
                                <option className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">Masaüstü / Diğer</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">{t.calculator.notes}</label>
                        <textarea name="note" rows="3" className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 outline-none transition-all font-bold text-slate-900 dark:text-white shadow-sm resize-none" placeholder={t.calculator.notes_ph}></textarea>
                    </div>
                </form>
            )}
        </div>

        {/* Footer */}
        <div className="p-8 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shrink-0">
          {step === 1 ? (
             <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex items-center gap-3">
                    <div className="text-3xl font-black text-blue-600 dark:text-blue-400">{selections.length}</div>
                    <div className="text-[11px] leading-tight font-black uppercase tracking-widest text-slate-400">
                        {t.calculator.selected_count.split(' ')[0]} <br/> {t.calculator.pieces}
                    </div>
                </div>
                <button 
                    onClick={() => setStep(2)}
                    disabled={selections.length === 0}
                    className="flex-1 w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-slate-300 disabled:to-slate-400 dark:disabled:from-slate-700 dark:disabled:to-slate-800 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-500/30 disabled:shadow-none flex items-center justify-center gap-3 group relative overflow-hidden"
                >
                    {t.calculator.continue} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                </button>
             </div>
          ) : (
             <div className="flex gap-4">
                 <button 
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-black rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all active:scale-[0.95]"
                 >
                    <ArrowLeft size={24} />
                 </button>
                 <button 
                    type="submit"
                    form="calculator-form"
                    disabled={isSubmitting}
                    className="flex-1 py-5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-500/30 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                    {isSubmitting ? (
                        <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                        <>
                           {t.calculator.submit} <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                    )}
                </button>
             </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
