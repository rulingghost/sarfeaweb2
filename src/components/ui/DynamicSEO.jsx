import React, { useMemo } from 'react';
import { SEO } from './SEO';

/**
 * DynamicSEO component that automatically generates SEO tags based on page and language
 * This is designed to satisfy the "automatic" SEO requirement and align with SEO trends.
 */
export const DynamicSEO = ({ activePage, language, t, extraMetadata = {} }) => {
  const seoData = useMemo(() => {
    const baseUrl = "https://sarfea.com"; // Replace with your actual domain
    
    // Core keywords used for ranking in trending searches
    const trendingBoost = [
      "2024", "2025", "en iyi", "fiyatları", "ücretsiz analiz", 
      "bulut tabanlı", "yapay zeka destekli", "hızlı", "güvenilir"
    ].join(", ");

    // Page mapping logic
    const pageConfigs = {
      home: {
        title: t.hero?.title_prefix + " " + t.hero?.title_suffix,
        description: t.hero?.description,
        keywords: `crm yazılımı, erp sistemleri, yazılım firması, dijital dönüşüm, ${trendingBoost}`,
        url: "",
      },
      solutions: {
        title: t.solutions_page?.title,
        description: t.solutions_page?.subtitle,
        keywords: `yazılım çözümleri, mobil uygulama, e-ticaret altyapısı, sistem entegrasyonu, ${trendingBoost}`,
        url: "solutions",
      },
      process: {
        title: t.process_page?.title,
        description: t.process_page?.subtitle,
        keywords: `yazılım geliştirme süreci, agile development, çevik yazılım, proje aşamaları, ${trendingBoost}`,
        url: "process",
      },
      about: {
        title: t.about_page?.title,
        description: t.about_page?.subtitle,
        keywords: `sarfea hakkında, biz kimiz, vizyon misyon, yazılım ekibi, ${trendingBoost}`,
        url: "about",
      },
      contact: {
        title: t.contact_page?.title,
        description: t.contact_page?.subtitle,
        keywords: `iş birliği, yazılım teklifi al, crm fiyat al, erp uzmanı, iletişim, ${trendingBoost}`,
        url: "contact",
      },
      blog: {
        title: t.blog_page?.title,
        description: t.blog_page?.subtitle,
        keywords: `teknoloji haberleri, yazılım dünyası, dijital trendler, crm rehberi, erp ipuçları, ${trendingBoost}`,
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
          "name": "SARFEA",
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.png`,
            "width": 600,
            "height": 60
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+90-212-XXX-XXXX", // Fill with real phone
            "contactType": "customer service",
            "areaServed": "TR",
            "availableLanguage": ["Turkish", "English", "Arabic"]
          }
        },
        {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          "url": baseUrl,
          "name": "SARFEA Yazılım Teknolojileri",
          "publisher": { "@id": `${baseUrl}/#organization` },
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${baseUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": { "@id": baseUrl, "name": t.navbar?.home }
            },
            ...(activePage !== 'home' ? [{
              "@type": "ListItem",
              "position": 2,
              "item": { "@id": `${baseUrl}/${activePage}`, "name": currentConfig.title }
            }] : [])
          ]
        }
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
