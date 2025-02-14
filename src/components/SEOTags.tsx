import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  author?: string;
}

export function SEOTags({
  title = 'Ludopathyland - Guide e Recensioni Casinò Online',
  description = 'La tua guida completa al mondo dei casinò online, strategie e guadagno intelligente. Confronta bonus e trova i migliori casinò.',
  keywords = 'casinò online, bonus casinò, recensioni casinò, strategie gioco, guadagno online',
  image = '/og-image.jpg',
  type = 'website',
  author = 'Ludopathyland'
}: SEOTagsProps) {
  const location = useLocation();
  const canonicalUrl = `https://ludopathyland.com${location.pathname}`;
  const fullTitle = title.includes('Ludopathyland') ? title : `${title} | Ludopathyland`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image.startsWith('http') ? image : `https://ludopathyland.com${image}`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Ludopathyland" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : `https://ludopathyland.com${image}`} />

      {/* Preload Critical Resources */}
      <link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      
      {/* PWA Meta Tags */}
      <meta name="theme-color" content="#1a1a1a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Ludopathyland" />

      {/* Preload Next Pages */}
      {location.pathname === '/' && (
        <>
          <link rel="preload" href="/comparazione" as="document" />
          <link rel="preload" href="/guide" as="document" />
        </>
      )}
    </Helmet>
  );
}