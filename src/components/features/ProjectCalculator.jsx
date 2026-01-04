import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Laptop, Smartphone, Users, Boxes, GitBranch, CreditCard, Cpu, Wifi, ShieldCheck, 
  Calculator, X, CheckCircle2, ArrowRight, ArrowLeft, Send 
} from 'lucide-react';

export const ProjectCalculator = ({ isOpen, onClose, onShowToast, t }) => {
  const [selections, setSelections] = useState([]);
  const [step, setStep] = useState(1); // 1: Seçim, 2: İletişim Formu
  const [isSubmitting, setIsSubmitting] = useState(false);

  const staticOptions = [
    { id: 'web', icon: Laptop, color: 'blue' },
    { id: 'mobile', icon: Smartphone, color: 'purple' },
    { id: 'crm', icon: Users, color: 'green' },
    { id: 'erp', icon: Boxes, color: 'orange' },
    { id: 'api', icon: GitBranch, color: 'cyan' },
    { id: 'payment', icon: CreditCard, color: 'red' },
    { id: 'ai', icon: Cpu, color: 'indigo' },
    { id: 'iot', icon: Wifi, color: 'teal' },
    { id: 'sec', icon: ShieldCheck, color: 'slate' },
  ];

  const options = staticOptions.map((opt, i) => ({
      ...opt,
      label: t.calculator.options[i].label,
      category: t.calculator.options[i].category
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
    
    // Seçilen modülleri string formatına çevir
    const selectedModulesList = selections.map(s => s.label).join(", ");
    
    // Gönderilecek veriyi hazırla
    const payload = {
        ...contactData,
        projectType: "Kapsam Belirleyici Teklifi",
        message: `Kullanıcının Seçtiği Modüller: ${selectedModulesList} --- Not: ${contactData.note || "Yok"}`
    };

    try {
      const response = await fetch("https://formspree.io/f/mvgnzank", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        if (onShowToast) onShowToast(t.calculator.success);
        onClose();
        // Reset states after close
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
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50 flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50 shrink-0">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Calculator className="text-blue-600 dark:text-blue-400" /> 
              {step === 1 ? t.calculator.step1_title : t.calculator.step2_title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {step === 1 ? t.calculator.step1_desc : t.calculator.step2_desc}
            </p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors text-slate-500">
            <X size={20} />
          </button>
        </div>
        
        {/* Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
            {step === 1 ? (
                <div className="grid md:grid-cols-2 gap-3">
                    {options.map((option) => {
                    const isSelected = selections.find(s => s.id === option.id);
                    return (
                        <div 
                        key={option.id}
                        onClick={() => toggleSelection(option)}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${isSelected ? `border-${option.color}-500 bg-${option.color}-50 dark:bg-${option.color}-900/20` : 'border-slate-100 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700'}`}
                        >
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${isSelected ? `bg-${option.color}-500 text-white` : `bg-slate-100 dark:bg-slate-800 text-slate-500`}`}>
                            <option.icon size={18} />
                            </div>
                            <div>
                            <p className="font-bold text-slate-900 dark:text-white text-sm">{option.label}</p>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{option.category}</p>
                            </div>
                        </div>
                        {isSelected && <CheckCircle2 size={18} className={`text-${option.color}-600 dark:text-${option.color}-400`} />}
                        </div>
                    )
                    })}
                </div>
            ) : (
                <form id="calculator-form" onSubmit={handleCalculatorSubmit} className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-4">
                        <h4 className="font-bold text-blue-800 dark:text-blue-300 text-sm mb-2">{t.calculator.selected_scope}</h4>
                        <div className="flex flex-wrap gap-2">
                            {selections.map((s, i) => (
                                <span key={i} className="text-[11px] px-2 py-1 bg-white dark:bg-slate-800 rounded border border-blue-200 dark:border-blue-800 text-slate-600 dark:text-slate-300 font-medium">
                                    {s.label}
                                </span>
                            ))}
                            {selections.length === 0 && <span className="text-xs text-slate-500 italic">{t.calculator.no_module}</span>}
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t.calculator.name}</label>
                        <input required name="name" type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 outline-none" placeholder={t.calculator.name} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t.calculator.email}</label>
                            <input required name="email" type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 outline-none" placeholder="mail@ornek.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t.calculator.phone}</label>
                            <input name="phone" type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 outline-none" placeholder="0555..." />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">{t.calculator.notes}</label>
                        <textarea name="note" rows="2" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 outline-none resize-none" placeholder={t.calculator.notes_ph}></textarea>
                    </div>
                </form>
            )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-50/80 dark:bg-slate-800/80 border-t border-slate-100 dark:border-slate-800 backdrop-blur-sm shrink-0">
          {step === 1 ? (
             <>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-slate-500 dark:text-slate-400 font-medium text-sm">{t.calculator.selected_count}</span>
                    <div className="flex items-center gap-2">
                        <motion.div 
                            key={selections.length}
                            initial={{ scale: 1.5, color: '#3b82f6' }}
                            animate={{ scale: 1, color: 'inherit' }}
                            className="font-bold text-slate-900 dark:text-white"
                        >
                            {selections.length} {t.calculator.pieces}
                        </motion.div>
                    </div>
                </div>
                <button 
                    onClick={() => setStep(2)}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    {t.calculator.continue} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
             </>
          ) : (
             <div className="flex gap-3">
                 <button 
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-4 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                 >
                    <ArrowLeft size={20} />
                 </button>
                 <button 
                    type="submit"
                    form="calculator-form"
                    disabled={isSubmitting}
                    className="flex-1 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                           <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                           {t.calculator.submitting}
                        </>
                    ) : (
                        <>
                           {t.calculator.submit} <Send size={18} />
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
