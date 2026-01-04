/**
 * Programmatic SEO (pSEO) Building Blocks
 * These are used to generate thousands of unique, search-indexed "fuel" content.
 */

export const SEO_SERVICES = [
  { id: "crm", tr: "CRM", en: "CRM", ar: "CRM" },
  { id: "erp", tr: "ERP", en: "ERP", ar: "ERP" },
  { id: "mobile-app", tr: "Mobil Uygulama", en: "Mobile App", ar: "تطبيق جوال" },
  { id: "ai-integration", tr: "Yapay Zeka Entegrasyonu", en: "AI Integration", ar: "تكامل الذكاء الاصطناعي" },
  { id: "web-development", tr: "Web Yazılım", en: "Web Development", ar: "تطوير الويب" },
  { id: "digital-transformation", tr: "Dijital Dönüşüm", en: "Digital Transformation", ar: "التحول الرقمي" }
];

export const SEO_INDUSTRIES = [
  { id: "logistics", tr: "Lojistik", en: "Logistics", ar: "اللوجستيات" },
  { id: "construction", tr: "İnşaat", en: "Construction", ar: "البناء" },
  { id: "health", tr: "Sağlık", en: "Health", ar: "الصحة" },
  { id: "education", tr: "Eğitim", en: "Education", ar: "التعليم" },
  { id: "manufacturing", tr: "Üretim", en: "Manufacturing", ar: "التصنيع" },
  { id: "retail", tr: "Perakende", en: "Retail", ar: "التجزئة" },
  { id: "finance", tr: "Finans", en: "Finance", ar: "المالية" },
  { id: "tourism", tr: "Turizm", en: "Tourism", ar: "السياحة" }
];

export const SEO_MODIFIERS = [
  { id: "solutions", tr: "Çözümleri", en: "Solutions", ar: "حلول" },
  { id: "systems", tr: "Sistemleri", en: "Systems", ar: "أنظمة" },
  { id: "software", tr: "Yazılımları", en: "Software", ar: "برمجيات" }
];

/**
 * Generate a large set of "Virtual Blog Posts" for indexing
 */
export const generateVirtualPosts = () => {
  const posts = [];
  let idCounter = 1000;

  SEO_INDUSTRIES.forEach(industry => {
    SEO_SERVICES.forEach(service => {
      const year = new Date().getFullYear() + 1; // Trending for the coming year
      const slug = `${industry.id}-${service.id}-solutions-${year}`;
      
      posts.push({
        id: idCounter++,
        slug: slug,
        isVirtual: true,
        date: new Date().toISOString().split('T')[0],
        industry: industry,
        service: service,
        title: {
          tr: `${industry.tr} Sektörü İçin En İyi ${service.tr} ${year}`,
          en: `Best ${service.en} for ${industry.en} Industry ${year}`,
          ar: `أفضل ${service.ar} لقطاع ${industry.ar} ${year}`
        },
        excerpt: {
          tr: `${industry.tr} sektöründe faaliyet gösteren işletmeler için özel olarak geliştirilmiş, ${year} yılının en güncel ${service.tr} trendleri ve çözümleri.`,
          en: `Specially developed ${service.en} trends and solutions for ${industry.en} industry businesses in ${year}.`,
          ar: `اتجahat وحلول ${service.ar} المحدثة لعام ${year} المخصصة للشركات العاملة في قطاع ${industry.ar}.`
        },
        tags: [industry.en, service.en, "2025", "Enterprise"],
        image: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800`
      });
    });
  });

  return posts;
};
