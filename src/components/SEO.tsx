import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function SEO({ 
  title = 'Ludopathyland - Guide e Recensioni Casinò Online',
  description = 'La tua guida completa al mondo dei casinò online, strategie e guadagno intelligente. Confronta bonus e trova i migliori casinò.',
  keywords = 'casinò online, bonus casinò, recensioni casinò, strategie gioco, guadagno online',
  image = '/og-image.jpg',
  url = 'https://ludopathyland.com'
}: SEOProps) {
  const fullTitle = title.includes('Ludopathyland') ? title : `${title} | Ludopathyland`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
}