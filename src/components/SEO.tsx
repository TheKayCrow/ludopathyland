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
  const fullUrl = url.startsWith('http') ? url : `https://ludopathyland.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://ludopathyland.com${image}`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />

      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
}