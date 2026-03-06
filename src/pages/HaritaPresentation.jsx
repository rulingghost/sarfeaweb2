import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, ChevronDown, MessageSquare, LayoutDashboard, Users, Box, MapPin, 
  Calculator, BarChart3, Brain, Building2, ShieldCheck, Smartphone, Code2, 
  CheckCircle2, Target, Layers, Zap, Video, Fingerprint, CreditCard, PackageSearch, 
  TrendingUp, Wallet, FileText, Globe, Cpu, Award, ArrowRightCircle, ArrowLeftCircle, X
} from 'lucide-react';
import './HaritaPresentation.css';

const slides = [
  {
    id: 1,
    type: 'cover',
    bg: '/bg1.png',
    tag: { tr: 'JUMBO CRM SOLUTIONS', en: 'JUMBO CRM SOLUTIONS', nl: 'JUMBO CRM OPLOSSINGEN' },
    title: { tr: 'KURUMSAL CRM ÇÖZÜMÜ', en: 'CORPORATE CRM SOLUTION', nl: 'ZAKELIJKE CRM-OPLOSSING' },
    subtitle: { tr: 'Tüm İş Süreçlerinizi Tek Panelden Yönetin', en: 'Manage All Business Processes from a Single Panel', nl: 'Beheer al uw bedrijfsprocessen vanuit één enkel paneel' },
    description: { 
      tr: 'JUMBO Kurumsal CRM çözümü; tüm operasyonel süreçleri tek merkezden yönetilebilir hale getirerek karar alma hızını artırmayı, maliyetleri optimize etmeyi ve kurumsal verimliliği sürdürülebilir biçimde yükseltmeyi hedeflemektedir. Bu yapı, şirketin dijital dönüşümünü destekleyen stratejik bir yönetim altyapısı olarak tasarlanmıştır.',
      en: 'JUMBO Corporate CRM solution aims to increase decision-making speed, optimize costs, and sustainably boost corporate efficiency by making all operational processes manageable from a single center. This structure is designated as a strategic management infrastructure supporting the company\'s digital transformation.',
      nl: 'De JUMBO zakelijke CRM-oplossing heeft als doel de besluitvorming te versnellen, kosten te optimaliseren en de bedrijfsefficiëntie duurzaam te verhogen door alle operationele processen vanuit één centraal punt beheersbaar te maken. Deze structuur is ontworpen als een strategische beheersinfrastructuur die de digitale transformatie van het bedrijf ondersteunt.'
    },
    items: [
      { icon: <LayoutDashboard size={20} />, text: { tr: 'Yönetim', en: 'Management', nl: 'Management' } },
      { icon: <Users size={20} />, text: { tr: 'İnsan Kaynakları', en: 'Human Resources', nl: 'Human Resources' } },
      { icon: <Box size={20} />, text: { tr: 'Stok & Şube Takibi', en: 'Stock & Branch Tracking', nl: 'Voorraad- & Filiaalbeheer' } },
      { icon: <Calculator size={20} />, text: { tr: 'Muhasebe', en: 'Accounting', nl: 'Boekhouding' } },
      { icon: <BarChart3 size={20} />, text: { tr: 'Raporlama', en: 'Reporting', nl: 'Rapportage' } },
      { icon: <Brain size={20} />, text: { tr: 'AI Destekli', en: 'AI Supported', nl: 'AI-ondersteund' } }
    ],
    notes: { tr: 'JUMBO Kurumsal CRM çözümü; tüm operasyonel süreçleri tek merkezden yönetilebilir hale getirerek karar alma hızını artırmayı, maliyetleri optimize etmeyi ve kurumsal verimliliği sürdürülebilir biçimde yükseltmeyi hedeflemektedir. Bu yapı, şirketin dijital dönüşümünü destekleyen stratejik bir yönetim altyapısı olarak tasarlanmıştır.', en: 'The JUMBO Corporate CRM solution aims to manage all operational processes from a single center, increasing decision-making speed and optimizing costs. It acts as a strategic infrastructure for digital transformation.', nl: 'De JUMBO zakelijke CRM-oplossing heeft als doel alle operationele processen vanuit één centrum te beheren, waardoor de besluitvorming sneller verloopt en kosten worden geoptimaliseerd.' }
  },
  {
    id: 2,
    type: 'content',
    bg: '/bg2.png',
    tag: { tr: 'STRATEJİ', en: 'STRATEGY', nl: 'STRATEGIE' },
    title: { tr: 'CRM: Stratejik Yönetim Altyapısı', en: 'CRM: Strategic Management Infrastructure', nl: 'CRM: Strategische Beheersinfrastructuur' },
    subtitle: { tr: 'Kurumsal Karar ve Operasyon Yönetim Platformu', en: 'Corporate Decision and Operation Management Platform', nl: 'Platform voor Zakelijke Besluitvorming en Operationeel Beheer' },
    items: [
      { icon: <Globe />, text: { tr: 'Şirket genelinde tüm operasyonların merkezi ve entegre şekilde yönetilmesini sağlar.', en: 'Ensures centralized and integrated management of all operations company-wide.', nl: 'Zorgt voor centraal en geïntegreerd beheer van alle operationele processen in het hele bedrijf.' } },
      { icon: <Target />, text: { tr: 'Üst yönetime gerçek zamanlı, güvenilir ve konsolide veri akışı sunar.', en: 'Provides real-time, reliable, and consolidated data flow to top management.', nl: 'Biedt realtime, betrouwbare en geconsolideerde gegevensstromen aan het topmanagement.' } },
      { icon: <Zap />, text: { tr: 'Şube, stok, insan kaynakları ve finans süreçlerinde ölçülebilir performans artışı sağlar.', en: 'Delivers measurable performance increases in branch, stock, HR, and finance processes.', nl: 'Levert meetbare prestatieverbeteringen in filiaal-, voorraad-, HR- en financiële processen.' } },
      { icon: <Brain />, text: { tr: 'Yapay zeka destekli analizlerle maliyetleri optimize eder, kârlılığı artırır.', en: 'Optimizes costs and increases profitability with AI-supported analytics.', nl: 'Optimaliseert kosten en verhoogt winstgevendheid met door AI ondersteunde analyses.' } }
    ],
    notes: { tr: 'Bu CRM yapısı yalnızca müşteri yönetimi değil, şirketin tüm kaynaklarının entegre ve ölçülebilir biçimde yönetilmesini hedefler. Amaç; karar alma hızını artırmak, operasyonel verimliliği yükseltmek ve sürdürülebilir kârlılığı desteklemektir.', en: 'This CRM structure targets not just customer management, but the integrated and measurable management of all company resources.', nl: 'Deze CRM-structuur richt zich niet alleen op klantbeheer, maar op het geïntegreerde en meetbare beheer van alle bedrijfsmiddelen.' }
  },
  {
    id: 3,
    type: 'content',
    bg: '/bg3.png',
    tag: { tr: 'ALTYAPI', en: 'INFRASTRUCTURE', nl: 'INFRASTRUCTUUR' },
    title: { tr: 'Sürdürülebilir ve Ölçeklenebilir Altyapı', en: 'Sustainable and Scalable Infrastructure', nl: 'Duurzame en Schaalbare Infrastructuur' },
    subtitle: { tr: 'Büyümeyi Destekleyen Teknoloji Altyapısı', en: 'Tech Infrastructure Supporting Growth', nl: 'Technologische Infrastructuur die Groei Ondersteunt' },
    items: [
      { icon: <TrendingUp />, text: { tr: 'Büyüme ve yeni şube açılışlarında ek sistem yatırımı gerektirmeden operasyonların sorunsuz genişlemesini sağlar.', en: 'Allows seamless expansion of operations without additional system investment during growth and new branch openings.', nl: 'Maakt naadloze uitbreiding van de activiteiten mogelijk zonder extra systeeminvesteringen bij groei en nieuwe filialen.' } },
      { icon: <Globe />, text: { tr: 'Farklı ölçek ve lokasyonlardaki operasyonların tek merkezden standartlaştırılmış şekilde yönetilmesine imkân tanır.', en: 'Enables standardized management of operations across different scales and locations from a single center.', nl: 'Maakt gestandaardiseerd beheer van operaties op verschillende schalen en locaties vanuit één centrum mogelijk.' } },
      { icon: <ShieldCheck />, text: { tr: 'Yetki ve erişim kontrolü sayesinde kurumsal riskleri azaltır, denetlenebilir ve şeffaf bir yönetim yapısı oluşturur.', en: 'Reduces corporate risks via improved access control, creating an auditable and transparent management structure.', nl: 'Vermindert bedrijfsrisico\'s door toegangscontrole en creëert een controleerbare en transparante beheersstructuur.' } },
      { icon: <LayoutDashboard />, text: { tr: 'Yönetim ekibine sahadan merkeze kadar her noktada anlık erişim ve kontrol imkânı sunar.', en: 'Offers the management team instant access and control from the field to the HQ.', nl: 'Biedt het managementteam directe toegang en controle, van het veld tot het hoofdkantoor.' } },
      { icon: <Layers />, text: { tr: 'Mevcut muhasebe, ERP veya diğer sistemlerle entegre çalışarak veri tekrarını ve operasyonel hataları minimize eder.', en: 'Minimizes data redundancy and operational errors by integrating with existing accounting, ERP, or other systems.', nl: 'Minimaliseert gegevensredundantie en operationele fouten door integratie met bestaande boekhoud-, ERP- of andere systemen.' } }
    ],
    notes: { tr: 'Altyapı, yüksek veri hacmi ve yoğun operasyonel trafiği kesintisiz şekilde yönetebilecek kapasitede tasarlanmıştır.', en: 'The infrastructure is designed to manage high data volume and intense operational traffic without interruption.', nl: 'De infrastructuur is ontworpen om grote hoeveelheden gegevens en intensief operationeel verkeer zonder onderbreking te beheren.' }
  },
  {
    id: 4,
    type: 'content',
    bg: '/bg4.png',
    tag: { tr: 'KONTROL', en: 'CONTROL', nl: 'CONTROLE' },
    previewImage: '/preview_home.jpeg',
    title: { tr: 'Ana Sayfa (Admin Paneli)', en: 'Dashboard (Admin Panel)', nl: 'Dashboard (Beheerderspaneel)' },
    subtitle: { tr: 'Şirketinizin Dijital Kokpiti', en: 'Your Company\'s Digital Cockpit', nl: 'De Digitale Cockpit van Uw Bedrijf' },
    items: [
      { icon: <LayoutDashboard />, text: { tr: 'Merkezi Yönetim Paneli: Canlı performans izleme.', en: 'Central Management Panel: Live performance monitoring.', nl: 'Centraal Beheerpaneel: Live prestatiebewaking.' } },
      { icon: <Users />, text: { tr: 'Kullanıcı yönetimi ve dinamik rol tanımlama.', en: 'User management and dynamic role definition.', nl: 'Gebruikersbeheer en dynamische roldefinitie.' } },
      { icon: <Wallet />, text: { tr: 'Aylık / Yıllık gelir - gider projeksiyonları.', en: 'Monthly / Yearly income - expense projections.', nl: 'Maandelijkse / Jaarlijkse inkomsten - uitgaven prognoses.' } },
      { icon: <MapPin />, text: { tr: 'Global, bölgesel ve mağaza bazlı anlık filtreleme.', en: 'Instant global, regional, and store-based filtering.', nl: 'Directe filtering op wereldwijd, regionaal en winkelniveau.' } },
      { icon: <TrendingUp />, text: { tr: 'Kritik finansal KPI ve başarı göstergeleri.', en: 'Critical financial KPIs and success indicators.', nl: 'Kritieke financiële KPI\'s en succesindicatoren.' } }
    ],
    notes: { tr: 'Bu panel, yönetimin şirket performansını anlık verilerle takip etmesini sağlar.', en: 'This panel allows management to track company performance with real-time data.', nl: 'Met dit paneel kan het management de prestaties van het bedrijf volgen met realtime gegevens.' }
  },
  {
    id: 5,
    type: 'content',
    bg: '/bg5.png',
    tag: { tr: 'İNSAN KAYNAKLARI', en: 'HUMAN RESOURCES', nl: 'HUMAN RESOURCES' },
    previewImage: '/preview_hr.jpeg',
    title: { tr: 'İnsan Kaynakları Yönetimi', en: 'Human Resources Management', nl: 'HR-beheer' },
    subtitle: { tr: 'Yetenek ve Performans Odaklı Yönetim', en: 'Talent and Performance Focused Management', nl: 'Talent- en Prestatiegericht Beheer' },
    items: [
      { icon: <Layers />, text: { tr: 'Organizasyon şeması ve hiyerarşi kurgulama.', en: 'Organization chart and hierarchy structuring.', nl: 'Organisatieschema en hiërarchische structurering.' } },
      { icon: <Calculator />, text: { tr: 'Maaş, yan haklar ve bordro ön hazırlık süreçleri.', en: 'Salary, benefits, and payroll preliminary processes.', nl: 'Salaris, secundaire arbeidsvoorwaarden en voorbereiding van de loonadministratie.' } },
      { icon: <FileText />, text: { tr: 'İzin, rapor ve masraf talep onay otomasyonu.', en: 'Leave, report, and expense request approval automation.', nl: 'Automatisering van verlof-, rapportage- en onkostenaanvragen.' } },
      { icon: <Users />, text: { tr: 'İşe alım portalı ve aday havuzu yönetimi.', en: 'Recruitment portal and candidate pool management.', nl: 'Wervingsportaal en beheer van kandidatenpools.' } },
      { icon: <Award />, text: { tr: 'Performans KPI ve 360 derece değerlendirme.', en: 'Performance KPI and 360-degree evaluation.', nl: 'Prestatie-KPI\'s en 360-graden evaluatie.' } }
    ],
    notes: { tr: 'Bu modül, insan kaynağını maliyet unsuru olmaktan çıkarıp performans odağına taşır.', en: 'This module shifts human resources from a cost center to a performance focus.', nl: 'Deze module verandert human resources van een kostenpost naar een prestatiegerichtheid.' }
  },
  {
    id: 6,
    type: 'content',
    bg: '/bg6.png',
    tag: { tr: 'STOK YÖNETİMİ', en: 'STOCK MANAGEMENT', nl: 'VOORRAADBEHEER' },
    previewImage: '/preview_stock.jpeg',
    title: { tr: 'Stok Takip Sistemi', en: 'Stock Tracking System', nl: 'Voorraadbeheersysteem' },
    subtitle: { tr: 'Sıfır Hata, Maksimum Kontrol', en: 'Zero Defects, Maximum Control', nl: 'Nul Fouten, Maximale Controle' },
    items: [
      { icon: <PackageSearch />, text: { tr: 'Ürün ve sarf malzeme bazlı anlık stok takibi.', en: 'Instant stock tracking based on product and consumables.', nl: 'Directe voorraadtracering op basis van producten en verbruiksgoederen.' } },
      { icon: <Zap />, text: { tr: 'Kritik stok seviyesi otomatik alarm mekanizması.', en: 'Automatic alarm mechanism for critical stock levels.', nl: 'Automatisch alarmmechanisme voor kritieke voorraadniveaus.' } },
      { icon: <TrendingUp />, text: { tr: 'Stok devir hızı ve varyasyon analizleri.', en: 'Stock turnover rate and variation analysis.', nl: 'Omloopsnelheid van de voorraad en variatieanalyses.' } },
      { icon: <Building2 />, text: { tr: 'Şube bazlı anlık kâr & zarar ve fire takibi.', en: 'Branch-based instant profit & loss and waste tracking.', nl: 'Filiaalgebaseerde directe winst- en verliesrekening en afvaltracering.' } },
      { icon: <Smartphone />, text: { tr: 'Mobil barkod okutma ile hızlı depo sayımı.', en: 'Fast warehouse counting with mobile barcode scanning.', nl: 'Snel magazijntellen met mobiele barcodescanning.' } }
    ],
    notes: { tr: 'Stok yönetimini reaktif bir süreç olmaktan çıkarıp öngörülebilir bir yapıya dönüştürür.', en: 'Transforms stock management from a reactive process to a predictable structure.', nl: 'Transformeert voorraadbeheer van een reactief proces naar een voorspelbare structuur.' }
  },
  {
    id: 7,
    type: 'content',
    bg: '/bg7.png',
    tag: { tr: 'SATIN ALMA', en: 'PURCHASING', nl: 'INKOOP' },
    title: { tr: 'Akıllı Satın Alma & Depo', en: 'Smart Purchasing & Warehouse', nl: 'Slim Inkopen & Magazijn' },
    subtitle: { tr: 'Veriye Dayalı Tedarik Yönetimi', en: 'Data-Driven Supply Management', nl: 'Datagestuurd Inkoopbeheer' },
    items: [
      { icon: <Wallet />, text: { tr: 'Merkezi satın alma ekranları ve onay hiyerarşisi.', en: 'Centralized purchasing screens and approval hierarchy.', nl: 'Gecentraliseerde inkoopschermen en goedkeuringshiërarchie.' } },
      { icon: <Target />, text: { tr: 'Tedarikçi fiyat karşılaştırma ve geçmiş analizleri.', en: 'Supplier price comparison and historical analysis.', nl: 'Prijsvergelijking leveranciers en historische analyses.' } },
      { icon: <Brain />, text: { tr: 'AI Önerisi: En uygun zaman ve fiyatlı alım tahmini.', en: 'AI Suggestion: Optimal time and price purchasing forecast.', nl: 'AI-Suggestie: Voorspelling voor optimale inkooptijd en -prijs.' } },
      { icon: <Box />, text: { tr: 'Ana depo → Şube arası talep ve sevk yönetimi.', en: 'Main warehouse → Branch demand and dispatch management.', nl: 'Hoofdmagazijn → Filiaal vraag- en verzendbeheer.' } },
      { icon: <CheckCircle2 />, text: { tr: 'Dijital irsaliye ve teslimat onay süreçleri.', en: 'Digital waybill and delivery confirmation processes.', nl: 'Digitale vrachtbrief en processen voor leveringsbevestiging.' } }
    ],
    notes: { tr: 'Satın alma süreçlerinin merkezi yönetimi ile maliyet optimizasyonu sağlanır.', en: 'Cost optimization is achieved through centralized management of purchasing processes.', nl: 'Kostenoptimalisatie wordt bereikt door centraal beheer van inkoopprocessen.' }
  },
  {
    id: 8,
    type: 'content',
    bg: '/bg8.png',
    tag: { tr: 'FRANCHISING', en: 'FRANCHISING', nl: 'FRANCHISING' },
    previewImage: '/preview_branch.jpeg',
    title: { tr: 'Şube & Franchising Takibi', en: 'Branch & Franchising Management', nl: 'Filiaal- & Franchisebeheer' },
    subtitle: { tr: 'Sınırsız Büyüme, Merkezi Denetim', en: 'Unlimited Growth, Central Audit', nl: 'Onbeperkte Groei, Centrale Audit' },
    items: [
      { icon: <Globe />, text: { tr: 'Şube performans listeleri ve detaylı karne sistemi.', en: 'Branch performance lists and detailed scorecard system.', nl: 'Lijsten met filiaalprestaties en gedetailleerd scorecardsysteem.' } },
      { icon: <FileText />, text: { tr: 'Aday franchise başvuru ve evrak takip süreci.', en: 'Candidate franchise application and document tracking process.', nl: 'Kandidaat-franchiseaanvraag en documentvolgproces.' } },
      { icon: <BarChart3 />, text: { tr: 'Aylık / Yıllık şube kâr-zarar bilançoları.', en: 'Monthly / Yearly branch profit-loss balance sheets.', nl: 'Maandelijkse / Jaarlijkse winst- en verliesrekeningen per filiaal.' } },
      { icon: <Users />, text: { tr: 'Şube personel maliyeti ve verimlilik kıyaslama.', en: 'Branch personnel cost and efficiency benchmarking.', nl: 'Kosten- en efficiëntiebenchmarking van filiaalpersoneel.' } },
      { icon: <MapPin />, text: { tr: 'Harita üzerinde canlı satış yoğunluğu izleme.', en: 'Live sales density monitoring on the map.', nl: 'Live monitoring van verkoopdichtheid op de kaart.' } }
    ],
    notes: { tr: 'Şube ve franchising yapısının merkezi takibi sayesinde büyüme kontrol altında tutulur.', en: 'Growth is kept under control thanks to centralized tracking of the branch and franchising structure.', nl: 'Groei wordt onder controle gehouden dankzij centrale monitoring van de filiaal- en franchisestructuur.' }
  },
  {
    id: 9,
    type: 'content',
    bg: '/bg9.png',
    tag: { tr: 'MUHASEBE', en: 'ACCOUNTING', nl: 'BOEKHOUDING' },
    previewImage: '/preview_accounting.jpeg',
    title: { tr: 'Muhasebe Modülü', en: 'Accounting Module', nl: 'Boekhoudmodule' },
    subtitle: { tr: 'Finansal Süreçlerde Tam Entegrasyon', en: 'Full Integration in Financial Processes', nl: 'Volledige Integratie in Financiële Processen' },
    items: [
      { icon: <Building2 />, text: { tr: 'Cari Kartlar: Tedarikçi ve müşteri yönetimi.', en: 'Current Cards: Supplier and customer management.', nl: 'Huidige Kaarten: Beheer van leveranciers en klanten.' } },
      { icon: <FileText />, text: { tr: 'E-Fatura entegrasyonu ve dijital arşivleme.', en: 'E-Invoice integration and digital archiving.', nl: 'E-factuur integratie en digitale archivering.' } },
      { icon: <Wallet />, text: { tr: 'Ödeme ve tahsilat planlama, çek-senet takibi.', en: 'Payment and collection planning, check-note tracking.', nl: 'Planning van betalingen en incasso\'s, opvolging van cheques.' } },
      { icon: <Calculator />, text: { tr: 'Operasyonel giderlerin otomatik muhasebeleşmesi.', en: 'Automated accounting of operational expenses.', nl: 'Geautomatiseerde boekhouding van operationele kosten.' } },
      { icon: <Brain />, text: { tr: 'Finansal risk analizi ve nakit akış tahminleme.', en: 'Financial risk analysis and cash flow forecasting.', nl: 'Financiële risicoanalyse en cashflowprognose.' } }
    ],
    notes: { tr: 'Muhasebe süreçlerinin tam entegrasyonu sayesinde finansal veriler güvenilir yönetilir.', en: 'Financial data is managed reliably thanks to full integration of accounting processes.', nl: 'Financiële gegevens worden betrouwbaar beheerd dankzij de volledige integratie van boekhoudprocessen.' }
  },
  {
    id: 10,
    type: 'content',
    bg: '/bg10.png',
    tag: { tr: 'VERİ ANALİZİ', en: 'DATA ANALYSIS', nl: 'GEGEVENSANALYSE' },
    previewImage: '/preview_report.jpeg',
    title: { tr: 'Raporlama Sistemi', en: 'Reporting System', nl: 'Rapportagesysteem' },
    subtitle: { tr: 'Karmaşık Veriyi Karara Dönüştürün', en: 'Turn Complex Data into Decisions', nl: 'Zet Complexe Gegevens om in Beslissingen' },
    items: [
      { icon: <FileText />, text: { tr: 'Detaylı gelir-gider pusulası ve nakit akış raporu.', en: 'Detailed income-expense compass and cash flow report.', nl: 'Gedetailleerd inkomsten-uitgaven kompas en cashflowrapport.' } },
      { icon: <Layers />, text: { tr: 'Ürün ve kategori bazlı kâr marjı analizleri.', en: 'Product and category-based profit margin analysis.', nl: 'Winstmargesanalyses op basis van product en categorie.' } },
      { icon: <TrendingUp />, text: { tr: 'Bölgesel ve dönemsel satış trend grafikleri.', en: 'Regional and seasonal sales trend charts.', nl: 'Regionale en seizoensgebonden verkooptrendgrafieken.' } },
      { icon: <CheckCircle2 />, text: { tr: 'Yöneticiye özel dinamik dashboard tasarımları.', en: 'Executive-specific dynamic dashboard designs.', nl: 'Specifieke dynamische dashboardontwerpen voor leidinggevenden.' } },
      { icon: <Smartphone />, text: { tr: 'Otomatik periyodik rapor gönderimi (Email/Sms).', en: 'Automated periodic report delivery (Email/Sms).', nl: 'Geautomatiseerde periodieke rapportverzending (E-mail/Sms).' } }
    ],
    notes: { tr: 'Raporlama sistemi anlık içgörüler sunarak yönetimin hızlı karar almasını sağlar.', en: 'The reporting system provides instant insights, enabling fast decision-making.', nl: 'Het rapportagesysteem biedt directe inzichten, wat snelle besluitvorming mogelijk maakt.' }
  },
  {
    id: 11,
    type: 'content',
    bg: '/bg11.png',
    tag: { tr: 'AI ENGINE', en: 'AI ENGINE', nl: 'AI MOTOR' },
    title: { tr: 'Yapay Zeka Özellikleri', en: 'Artificial Intelligence Features', nl: 'Kunstmatige Intelligentie Kenmerken' },
    subtitle: { tr: 'Sistemin Akıllı Beyni', en: 'The System\'s Intelligent Brain', nl: 'Het Intelligente Brein van het Systeem' },
    items: [
      { icon: <Brain />, text: { tr: 'Optimum stok ve satın alma zamanlaması önerisi.', en: 'Optimal stock and purchasing timing suggestion.', nl: 'Suggestie voor optimale voorraad- en inkooptiming.' } },
      { icon: <Target />, text: { tr: 'Tedarikçi puanlama ve teklif optimizasyonu.', en: 'Supplier scoring and bid optimization.', nl: 'Leveranciersscoring en bodoptimalisatie.' } },
      { icon: <TrendingUp />, text: { tr: 'Satış tahminleme ve talep yönetimi algoritmaları.', en: 'Sales forecasting and demand management algorithms.', nl: 'Algoritmen voor verkoopprognoses en vraagbeheer.' } },
      { icon: <Users />, text: { tr: 'CV puanlama ve işe alım karar destek robotu.', en: 'CV scoring and recruitment decision support robot.', nl: 'CV-scoring en robot voor wervingsbeslissingen.' } },
      { icon: <Cpu />, text: { tr: 'Anomali tespiti: Beklenmedik giderlerde otomatik uyarı.', en: 'Anomaly detection: Automatic alert on unexpected expenses.', nl: 'Anomaliedetectie: Automatische waarschuwing bij onverwachte uitgaven.' } }
    ],
    notes: { tr: 'Yapay zeka katmanı maliyetleri optimize eder ve riskleri önceden tespit eder.', en: 'The AI layer optimizes costs and detects risks in advance.', nl: 'De AI-laag optimaliseert kosten en detecteert risico\'s vooraf.' }
  },
  {
    id: 12,
    type: 'content',
    bg: '/bg12.png',
    tag: { tr: 'DONANIM', en: 'HARDWARE', nl: 'HARDWARE' },
    title: { tr: 'Opsiyonel Entegrasyonlar', en: 'Optional Integrations', nl: 'Optionele Integraties' },
    subtitle: { tr: 'Sanal ve Fiziksel Dünyanın Birleşimi', en: 'Convergence of Virtual and Physical Worlds', nl: 'Convergentie van Virtuele en Fysieke Werelden' },
    items: [
      { icon: <CreditCard />, text: { tr: 'NFC Kart: Yetki ve görev kontrol sistemleri.', en: 'NFC Card: Authority and duty control systems.', nl: 'NFC-kaart: Bevoegdheids- en taakcontrolesystemen.' } },
      { icon: <PackageSearch />, text: { tr: 'Barkod & El Terminali: Hızlı depo süreçleri.', en: 'Barcode & Handheld Terminal: Fast warehouse processes.', nl: 'Barcode & Handheld Terminal: Snelle magazijnprocessen.' } },
      { icon: <Smartphone />, text: { tr: 'Yeni nesil Kasa/POS cihazı tam entegrasyonu.', en: 'Next-gen Reg/POS device full integration.', nl: 'Volledige integratie van nieuwe generatie Kassa/POS-apparaten.' } },
      { icon: <Video />, text: { tr: 'IP Kamera: Mağaza içi görüntüleme ve analiz.', en: 'IP Camera: In-store monitoring and analysis.', nl: 'IP-camera: Monitoring en analyse in de winkel.' } },
      { icon: <Fingerprint />, text: { tr: 'Personel devam kontrol sistemleri (PDKS).', en: 'Personnel attendance control systems (PDKS).', nl: 'Personeelsaanwezigheidscontrolesystemen.' } }
    ],
    notes: { tr: 'Esnek entegrasyon altyapısı sayesinde ek yatırım ihtiyacı minimize edilir.', en: 'Additional investment needs are minimized thanks to flexible integration infrastructure.', nl: 'De behoefte aan extra investeringen wordt geminimaliseerd dankzij een flexibele integratie-infrastructuur.' }
  },
  {
    id: 13,
    type: 'content',
    bg: '/bg13.png',
    tag: { tr: 'DEĞER ÖNERİSİ', en: 'VALUE PROPOSITION', nl: 'WAARDEVOORSTEL' },
    title: { tr: 'Sağladığı Faydalar', en: 'Key Benefits', nl: 'Belangrijkste Voordelen' },
    subtitle: { tr: 'Neden JUMBO CRM?', en: 'Why JUMBO CRM?', nl: 'Waarom JUMBO CRM?' },
    items: [
      { icon: <Award />, text: { tr: "%25'e varan operasyonel maliyet tasarrufu.", en: 'Operational cost savings up to 25%.', nl: 'Operationele kostenbesparingen tot 25%.' } },
      { icon: <Zap />, text: { tr: 'Süreçlerde hız ve manuel iş yükünde azalma.', en: 'Speed in processes and reduction in manual workload.', nl: 'Snelheid in processen en vermindering van handmatige werkbelasting.' } },
      { icon: <ShieldCheck />, text: { tr: 'Kurumsal hafıza ve şeffaf veri akışı.', en: 'Corporate memory and transparent data flow.', nl: 'Bedrijfsgeheugen en transparante gegevensstroom.' } },
      { icon: <TrendingUp />, text: { tr: 'Veriye dayalı yönetimle kârlılık artışı.', en: 'Profitability increase through data-driven management.', nl: 'Winststijging door datagestuurd beheer.' } },
      { icon: <CheckCircle2 />, text: { tr: 'İnsan hatalarının minimuma çekilmesi.', en: 'Minimization of human errors.', nl: 'Minimalisering van menselijke fouten.' } }
    ],
    notes: { tr: 'JUMBO CRM, operasyonel maliyetleri azaltırken verimliliği ve kârlılığı artırır.', en: 'JUMBO CRM increases efficiency and profitability while reducing operational costs.', nl: 'JUMBO CRM verhoogt efficiëntie en winstgevendheid terwijl de operationele kosten dalen.' }
  },
  {
    id: 14,
    type: 'content',
    bg: '/bg14.png',
    tag: { tr: 'ÖZET', en: 'SUMMARY', nl: 'SAMENVATTING' },
    title: { tr: 'Tek Platform – Tam Kontrol', en: 'Single Platform – Total Control', nl: 'Eén Platform – Totale Controle' },
    subtitle: { tr: 'Her Şey Tek Bir Çatı Altında', en: 'Everything Under One Roof', nl: 'Alles Onder Eén Dak' },
    items: [
      { icon: <LayoutDashboard />, text: { tr: 'Uçtan uca tüm departmanların entegrasyonu.', en: 'End-to-end integration of all departments.', nl: 'End-to-end integratie van alle afdelingen.' } },
      { icon: <Cpu />, text: { tr: 'Güçlü teknoloji ve yapay zeka altyapısı.', en: 'Powerful technology and AI infrastructure.', nl: 'Krachtige technologie en AI-infrastructuur.' } },
      { icon: <ShieldCheck />, text: { tr: 'Güvenli, ölçeklenebilir ve sürdürülebilir çözüm.', en: 'Secure, scalable, and sustainable solution.', nl: 'Veilige, schaalbare en duurzame oplossing.' } }
    ],
    notes: { tr: 'Tüm departmanların tek platformda entegre çalışması sürdürülebilir yönetim yapısı oluşturur.', en: 'Integrated operation of all departments creates a sustainable management structure.', nl: 'Geïntegreerde werking van alle afdelingen creëert een duurzame beheersstructuur.' }
  },
  {
    id: 15,
    type: 'cover',
    bg: '/bg15_1770937363955.jpg',
    tag: { tr: 'İLETİŞİM', en: 'CONTACT', nl: 'CONTACT' },
    title: { tr: 'Teşekkür Ederiz', en: 'Thank You', nl: 'Dank U Wel' },
    subtitle: { tr: 'Sorularınız ve Demo Talepleriniz İçin Buradayız', en: 'We Are Here for Your Questions and Demo Requests', nl: 'Wij Staan Klaar voor Uw Vragen en Demo-aanvragen' },
    author: 'SARFEA',
    date: 'February 2026',
    notes: { tr: 'Zaman ayırdığınız için teşekkürler.', en: 'Thank you for your time.', nl: 'Bedankt voor uw tijd.' }
  },
  {
    id: 16,
    type: 'content',
    bg: '/bg1.png',
    tag: { tr: 'ARAYÜZ ÖN İZLEME', en: 'INTERFACE PREVIEW', nl: 'INTERFACE VOORBEELD' },
    title: { tr: 'Kullanıcı Dostu Panel', en: 'User-Friendly Panel', nl: 'Gebruiksvriendelijk Paneel' },
    subtitle: { tr: 'Modern ve Erişilebilir Tasarım', en: 'Modern and Accessible Design', nl: 'Modern en Toegankelijk Ontwerp' },
    items: [
      { icon: <LayoutDashboard />, text: { tr: 'Kişiselleştirilebilir ana sayfa mizanpajı.', en: 'Customizable homepage layout.', nl: 'Aanpasbare lay-out van de startpagina.' } },
      { icon: <Zap />, text: { tr: 'Göz yormayan, yüksek kontrastlı dijital arayüz.', en: 'Eye-friendly, high-contrast digital interface.', nl: 'Oogvriendelijke, hoog-contrast digitale interface.' } },
      { icon: <Smartphone />, text: { tr: 'Her cihazdan (Tablet, PC, Mobil) kesintisiz erişim.', en: 'Seamless access from any device (Tablet, PC, Mobile).', nl: 'Naadloze toegang vanaf elk apparaat (Tablet, PC, Mobiel).' } },
      { icon: <CheckCircle2 />, text: { tr: 'Kullanıcı deneyimi (UX) odaklı hızlı işlem menüleri.', en: 'UX-focused fast action menus.', nl: 'UX-gerichte snelle actiemenu\'s.' } }
    ],
    notes: { tr: 'Sistemimizin arayüzü en karmaşık verileri bile sade sunacak şekilde tasarlanmıştır.', en: 'Our interface is designed to present even the most complex data simply.', nl: 'Onze interface is ontworpen om zelfs de meest complexe gegevens eenvoudig te presenteren.' }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } }
};

export function HaritaPresentation({ setActivePage }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [showInSlidePreview, setShowInSlidePreview] = useState(false);
  const [language, setLanguage] = useState('tr');
  const [showLangMenu, setShowLangMenu] = useState(false);

  // Helper for localization
  const t = (content) => {
    if (!content) return '';
    if (typeof content === 'string') return content;
    return content[language] || content['tr'];
  };

  // Preload Images
  useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.bg;
    });
    const previewImages = slides.map(s => s.previewImage).filter(Boolean);
    previewImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
      setShowInSlidePreview(false);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
      setShowInSlidePreview(false);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'n' || e.key === 'N') setShowNotes(prev => !prev);
      if (e.key === 'Escape') setActivePage('home');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, setActivePage]);

  const slide = slides[currentSlide];

  return (
    <div className={`harita-presentation-session`}>
      <button 
        className="close-harita" 
        onClick={() => setActivePage('home')}
        style={currentSlide === 15 ? { left: '2.5rem', right: 'auto' } : {}}
      >
         <img src="/sarfea_logo.png" alt="SARFEA Logo" style={{ height: '40px', width: 'auto' }} />
      </button>

      <div className={`presentation-container ${showNotes ? 'notes-active' : ''}`}>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`bg-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="background-overlay"
            style={{ 
              backgroundImage: slide.id === 16 ? 'none' : (slide.id === 15 
                ? `linear-gradient(rgba(5, 6, 10, 0.4), rgba(5, 6, 10, 0.6)), url(${slide.bg})`
                : `linear-gradient(rgba(5, 6, 10, 0.75), rgba(5, 6, 10, 0.85)), url(${slide.bg})`),
              backgroundColor: slide.id === 16 ? '#000' : 'transparent',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              filter: slide.id === 16 ? 'blur(15px) scale(1.1)' : 'none'
            }}
          />
        </AnimatePresence>

        <div className="glow-orb glow-1"></div>
        <div className="glow-orb glow-2"></div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="slide active"
            style={{ 
              zIndex: 10,
              background: 'transparent'
            }}
          >
            <div className="slide-content">
              {/* Language Selector Dropdown */}
              {currentSlide === 0 && (
                <div style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 1000 }}>
                  <button
                    onClick={() => setShowLangMenu(!showLangMenu)}
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      border: '1px solid rgba(255,255,255,0.2)',
                      padding: '0.6rem 1.2rem',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      backdropFilter: 'blur(5px)'
                    }}
                  >
                    <Globe size={18} /> 
                    {language === 'tr' ? 'TÜRKÇE' : language === 'en' ? 'ENGLISH' : 'NEDERLANDS'}
                    <ChevronDown size={14} style={{ opacity: 0.7 }} />
                  </button>
                  
                  <AnimatePresence>
                    {showLangMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          marginTop: '0.5rem',
                          background: 'rgba(20, 20, 30, 0.95)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          display: 'flex',
                          flexDirection: 'column',
                          minWidth: '140px',
                          backdropFilter: 'blur(10px)',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                        }}
                      >
                        {['tr', 'en', 'nl'].map(lang => (
                          <button
                            key={lang}
                            onClick={() => { setLanguage(lang); setShowLangMenu(false); }}
                            style={{
                              background: language === lang ? 'rgba(255,255,255,0.1)' : 'transparent',
                              color: language === lang ? 'var(--accent-primary)' : 'white',
                              border: 'none',
                              padding: '1rem 1.5rem',
                              cursor: 'pointer',
                              fontWeight: 500,
                              textTransform: 'uppercase',
                              textAlign: 'left',
                              width: '100%',
                              transition: 'background 0.2s'
                            }}
                          >
                            {lang === 'tr' ? 'Türkçe' : lang === 'en' ? 'English' : 'Nederlands'}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={(slide.id === 16) ? { display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' } : {}}
              >
                {slide.id !== 16 && (
                  <div className="text-side" style={{ position: 'relative' }}>
                    {slide.previewImage && (
                      <motion.button
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setShowInSlidePreview(!showInSlidePreview)}
                        style={{
                          position: 'absolute',
                          right: '-80px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '50%',
                          cursor: 'pointer',
                          color: 'rgba(255, 255, 255, 0.4)',
                          zIndex: 100,
                          padding: '0.4rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backdropFilter: 'blur(10px)'
                        }}
                        title={showInSlidePreview ? "Görseli Değiştir" : "Görseli Göster"}
                      >
                        {showInSlidePreview ? <ArrowRightCircle size={48} /> : <ArrowLeftCircle size={48} />}
                      </motion.button>
                    )}

                    <motion.span variants={itemVariants} className="tag">
                      {t(slide.tag)}
                    </motion.span>
                    
                    <motion.h1 
                      variants={itemVariants} 
                      style={slide.type !== 'cover' ? { fontSize: '3.5rem', textTransform: 'none', letterSpacing: '-1px' } : {}}
                    >
                      {t(slide.title)}
                    </motion.h1>

                    {slide.subtitle && (
                      <motion.p 
                        variants={itemVariants}
                        style={{ fontSize: '1.6rem', color: 'var(--accent-primary)', marginBottom: '3rem', fontWeight: 500 }}
                      >
                        {t(slide.subtitle)}
                      </motion.p>
                    )}

                    {slide.type === 'cover' ? (
                      <motion.div 
                        variants={containerVariants}
                        style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}
                      >
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', textAlign: 'left' }}>
                        {slide.items && slide.items.map((item, i) => (
                          <motion.div key={i} variants={itemVariants} style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ color: 'var(--accent-primary)' }}>{item.icon}</div>
                            <span style={{ fontSize: '1rem', fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>{t(item.text)}</span>
                          </motion.div>
                        ))}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div variants={itemVariants} className="glass-card">
                        <div className="grid-2">
                          {slide.items && slide.items.map((item, i) => (
                            <motion.div 
                              key={i} 
                              variants={itemVariants}
                              whileHover={{ x: 10, transition: { duration: 0.2 } }}
                              style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}
                            >
                              <div style={{ 
                                padding: '1.2rem', 
                                background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.1), rgba(79, 172, 254, 0.1))', 
                                border: '1px solid rgba(0, 242, 254, 0.2)', 
                                borderRadius: '20px', 
                                color: 'var(--accent-primary)',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                              }}>
                                {React.cloneElement(item.icon, { size: 28 })}
                              </div>
                              <div style={{ paddingTop: '0.4rem' }}>
                                <p style={{ color: 'white', fontWeight: 500, fontSize: '1.3rem', lineHeight: 1.4 }}>{t(item.text)}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Overlaid Dashboard Preview */}
                    <AnimatePresence>
                      {slide.previewImage && showInSlidePreview && (
                        <motion.div 
                          initial={{ x: 200, opacity: 0, scale: 0.9 }}
                          animate={{ x: 600, y: -180, opacity: 1, scale: 1 }}
                          exit={{ x: 200, opacity: 0, scale: 0.9 }}
                          transition={{ type: 'spring', damping: 25, stiffness: 120 }}
                          style={{ 
                            position: 'absolute', 
                            width: '850px',
                            zIndex: 200,
                            pointerEvents: 'none',
                            top: '50%'
                          }}
                        >
                          <img 
                            src={slide.previewImage} 
                            alt="Dashboard Preview" 
                            style={{ 
                              width: '100%', 
                              borderRadius: '32px', 
                              boxShadow: '0 50px 100px rgba(0,0,0,0.9)',
                              border: '2px solid rgba(255,255,255,0.1)',
                              backdropFilter: 'blur(20px)'
                            }} 
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {slide.id === 16 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{ 
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      width: '100vw', 
                      height: '100vh', 
                      zIndex: 5,
                      background: '#000'
                    }}
                  >
                    <iframe 
                      src="/jumbo-map/index.html" 
                      title="Jumbo Project" 
                      style={{ width: '100%', height: '100%', border: 'none' }}
                    />
                  </motion.div>
                )}

                {slide.type === 'cover' && slide.id === 15 && (
                   <div style={{ marginTop: '3rem', opacity: 0.7 }}>
                    <p style={{ fontSize: '1.2rem', color: '#fff' }}>{slide.author}</p>
                    <p style={{ fontSize: '1rem' }}>{slide.date}</p>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="nav-controls">
          <button 
            className="nav-btn" 
            onClick={() => setShowNotes(!showNotes)} 
            title="Konuşma Notları (N)"
            style={currentSlide === 15 ? { background: 'rgba(0, 0, 0, 0.8)', borderColor: 'rgba(255, 255, 255, 0.2)' } : {}}
          >
            <MessageSquare size={24} />
          </button>
          <button 
            className="nav-btn" 
            onClick={prevSlide} 
            disabled={currentSlide === 0}
            style={currentSlide === 15 ? { background: 'rgba(0, 0, 0, 0.8)', borderColor: 'rgba(255, 255, 255, 0.2)' } : {}}
          >
            <ChevronLeft size={32} />
          </button>
          <div style={{ 
            background: currentSlide === 15 ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.05)', 
            padding: '0 1.5rem', 
            height: '56px',
            borderRadius: '16px', 
            display: 'flex', 
            alignItems: 'center', 
            fontSize: '1rem', 
            fontWeight: 600,
            border: '1px solid var(--glass-border)',
            color: 'var(--accent-primary)',
            borderColor: currentSlide === 15 ? 'rgba(255, 255, 255, 0.2)' : 'var(--glass-border)'
          }}>
            {currentSlide + 1} <span style={{ opacity: 0.4, margin: '0 0.5rem' }}>/</span> {slides.length}
          </div>
          <button 
            className="nav-btn" 
            onClick={nextSlide} 
            disabled={currentSlide === slides.length - 1}
            style={currentSlide === 15 ? { background: 'rgba(0, 0, 0, 0.8)', borderColor: 'rgba(255, 255, 255, 0.2)' } : {}}
          >
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="progress-bar-harita" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />

        <AnimatePresence>
          {showNotes && (
            <motion.div 
              className="speak-notes"
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.9 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            >
              <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.2rem' }}>
                <MessageSquare size={20} /> 
                {language === 'tr' ? 'Sunum Notları' : language === 'en' ? 'Speaker Notes' : 'Sprekersnotities'}
              </h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.6', margin: 0, color: '#ddd' }}>{t(slide.notes)}</p>
            </motion.div>
          )}
        </AnimatePresence>
        

      </div>
    </div>
  );
}
