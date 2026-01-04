import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, keywords, image, url, type = "website", schemaData }) => {
  const siteTitle = "SARFEA | Dijital Dönüşüm, CRM, ERP & Yazılım Çözümleri";
  const defaultDescription = "Sarfea, işletmeniz için özel CRM, ERP, Mobil Uygulama ve Web Platformları kodlar. Dijital dönüşümde lider yazılım ortağınız.";
  const defaultKeywords = "crm yazılımı, erp sistemleri, dijital dönüşüm, özel yazılım geliştirme, kurumsal yazılım, mobil uygulama yapan firmalar, sarfea, yazılım teknolojileri, bulut tabanlı crm, işletme otomasyonu";
  const siteUrl = "https://sarfea.com.tr"; // Gerçek domain ile değiştirilmelidir
  const defaultImage = "https://sarfea.com.tr/og-image.jpg"; // Varsayılan paylaşım görseli

  const fullTitle = title ? `${title} | SARFEA` : siteTitle;
  const fullDescription = description || defaultDescription;
  const fullKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  const fullUrl = url ? `${siteUrl}/${url}` : siteUrl;
  const fullImage = image || defaultImage;

  return (
    <Helmet>
      {/* Temel Meta Etiketleri */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="SARFEA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullImage} />

      {/* Schema.org JSON-LD (Search Results'ta zengin içerik için) */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData || {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SARFEA",
          "url": siteUrl,
          "logo": "https://sarfea.com.tr/logo.png",
          "description": defaultDescription,
          "sameAs": [
            "https://www.linkedin.com/company/sarfea",
            "https://twitter.com/sarfea"
          ]
        })}
      </script>
    </Helmet>
  );
};
