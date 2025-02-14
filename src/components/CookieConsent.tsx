import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';

interface CookieConsentProps {
  onPrivacyClick: () => void;
}

export function CookieConsent({ onPrivacyClick }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }

    // Detect user's country and set language
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        const countryToLang: { [key: string]: string } = {
          'IT': 'it',
          'GB': 'en',
          'US': 'en',
          'ES': 'es',
          'FR': 'fr',
          'DE': 'de',
          'RU': 'ru'
        };
        const detectedLang = countryToLang[data.country_code] || 'en';
        if (!localStorage.getItem('i18nextLng')) {
          i18n.changeLanguage(detectedLang);
        }
      })
      .catch(console.error);
  }, [i18n]);

  const handleAccept = (all: boolean) => {
    localStorage.setItem('cookieConsent', all ? 'all' : 'necessary');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-gray-900/95 backdrop-blur-lg border-t border-white/10">
        <div className="container-responsive py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-gray-300 text-center md:text-left">
              <p className="mb-2">
                {t('cookies.message')}{' '}
                <button
                  onClick={onPrivacyClick}
                  className="text-pastel-purple hover:text-pastel-pink transition-colors underline"
                >
                  {t('cookies.privacyPolicy')}
                </button>
              </p>
              <p className="text-sm text-gray-400">
                {t('cookies.description')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleAccept(false)}
                className="whitespace-nowrap"
              >
                {t('buttons.acceptNecessary')}
              </Button>
              <Button 
                variant="primary" 
                size="sm" 
                onClick={() => handleAccept(true)}
                className="whitespace-nowrap"
              >
                {t('buttons.acceptAll')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}