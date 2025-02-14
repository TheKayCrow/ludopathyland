import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

export function LazyImage({ src, alt, fallbackSrc = 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&q=80&w=600', className, ...props }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '50px 0px'
  });

  useEffect(() => {
    if (inView && !loaded) {
      const img = new Image();
      img.src = src;
      img.onload = () => setLoaded(true);
      img.onerror = () => setError(true);
    }
  }, [inView, src, loaded]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} {...props}>
      {/* Skeleton loader */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}
      
      {/* Actual image */}
      <img
        src={error ? fallbackSrc : (inView ? src : '')}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onError={() => setError(true)}
      />
    </div>
  );
}