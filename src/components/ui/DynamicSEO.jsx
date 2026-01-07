import React, { useMemo } from 'react';
import { SEO } from './SEO';

/**
 * DynamicSEO component that automatically generates SEO tags based on page and language
 * This is designed to satisfy the "automatic" SEO requirement and align with SEO trends.
 */
export const DynamicSEO = ({ activePage, language, t, extraMetadata = {} }) => {
  const seoData = useMemo(() => {
    const baseUrl = "https://sarfea.com.tr"; // Replace with your actual domain
    
    // Core keywords used for ranking in trending searches
    // Core keywords used for ranking in trending searches
    const trendingBoost = [
      "2024", "2025", "en iyi", "fiyatları", "ücretsiz analiz", 
      "bulut tabanlı", "yapay zeka destekli", "hızlı", "güvenilir",
      "İstanbul yazılım firmaları", "CRM yazılımı", "ERP sistemleri", "Mobil uygulama geliştirme"
    ].join(", ");

    // Page mapping logic
    const pageConfigs = {
      home: {
        title: "SARFEA | " + t.hero?.title_prefix + " " + t.hero?.title_suffix,
        description: "İstanbul merkezli SARFEA Yazılım; işletmeniz için özel CRM, ERP, Mobil Uygulama ve Web Yazılım çözümleri üretir. Dijital dönüşümde güvenilir ortağınız.",
        keywords: `yazılım firması, istanbul yazılım, crm yazılımı, erp sistemleri, dijital dönüşüm danışmanlığı, ${trendingBoost}`,
        url: "",
      },
      solutions: {
        title: t.solutions_page?.title + " | Kurumsal Çözümler",
        description: "İşletmenizi geleceğe taşıyacak CRM, ERP, Mobil Uygulama ve E-Ticaret altyapıları. SARFEA ile dijitalleşin ve verimliliğinizi artırın.",
        keywords: `yazılım çözümleri, mobil uygulama geliştirme, e-ticaret yazılımı, sistem entegrasyonu, crm sistemleri, ${trendingBoost}`,
        url: "solutions",
      },
      process: {
        title: t.process_page?.title + " | Nasıl Çalışıyoruz?",
        description: "Yazılım geliştirme sürecimiz: Analizden yayına kadar şeffaf, çevik (Agile) ve kalite odaklı bir yaklaşım. Projenizi profesyonel ellerle hayata geçirin.",
        keywords: `yazılım süreci, proje yönetimi, agile yazılım geliştirme, yazılım danışmanlığı, ${trendingBoost}`,
        url: "process",
      },
      about: {
        title: t.about_page?.title + " | Biz Kimiz?",
        description: "SARFEA Yazılım Teknolojileri olarak vizyonumuz; kurumların dijital kaslarını güçlendirmek. Ekibimiz ve değerlerimiz hakkında daha fazla bilgi edinin.",
        keywords: `sarfea yazılım, yazılım ekibi, kurumsal profil, teknoloji vizyonu, istanbul yazılım şirketleri, ${trendingBoost}`,
        url: "about",
      },
      contact: {
        title: t.contact_page?.title + " | Teklif Alın",
        description: "Projeniz için ücretsiz analiz ve fiyat teklifi alın. SARFEA uzmanlarıyla iletişime geçin, dijital yolculuğunuzu başlatalım.",
        keywords: `yazılım teklifi al, crm fiyatları, erp danışmanlığı, iletişim, yazılım ajansı, ${trendingBoost}`,
        url: "contact",
      },
      blog: {
        title: "Teknoloji Rehberi & Blog | SARFEA",
        description: "CRM, ERP, Yapay Zeka ve dijital dönüşüm dünyasından en güncel haberler, ipuçları ve sektörel rehberler.",
        keywords: `teknoloji blogu, yazılım makaleleri, crm rehberi, erp ipuçları, dijital trendler 2025, ${trendingBoost}`,
        url: "blog",
      }
    };

    const currentConfig = pageConfigs[activePage] || pageConfigs.home;

    // Automated JSON-LD Schema generation
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
          "name": "SARFEA Yazılım Teknolojileri A.Ş.",
          "alternateName": "Sarfea Software",
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.png`,
            "width": 512,
            "height": 512
          },
          "image": `${baseUrl}/logo.png`,
          "description": "Özel yazılım geliştirme, CRM ve ERP çözümleri sunan teknoloji firması.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Istanbul",
            "addressCountry": "TR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+90-501-571-5767",
            "contactType": "sales",
            "areaServed": "Global",
            "availableLanguage": ["Turkish", "English", "Arabic"]
          },
          "sameAs": [
            "https://www.linkedin.com/company/sarfea",
            "https://www.instagram.com/sarfeayazilim",
            "https://twitter.com/sarfea"
          ]
        },
        {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          "url": baseUrl,
          "name": "SARFEA",
          "publisher": { "@id": `${baseUrl}/#organization` }
        },
        {
          "@type": "WebPage",
          "@id": `${baseUrl}/${activePage}#webpage`,
          "url": `${baseUrl}/${activePage}`,
          "name": currentConfig.title,
          "isPartOf": { "@id": `${baseUrl}/#website` },
          "description": currentConfig.description,
          "inLanguage": language === 'tr' ? 'tr-TR' : 'en-US'
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": { "@id": baseUrl, "name": t.navbar?.home || "Ana Sayfa" }
            },
            ...(activePage !== 'home' ? [{
              "@type": "ListItem",
              "position": 2,
              "item": { "@id": `${baseUrl}/${activePage}`, "name": currentConfig.title }
            }] : [])
          ]
        },
        // FAQ Schema for Home Page
        ...(activePage === 'home' ? [{
          "@type": "FAQPage",
          "mainEntity": (t.faq?.questions || []).map(q => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          }))
        }] : []),
        // Service Schema for Solutions Page
        ...(activePage === 'solutions' ? (t.solutions_page?.items || []).map((item, idx) => ({
          "@type": "Service",
          "name": item.title,
          "description": item.desc,
          "provider": { "@id": `${baseUrl}/#organization` }
        })) : [])
      ]
    };

    return {
      ...currentConfig,
      ...extraMetadata,
      schemaData
    };
  }, [activePage, language, t, extraMetadata]);

  return (
    <SEO 
      title={seoData.title}
      description={seoData.description}
      keywords={seoData.keywords}
      url={seoData.url}
      schemaData={seoData.schemaData}
      {...extraMetadata}
    />
  );
};
