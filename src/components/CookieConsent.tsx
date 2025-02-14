import { useState, useEffect } from 'react';
import { Button } from './Button';

interface CookieConsentProps {
  onPrivacyClick: () => void;
}

export function CookieConsent({ onPrivacyClick }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-white/10 p-4 backdrop-blur-lg z-50">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300 text-center md:text-left">
          Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. 
          Continuando a navigare, accetti la nostra{' '}
          <button
            onClick={onPrivacyClick}
            className="text-purple-400 hover:text-purple-300 underline"
          >
            Privacy Policy
          </button>
          .
        </p>
        <div className="flex gap-4">
          <Button variant="outline" size="sm" onClick={handleAccept}>
            Accetta Tutti
          </Button>
          <Button variant="primary" size="sm" onClick={handleAccept}>
            Accetta Necessari
          </Button>
        </div>
      </div>
    </div>
  );
}