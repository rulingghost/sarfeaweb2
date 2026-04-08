/**
 * Hyper-Aggressive Programmatic SEO (pSEO) Engine
 * Expanded to cover almost all possible search intents.
 */

export const SEO_SERVICES = [
  
  { id: "crm", tr: "CRM", en: "CRM", ar: "CRM" },
  { id: "erp", tr: "ERP", en: "ERP", ar: "ERP" },
  { id: "mobile-app", tr: "Mobil Uygulama Geliştirme", en: "Mobile App Development", ar: "تطوير تطبيقات الجوال" },
  { id: "ai-integration", tr: "Yapay Zeka (AI) Entegrasyonu", en: "AI Integration", ar: "تكامل الذكاء الاصطناعي" },
  { id: "web-development", tr: "Web Yazılım ve Tasarım", en: "Web Development & Design", ar: "تطوير وتصميم الويب" },
  { id: "digital-transformation", tr: "Dijital Dönüşüm Danışmanlığı", en: "Digital Transformation Consulting", ar: "استشارات التحول الرقمi" },
  { id: "software-outsourcing", tr: "Yazılım Outsourcing", en: "Software Outsourcing", ar: "تعهيد البرمجيات" },
  { id: "saas-development", tr: "SaaS Geliştirme", en: "SaaS Development", ar: "تطوير SaaS" }
];

export const SEO_INDUSTRIES = [
  { id: "logistics", tr: "Lojistik & Depo", en: "Logistics & Warehouse", ar: "اللوجستيات والمستودعات" },
  { id: "construction", tr: "İnşaat & Gayrimenkul", en: "Construction & Real Estate", ar: "البناء والعقارات" },
  { id: "health", tr: "Sağlık & Medikal", en: "Health & Medical", ar: "الصحة والطب" },
  { id: "education", tr: "Eğitim & E-Learning", en: "Education & E-Learning", ar: "التعليم والتعلم الإلكتروني" },
  { id: "manufacturing", tr: "Üretim & Fabrika", en: "Manufacturing & Factory", ar: "التصنيع والمصانع" },
  { id: "retail", tr: "Perakende & Mağazacılık", en: "Retail & Commerce", ar: "التجزئة والتجارة" },
  { id: "finance", tr: "Finans & Fintech", en: "Finance & Fintech", ar: "المالية والتكنولوجيا المالية" },
  { id: "tourism", tr: "Turizm & Otel", en: "Tourism & Hotel", ar: "السياحة والفنادق" }
];

export const SEO_LOCATIONS = [
  { id: "istanbul", tr: "İstanbul", en: "Istanbul", ar: "اسطنبول" },
  { id: "ankara", tr: "Ankara", en: "Ankara", ar: "أنقرة" },
  { id: "izmir", tr: "İzmir", en: "Izmir", ar: "إزمير" },
  { id: "dubai", tr: "Dubai", en: "Dubai", ar: "دبي" },
  { id: "london", tr: "Londra", en: "London", ar: "لندن" },
  { id: "germany", tr: "Almanya", en: "Germany", ar: "ألمانيا" }
];

export const SEO_MODIFIERS = [
  { id: "best", tr: "En İyi", en: "Best", ar: "أفضل" },
  { id: "price", tr: "Fiyatları", en: "Prices", ar: "أسعار" },
  { id: "custom", tr: "Özel", en: "Custom", ar: "مخصص" },
  { id: "agency", tr: "Firması", en: "Agency", ar: "شركة" }
];

export const generateVirtualPosts = () => {
  const posts = [];
  let idCounter = 1000;
  const year = new Date().getFullYear();
  const nextYear = year + 1;

  // Generate for Industry + Service + Year
  SEO_INDUSTRIES.forEach(ind => {
    SEO_SERVICES.forEach(ser => {
      posts.push(createPost(idCounter++, ind, ser, null, nextYear));
    });
  });

  // Generate for Location + Service
  SEO_LOCATIONS.forEach(loc => {
    SEO_SERVICES.forEach(ser => {
      posts.push(createPost(idCounter++, null, ser, loc, nextYear));
    });
  });

  return posts;
};

function createPost(id, ind, ser, loc, year) {
  const industryPart = ind ? ind.tr : "";
  const locationPart = loc ? loc.tr : "";
  const servicePart = ser.tr;
  
  const titleTr = `${locationPart} ${industryPart} ${servicePart} Çözümleri ${year}`;
  const titleEn = `${ser.en} Solutions for ${ind ? ind.en : ""} ${loc ? "in " + loc.en : ""} ${year}`;
  
  return {
    id,
    slug: `${ind ? ind.id + "-" : ""}${ser.id}${loc ? "-" + loc.id : ""}-${year}`,
    isVirtual: true,
    date: new Date().toISOString().split('T')[0],
    industry: ind || { tr: "Kurumsal", en: "Corporate" },
    service: ser,
    location: loc,
    title: { tr: titleTr.trim(), en: titleEn.trim() },
    excerpt: {
      tr: `${titleTr} ile işletmenizin dijital süreçlerini optimize edin. 2025 teknolojileriyle tanışın.`,
      en: `Optimize your business processes with ${titleEn}. Meet 2025 technologies.`
    },
    tags: ["2025", ser.en, ind ? ind.en : "Global"],
    image: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800`
  };
}
