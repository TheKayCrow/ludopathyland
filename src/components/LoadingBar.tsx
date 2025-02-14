import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function LoadingBar() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-red-500 animate-loading-bar" />
    </div>
  );
}