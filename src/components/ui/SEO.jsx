import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = "SARFEA - Dijital Dönüşüm & Yazılım Teknolojileri";
  const defaultDescription = "Sarfea - Dijital Dönüşüm, Yazılım, ERP, CRM, Mobil Uygulama ve Yapay Zeka Çözümleri.";
  const defaultKeywords = "yazılım, dijital dönüşüm, erp, crm, yapay zeka, web tasarım";
  const siteUrl = "https://sarfea.com";

  return (
    <Helmet>
      <title>{title ? `${title} | SARFEA` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:title" content={title ? `${title} | SARFEA` : siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || siteUrl} />
      <meta property="twitter:title" content={title ? `${title} | SARFEA` : siteTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      {image && <meta property="twitter:image" content={image} />}
      
      <link rel="canonical" href={url || siteUrl} />
    </Helmet>
  );
};
