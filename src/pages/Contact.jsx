import React, { useState } from 'react';
import { 
  MessageSquare, ChevronDown, Send, 
  AlertCircle, Mail, Phone, Globe, Clock, ExternalLink 
} from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Reveal } from '../components/ui/Reveal';

export const Contact = ({ t, language, onShowToast }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', projectType: 'Custom Software / CRM / ERP' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Ad soyad gerekli";
    if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) newErrors.email = "Geçerli bir e-posta girin";
    if (formData.message.length < 10) newErrors.message = "Lütfen biraz daha detay verin (en az 10 karakter)";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mvgnzank", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        if (onShowToast) onShowToast("Proje detaylarınız teknik ekibimize iletildi. En kısa sürede dönüş yapacağız.");
        e.target.reset();
      } else {
        const errorData = await response.json();
        if (onShowToast) onShowToast(errorData.error || "Bir hata oluştu. Lütfen tekrar deneyiniz.");
      }
    } catch {
      if (onShowToast) onShowToast("Bağlantı hatası. Lütfen internetinizi kontrol ediniz.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 md:pt-28 min-h-screen bg-transparent transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <SectionHeader 
          title={t.contact_page.title} 
          subtitle={t.contact_page.subtitle} 
        />

        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-start">
          <Reveal className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-900 p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10 pointer-events-none"></div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6 md:mb-8 flex items-center gap-3">
                  <span className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm"><MessageSquare size={18}/></span>
                  {t.contact_page.form.title}
              </h3>
              <form className="space-y-4 md:space-y-6" onSubmit={handleContactSubmit}>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t.contact_page.form.name}</label>
                    <input 
                      required 
                      name="name" 
                      type="text" 
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 md:py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 ${errors.name ? 'border-red-500' : 'border-slate-100 dark:border-slate-700'} focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-sm md:text-base`} 
                      placeholder={t.contact_page.form.name_ph} 
                    />
                    {errors.name && <p className="text-red-500 text-[10px] ml-1 font-bold">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t.contact_page.form.email}</label>
                    <input 
                      required 
                      name="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 md:py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 ${errors.email ? 'border-red-500' : 'border-slate-100 dark:border-slate-700'} focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-sm md:text-base`} 
                      placeholder={t.contact_page.form.email_ph} 
                    />
                    {errors.email && <p className="text-red-500 text-[10px] ml-1 font-bold">{errors.email}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t.contact_page.form.type}</label>
                  <div className="relative">
                     <select name="projectType" className="w-full px-4 py-3 md:py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all font-medium appearance-none cursor-pointer text-sm md:text-base">
                       {[
                         { tr: "Özel Yazılım / CRM / ERP", en: "Custom Software / CRM / ERP" },
                         { tr: "n8n & İş Akışı Otomasyonu", en: "n8n & Workflow Automation" },
                         { tr: "SEO & Dijital Büyüme", en: "SEO & Digital Growth" },
                         { tr: "Web Tasarımı & UX", en: "Web Design & UX" },
                         { tr: "WhatsApp & Instagram Chatbot", en: "Social Media Chatbot" },
                         { tr: "Mobil Uygulama Geliştirme", en: "Mobile App Development" },
                         { tr: "Yapay Zeka / IoT", en: "AI / IoT" },
                         { tr: "Diğer", en: "Other" }
                       ].map((opt, i) => (
                         <option key={i} value={opt[language] || opt['tr']}>{opt[language] || opt['tr']}</option>
                       ))}
                     </select>
                     <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t.contact_page.form.details}</label>
                  <textarea 
                    required 
                    name="message" 
                    rows="4" 
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 md:py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 ${errors.message ? 'border-red-500' : 'border-slate-100 dark:border-slate-700'} focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-slate-900 outline-none transition-all font-medium resize-none text-sm md:text-base`} 
                    placeholder={t.contact_page.form.details_ph}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-[10px] ml-1 font-bold">{errors.message}</p>}
                </div>
                <button disabled={isSubmitting} type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed text-white py-4 md:py-5 rounded-xl font-bold transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-3 active:scale-[0.98] text-base md:text-lg">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      {t.contact_page.form.submitting}
                    </>
                  ) : (
                    <>
                      <Send size={20} /> {t.contact_page.form.submit}
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>

          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <Reveal delay={200}>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl md:rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group">
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 relative z-10 flex items-center gap-3">
                    <AlertCircle size={22} className="text-blue-200"/> {t.contact_page.info.title}
                </h3>
                <div className="space-y-6 md:space-y-8 relative z-10">
                  <div className="flex items-start gap-4 md:gap-5 group/item">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm shadow-inner-white">
                      <Mail size={20} className="text-blue-100 md:w-6 md:h-6"/>
                    </div>
                    <div>
                      <p className="text-blue-200 text-[10px] md:text-sm font-bold uppercase tracking-wider mb-0.5 md:mb-1">{t.contact_page.info.email}</p>
                      <p className="font-bold text-base md:text-xl">gebcay@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 md:gap-5 group/item">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm shadow-inner-white">
                      <Phone size={20} className="text-blue-100 md:w-6 md:h-6"/>
                    </div>
                    <div>
                      <p className="text-blue-200 text-[10px] md:text-sm font-bold uppercase tracking-wider mb-0.5 md:mb-1">{t.contact_page.info.phone}</p>
                      <p className="font-bold text-base md:text-xl">+90 501 571 57 67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 md:gap-5 group/item">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm shadow-inner-white">
                      <Globe size={20} className="text-blue-100 md:w-6 md:h-6"/>
                    </div>
                    <div>
                      <p className="text-blue-200 text-[10px] md:text-sm font-bold uppercase tracking-wider mb-0.5 md:mb-1">{t.contact_page.info.hq}</p>
                      <p className="font-bold text-sm md:text-lg leading-tight">{t.contact_page.info.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 md:gap-5 group/item">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm shadow-inner-white">
                      <Clock size={20} className="text-blue-100 md:w-6 md:h-6"/>
                    </div>
                    <div>
                      <p className="text-blue-200 text-[10px] md:text-sm font-bold uppercase tracking-wider mb-0.5 md:mb-1">{t.contact_page.info.hours_label}</p>
                      <p className="font-bold text-sm md:text-lg leading-tight">{t.contact_page.info.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="bg-slate-200 dark:bg-slate-800 rounded-3xl md:rounded-[2.5rem] h-64 md:h-96 w-full border-4 border-white dark:border-slate-900 shadow-xl relative overflow-hidden group">
                <iframe 
                  src="https://maps.google.com/maps?q=40.0026993,32.8235635&hl=tr&z=17&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
                <div className="absolute bottom-4 right-4 z-10">
                  <a 
                    href="https://www.google.com/maps/place/Gamador+Meydan/@40.0021238,32.821621,17z/data=!4m6!3m5!1s0x14d34df67a613f7d:0x3848390771d795a6!8m2!3d40.0026993!4d32.8235635" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-3 md:px-4 py-2 rounded-xl font-bold text-xs md:text-sm shadow-lg flex items-center gap-2"
                  >
                    <ExternalLink size={14} /> {t.contact_page.info.directions}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};
