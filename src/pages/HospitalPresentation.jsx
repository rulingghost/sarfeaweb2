import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, MessageSquare, LayoutDashboard, Users, Box, MapPin, 
  Calculator, BarChart3, Brain, Building2, ShieldCheck, Smartphone, Code2, 
  CheckCircle2, Target, Layers, Zap, Video, Fingerprint, CreditCard, PackageSearch, 
  TrendingUp, Wallet, FileText, Globe, Cpu, Award, ArrowRightCircle, ArrowLeftCircle,
  MonitorPlay, X, HeartPulse, Network, Landmark, Laptop, CalendarCheck, Database, Rocket, PieChart
} from 'lucide-react';

import './HospitalPresentation.css';

const slides = [
  {
    id: 1,
    type: 'cover',
    bg: '/hospital/slide1.png',
    tag: 'YAPAY ZEKA DESTEKLİ',
    title: 'Entegre Hastane CRM Sistemi',
    subtitle: 'Entegre • Ölçeklenebilir • Akıllı Sağlık Altyapısı',
    items: [
      { icon: <Building2 size={20} />, text: 'Merkezi Kontrol' },
      { icon: <Database size={20} />, text: 'Tek Altyapı' },
      { icon: <TrendingUp size={20} />, text: 'Gerçek Zamanlı' },
      { icon: <Brain size={20} />, text: 'AI Destekli' },
      { icon: <ShieldCheck size={20} />, text: 'Üst Düzey Güvenlik' }
    ],
    notes: 'Bu sistem, hastanelerin tüm operasyonel, finansal ve yönetsel süreçlerini tek bir merkezden yönetmesini sağlayan, yapay zeka destekli, ölçeklenebilir bir CRM altyapısıdır.'
  },
  {
    id: 2,
    type: 'content',
    bg: '/hospital/slide2.png',
    tag: 'PİYASADAKİ PROBLEM',
    title: 'Parçalı Sistemler, Dağınık Yönetim',
    subtitle: 'Hastaneler farklı yazılımlar kullanmak zorunda kalıyor ve sistemler konuşmuyor.',
    items: [
      { icon: <Box />, text: 'CRM, muhasebe, stok, HR tamamen ayrı sistemlerde yönetiliyor.' },
      { icon: <FileText />, text: 'Veri tekrarları ve manuel giriş hataları zaman kaybı yaratıyor.' },
      { icon: <Network />, text: 'Entegrasyon eksikliği operasyonel verimsizliğe yol açıyor.' },
      { icon: <BarChart3 />, text: 'Yavaş raporlama süreçleri ve yönetimsel körlükler oluşuyor.' }
    ],
    notes: 'Bugün hastaneler CRM, muhasebe ve IK süreçlerini ayrı yönettiği için veri tekrarı, zaman kaybı ve entegrasyon sorunları doğuyor.'
  },
  {
    id: 3,
    type: 'content',
    bg: '/hospital/slide3.png',
    tag: 'ÇÖZÜMÜMÜZ',
    title: 'Tüm Sistemler Tek Çatı Altında',
    subtitle: 'Tüm modülleri birleştiren entegre hastane yönetim platformu.',
    items: [
      { icon: <Layers />, text: 'CRM + Finans + HR + Stok + Raporlama tek bir altyapıda birleşti.' },
      { icon: <Database />, text: 'Merkezi veri tabanı ve birbiriyle tam entegre çalışan modüller.' },
      { icon: <Code2 />, text: 'Hastaneye özel özelleştirilebilir, yeni modüller eklenebilir yapı.' },
      { icon: <Globe />, text: 'Mevcut sistemlerle entegre olabilir, ayrı yazılım satın alma devrini bitirir.' }
    ],
    notes: 'Önerdiğimiz sistem, ayrı ayrı yazılım satın alma sorununu çözer, tam entegre ve özelleştirilebilir bir mimari sunar.'
  },
  {
    id: 4,
    type: 'content',
    bg: '/hospital/slide4.png',
    tag: 'MİMARİ',
    title: 'Ölçeklenebilir ve Merkezileştirilmiş Altyapı',
    subtitle: 'Büyümeye Engel Olmayan Teknoloji',
    items: [
      { icon: <Building2 />, text: 'Yeni şube açıldığında ek sistem kurulumu gerekmez, anında devreye girer.' },
      { icon: <MapPin />, text: 'Tüm lokasyonlar ve şubeler tek bir merkezden eşzamanlı yönetilir.' },
      { icon: <ShieldCheck />, text: 'Rol ve yetki bazlı erişim kontrolüyle bulut tabanlı yüksek güvenlik.' },
      { icon: <Zap />, text: 'Gerçek zamanlı veri akışı ve sınırsız kullanıcı/hasta kapasitesi.' }
    ],
    notes: 'Kurumsal seviyede, bulut tabanlı ve çok şubeli yapı desteğimiz sayesinde yeni şubelerin sisteme entegrasyonu anında sağlanır.'
  },
  {
    id: 5,
    type: 'content',
    bg: '/hospital/slide5.png',
    tag: 'YAPAY ZEKA',
    title: 'Yapay Zeka Katmanı',
    subtitle: 'Sadece Yönetim Değil, Akıllı Yönetim',
    items: [
      { icon: <Brain />, text: 'Gelir gider analizleri yapar ve operasyonel darboğazları tespit eder.' },
      { icon: <Users />, text: 'Hasta dönüş oranlarını ve hasta davranışlarını anlık analiz eder.' },
      { icon: <PieChart />, text: 'Ameliyat türlerine göre kârlılık raporu çıkarır ve stok tüketimini tahminler.' },
      { icon: <Target />, text: 'Stratejik karar destek sistemi olarak üst yönetime net öneriler sunar.' }
    ],
    notes: 'AI katmanımız bir raporlama aracından çok daha fazlasıdır; gelir optimizasyonu ve stratejik karar üretiminde aktif rol oynar.'
  },
  {
    id: 6,
    type: 'content',
    bg: '/hospital/slide6.png',
    tag: 'LEAD YÖNETİMİ',
    title: 'Potansiyel Hasta Yönetimi',
    subtitle: 'Sosyal Medya Entegre, Dönüşüm Odaklı Sistem',
    items: [
      { icon: <Smartphone />, text: 'Tüm sosyal medya hesapları ve formlar sisteme doğrudan dijital bağlanır.' },
      { icon: <MessageSquare />, text: 'Yapay zeka detaylı otomatik yanıt sistemi ile anında müdahale.' },
      { icon: <Users />, text: 'Potansiyel hastalar otomatik CRM\'e düşer, lead-to-patient dönüşümü takip edilir.' },
      { icon: <TrendingUp />, text: 'Kampanya performansları ölçülerek dönüşüm oranları optimize edilir.' }
    ],
    notes: 'Amacımız gelen her bir dijital talebi (lead), maksimum oranda gerçek hastaya dönüştürmektir.'
  },
  {
    id: 7,
    type: 'content',
    bg: '/hospital/slide7.png',
    tag: 'HASTA YÖNETİMİ',
    title: 'Tam Entegre Hasta Süreci',
    subtitle: 'Medikal Geçmiş ve Uçtan Uca Takip',
    items: [
      { icon: <Database />, text: 'e-Devlet ve e-Nabız ile tam entegrasyon; reçete, tahlil ve görüntüleme erişimi.' },
      { icon: <FileText />, text: 'İlk görüşmeden operasyona kadar entegre hasta yolculuğu takibi.' },
      { icon: <Wallet />, text: 'Ödeme sistemi entegrasyonu ve geçmiş özetlerinin tek ekranda sunulması.' },
      { icon: <Video />, text: 'Ek Özellik: Estetik ameliyatlar için yapay zeka destekli olası sonuç simülasyonu.' }
    ],
    notes: 'Hastanın ilk kaydından, operasyon sonrası sürecine kadar olan tüm yolculuğu tek menüden sorunsuz yönetilir.'
  },
  {
    id: 8,
    type: 'content',
    bg: '/hospital/slide8.png',
    tag: 'OPERASYON',
    title: 'Akıllı Takvim ve Operasyon Yönetimi',
    subtitle: 'Planlamada Maksimum Verimlilik',
    items: [
      { icon: <CalendarCheck />, text: 'Ameliyathane doluluğu, cihaz ve doktor randevularının ortak takvimi.' },
      { icon: <Users />, text: 'Toplantı ve personel vardiya yönetimi optimizasyonu.' },
      { icon: <Smartphone />, text: 'Google Takvim entegrasyonu ve akıllı mobil bildirim sistemi.' },
      { icon: <Layers />, text: 'Olası çakışmaları (conflict) anında önleyerek organizasyonu hızlandırır.' }
    ],
    notes: 'Zaman eşittir maliyet. Ameliyat ve randevu planlamasını otonomlaştırarak asistan ve sekreterya yükünü minimuma indiriyoruz.'
  },
  {
    id: 9,
    type: 'content',
    bg: '/hospital/slide9.png',
    tag: 'STOK',
    title: 'Stok ve Depo Yönetimi',
    subtitle: 'Akıllı Takip ve Satın Alma Optimizasyonu',
    items: [
      { icon: <PackageSearch />, text: 'Kesintisiz depo doluluk oranı analizi ve akıllı depo takibi.' },
      { icon: <Zap />, text: 'Kritik stok uyarısı ve tükenmek üzere olan ürünler için otomatik sipariş önerisi.' },
      { icon: <TrendingUp />, text: 'Tahmine dayalı malzeme ve sarf ürün tüketim trend analizleri.' },
      { icon: <ShieldCheck />, text: 'Satın almaları optimize ederek gereksiz sermaye ve stok birikimini önleme.' }
    ],
    notes: 'Sistem, deponuzu sizin yerinize yönetir, eksikleri söyler ve maliyet avantajlı alım önerilerinde bulunur.'
  },
  {
    id: 10,
    type: 'content',
    bg: '/hospital/slide10.png',
    tag: 'ENTEGRASYON',
    title: 'Devlet Entegrasyonları',
    subtitle: 'Resmi Süreçlerin Tümünün Dijital Yönetimi',
    items: [
      { icon: <Landmark />, text: 'e-Nabız, Medula ve resmi devlet sağlık sistemleri ile siber entegrasyon.' },
      { icon: <FileText />, text: 'Merkezi reçete işlemleri, radyolojik görüntüler ve laboratuvar sonuçları aktarımı.' },
      { icon: <ShieldCheck />, text: 'Uluslararası standartlarda KVKK ve hasta veri güvenliği uyumluluğu.' },
      { icon: <CheckCircle2 />, text: 'Tüm resmi sağlık beyan süreçlerinin eksiksiz ve otomatik yürütülmesi.' }
    ],
    notes: 'Devlet sistemleriyle haberleşme altyapımız, manuel veri girme işini bitirirken yasal yükümlülükleri de tam sağlar.'
  },
  {
    id: 11,
    type: 'content',
    bg: '/hospital/slide11.png',
    tag: 'FİNANS',
    title: 'Finans ve Fatura Yönetimi',
    subtitle: 'Finansal Kontrol, Raporlama ve Şeffaflık',
    items: [
      { icon: <Wallet />, text: 'Gelir, gider ve anlık nakit akışı takibinin pürüzsüz yürütülmesi.' },
      { icon: <Calculator />, text: 'Fatura kesme, dijital arşivleme ve otomatik tahsilat hatırlatmaları.' },
      { icon: <PieChart />, text: 'Departman, doktor veya poliklinik bazlı eşzamanlı kârlılık analizleri.' },
      { icon: <CreditCard />, text: 'Sistem içi güvenli ve entegre dijital kredi kartı/ödeme altyapısı.' }
    ],
    notes: 'Mali tablolarınızı sadece muhasebecinizin değil, sizin de her an cep telefonunuzdan okuyabileceğiniz şeffaflıkta veriyoruz.'
  },
  {
    id: 12,
    type: 'content',
    bg: '/hospital/slide12.png',
    tag: 'DASHBOARD',
    title: 'Gelişmiş Raporlama & Yönetici Paneli',
    subtitle: 'Üst Yönetim İçin Stratejik Kontrol Merkezi',
    items: [
      { icon: <LayoutDashboard />, text: 'Günlük, haftalık ve aylık bazda ciro, maliyet ve büyüme dashboardları.' },
      { icon: <Target />, text: 'Ameliyat tipine ve yoğunluğa göre klinik performans karşılaştırmaları.' },
      { icon: <Users />, text: 'Doktor ve personel performans analizlerinin otomatik görselleştirilmesi.' },
      { icon: <Brain />, text: 'Yapay zekanın "Şu bölüme yatırım yapmalısınız" tarzında ürettiği stratejik veri.' }
    ],
    notes: 'Yönetim için sadece kompleks tablolar üretmiyoruz; süzülmüş, net kararlar aldırmayı sağlayan C-Level raporlar üretiyoruz.'
  },
  {
    id: 13,
    type: 'content',
    bg: '/hospital/slide13.png',
    tag: 'İNSAN KAYNAKLARI',
    title: 'İK ve İç İletişim Ekosistemi',
    subtitle: 'Kurumsal İnsan Kaynakları Yönetimi',
    items: [
      { icon: <Users />, text: 'Personel hiyerarşi kurgusu, maaş, prim ve yasal hakların takibi.' },
      { icon: <Brain />, text: 'İş başvurularının AI ile analizi ve role en uygun aday otomatik önerisi.' },
      { icon: <MonitorPlay />, text: 'Online personel sertifikasyon ve kurum içi eğitim yönetim sistemi.' },
      { icon: <MessageSquare />, text: 'Departmanlar arası güvenli chat, anons ve anlık uyarı haberleşme modülü.' }
    ],
    notes: 'Çalışanlarınızı motive etmek ve aralarındaki koordinasyonu en üst düzeye çekmek için dahili bir ekosistem sunuyoruz.'
  },
  {
    id: 14,
    type: 'content',
    bg: '/hospital/slide14.png',
    tag: 'ADMİN',
    title: 'Sistem Yönetimi ve Özelleştirme',
    subtitle: 'Tam Kontrol ve Modüler Esneklik',
    items: [
      { icon: <ShieldCheck />, text: 'Kişi veya departman bazlı mikroskobik yetkilendirme ve rol atamaları.' },
      { icon: <LayoutDashboard />, text: 'Sistemin renk, arayüz, döküman şablonu ve logolarını kişiselleştirme imkanı.' },
      { icon: <Box />, text: 'Gelecekte doğacak ihtiyaçlar için dilediğiniz modülü ekleme / çıkarma opsiyonu.' },
      { icon: <Code2 />, text: 'Hastanenin halihazırda kullandığı özel donanım ve dış servislere tam entegrasyon.' }
    ],
    notes: 'Sistem kapalı bir kutu değildir. Yazılım kendi içinde evrimleşebilir ve tamamen sizin ihtiyaçlarınıza göre eğilip bükülebilir.'
  },
  {
    id: 15,
    type: 'cover',
    bg: '/hospital/slide15.png',
    tag: 'VİZYON',
    title: 'Mobil Entegrasyon ve Gelecek',
    subtitle: 'Her Yerden, Gerçek Zamanlı Yönetim Gücü',
    items: [
      { icon: <Smartphone size={20} />, text: 'Tam Mobil Uyumluluk' },
      { icon: <Zap size={20} />, text: 'Anlık Bildirimler' },
      { icon: <Globe size={20} />, text: 'Kesintisiz Uzaktan Yönetim' },
      { icon: <Brain size={20} />, text: 'Evrimleşen AI Altyapısı' },
      { icon: <Target size={20} />, text: 'Veri Odaklı Kararlar' }
    ],
    notes: 'Bu sistem sadece bugünün ihtiyaçları için değil, geleceğin akıllı hastane vizyonunu şimdiden kurmanız için tasarlandı.'
  },
  {
    id: 16,
    type: 'live-demo',
    bg: '/hospital/slide1.png', 
    link: 'https://tashospital.vercel.app/', 
    notes: 'Canlı uygulama deneyimi sayfası.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, filter: 'blur(10px)' },
  visible: { 
    y: 0, 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
  }
};

export function HospitalPresentation({ setActivePage }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [showExampleModal, setShowExampleModal] = useState(false);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
      setShowExampleModal(false);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
      setShowExampleModal(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't change slides if example modal is open
      if (showExampleModal) {
        if (e.key === 'Escape') setShowExampleModal(false);
        return;
      }
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'n' || e.key === 'N') setShowNotes(prev => !prev);
      if (e.key === 'Escape') setActivePage('home');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, showExampleModal, setActivePage]);

  const slide = slides[currentSlide];

  return (
    <div className={`hospital-presentation-session`}>
      <div className={`presentation-container`}>
        {/* Background Orbs */}
        <div className="glow-orb glow-1"></div>
        <div className="glow-orb glow-2"></div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20, scale: 1.02 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="slide active"
            style={{ 
              backgroundImage: `linear-gradient(rgba(5, 6, 10, 0.35), rgba(5, 6, 10, 0.5)), url("${slide.bg}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="slide-content">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={!slide.link ? "grid-2" : ""}
                style={!slide.link ? { alignItems: 'center', height: '100%' } : {}}
              >
                {slide.link && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ 
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      width: '100vw', 
                      height: '100vh', 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 10,
                      pointerEvents: 'none'
                    }}
                  >
                    <div style={{
                      width: '85vw',
                      height: '75vh',
                      background: 'white',
                      borderRadius: '24px',
                      border: '4px solid rgba(0, 245, 212, 0.2)',
                      overflow: 'hidden',
                      boxShadow: '0 40px 100px rgba(0,0,0,0.8)',
                      position: 'relative',
                      pointerEvents: 'auto'
                    }}>
                      <iframe 
                        src={slide.link} 
                        style={{
                          width: '100%',
                          height: '100%',
                          border: 'none',
                          display: 'block'
                        }}
                        title="Canlı Demo Penceresi"
                      />
                      <motion.a
                        href={slide.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        style={{
                          position: 'absolute',
                          bottom: '1.5rem',
                          right: '1.5rem',
                          background: 'linear-gradient(135deg, var(--accent-secondary), var(--accent-primary))',
                          color: 'var(--bg-primary)',
                          padding: '0.8rem 1.5rem',
                          borderRadius: '12px',
                          textDecoration: 'none',
                          fontWeight: '800',
                          fontSize: '0.9rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                          zIndex: 10
                        }}
                      >
                        <Globe size={18} />
                        Tam Ekran
                      </motion.a>
                    </div>
                  </motion.div>
                )}

                <div className="text-side" style={{ position: 'relative' }}>
                  
                  {slide.tag && !slide.link && (
                    <motion.span variants={itemVariants} className="tag">
                      {slide.tag}
                    </motion.span>
                  )}
                  
                  {!slide.link && (
                    <motion.h1 
                      variants={itemVariants} 
                      style={slide.type !== 'cover' ? { fontSize: '3.5rem', textTransform: 'none', letterSpacing: '-1px' } : {}}
                    >
                      {slide.title}
                    </motion.h1>
                  )}

                  {slide.subtitle && !slide.link && (
                    <motion.p 
                      variants={itemVariants}
                      style={{ fontSize: '1.6rem', color: 'var(--accent-primary)', marginBottom: '3rem', fontWeight: 500 }}
                    >
                      {slide.subtitle}
                    </motion.p>
                  )}
                </div>

                {slide.type === 'cover' && !slide.link ? (
                  <motion.div 
                    variants={containerVariants}
                    style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      justifyContent: 'center', 
                      gap: '1.2rem', 
                      maxWidth: '1200px',
                      margin: '0 auto'
                    }}
                  >
                      {slide.items && slide.items.map((item, i) => (
                        <motion.div 
                          key={i} 
                          variants={itemVariants} 
                          className="glass-card" 
                          style={{ 
                            padding: '1.2rem 2rem', 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '1rem', 
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(0, 245, 212, 0.2)',
                            borderRadius: '20px',
                            minWidth: '200px'
                          }}
                        >
                          <div style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center' }}>
                            {React.cloneElement(item.icon, { size: 24 })}
                          </div>
                          <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff' }}>{item.text}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : !slide.link && (
                    <motion.div 
                      variants={containerVariants}
                      style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                        gap: '1.5rem',
                        width: '100%',
                        marginTop: '1rem'
                      }}
                    >
                      {slide.items && slide.items.map((item, i) => (
                        <motion.div 
                          key={i} 
                          variants={itemVariants}
                          whileHover={{ y: -5, background: 'rgba(0, 245, 212, 0.05)', borderColor: 'rgba(0, 245, 212, 0.4)' }}
                          className="glass-card"
                          style={{ 
                            display: 'flex', 
                            gap: '1.2rem', 
                            alignItems: 'center', 
                            padding: '1.5rem',
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '24px',
                            textAlign: 'left'
                          }}
                        >
                          <div style={{ 
                            padding: '1rem', 
                            background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.1), rgba(79, 172, 254, 0.1))', 
                            border: '1px solid rgba(0, 242, 254, 0.2)', 
                            borderRadius: '16px', 
                            color: 'var(--accent-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}>
                            {React.cloneElement(item.icon, { size: 24 })}
                          </div>
                          <div style={{ flex: 1 }}>
                            <p style={{ color: 'white', fontWeight: 500, fontSize: '1.1rem', lineHeight: 1.4, margin: 0 }}>
                              {item.text}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {/* Overlaid Example Modal */}
                  <AnimatePresence>
                    {showExampleModal && (
                      <motion.div 
                        initial={{ scale: 0.9, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 50 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                        style={{ 
                          position: 'fixed', 
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '90vw',
                          height: '85vh',
                          zIndex: 200,
                          background: 'rgba(0, 0, 0, 0.8)',
                          borderRadius: '32px', 
                          boxShadow: '0 50px 100px rgba(0,0,0,0.9)',
                          border: '2px solid rgba(255,255,255,0.2)',
                          backdropFilter: 'blur(30px)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '2rem'
                        }}
                      >
                        <button 
                          onClick={() => setShowExampleModal(false)}
                          style={{
                             position: 'absolute',
                             top: '1rem',
                             right: '1.5rem',
                             background: 'rgba(255,0,0,0.2)',
                             border: '1px solid rgba(255,0,0,0.4)',
                             color: 'white',
                             padding: '0.8rem 1.5rem',
                             borderRadius: '999px',
                             cursor: 'pointer',
                             display: 'flex',
                             alignItems: 'center',
                             gap: '0.5rem',
                             fontSize: '1rem',
                             fontWeight: '600'
                          }}
                        >
                           <X size={20} /> Kapat
                        </button>
                        <img 
                          src={slide.exampleImage} 
                          alt="Örnek Ekran" 
                          style={{ 
                            width: '100%', 
                            height: '100%',
                            objectFit: 'contain', 
                            borderRadius: '16px'
                          }} 
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* NOTLAR BUTONU SOLA ALINDI */}
        <div style={{ position: 'fixed', bottom: '2.5rem', left: '2.5rem', zIndex: 100 }}>
          <button 
            className="nav-btn" 
            onClick={() => setShowNotes(!showNotes)} 
            title="Konuşma Notları (N)"
            style={{ width: '64px', height: '64px', background: showNotes ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.05)' }}
          >
            <MessageSquare size={28} color={showNotes ? '#000' : '#fff'} />
          </button>
        </div>

        <div className="nav-controls">
          <button 
            className="nav-btn" 
            onClick={prevSlide} 
            disabled={currentSlide === 0}
          >
            <ChevronLeft size={32} />
          </button>
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.05)', 
            padding: '0 1.5rem', 
            height: '56px',
            borderRadius: '16px', 
            display: 'flex', 
            alignItems: 'center', 
            fontSize: '1rem', 
            fontWeight: 600,
            border: '1px solid var(--glass-border)',
            color: 'var(--accent-primary)',
          }}>
            {currentSlide + 1} <span style={{ opacity: 0.4, margin: '0 0.5rem' }}>/</span> {slides.length}
          </div>
          <button 
            className="nav-btn" 
            onClick={nextSlide} 
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="progress-bar" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />

        <AnimatePresence>
          {showNotes && (
            <motion.div 
              className="speak-notes"
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.9 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              style={{ left: '8rem', bottom: '3.5rem' }} /* Buton sola gittiği için notlar sağa kaydırıldı */
            >
              <h4 style={{ color: 'var(--accent-primary)', margin: 0, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.2rem' }}>
                <MessageSquare size={20} /> Not
              </h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.6', margin: 0, color: '#e2e8f0' }}>{slide.notes}</p>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* BEYAZ LOGO - SİYAH GÖLGELİ, SOL ÜSTTE SABİT */}
        <div style={{ position: 'fixed', top: '1.2rem', left: '1.2rem', zIndex: 100 }}>
           <img 
              src="/hospital/logo-dark.png" 
              alt="SARFEA Logo" 
              style={{ 
                 height: '65px', 
                 width: 'auto',
                 filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.8))' 
              }} 
           />
        </div>
      </div>
    </div>
  );
}

export default HospitalPresentation;
