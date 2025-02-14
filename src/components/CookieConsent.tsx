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
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-white/10 p-4 backdrop-blur-lg z-50">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300 text-center md:text-left">
          {t('cookies.message')}{' '}
          <button
            onClick={onPrivacyClick}
            className="text-purple-400 hover:text-purple-300 underline"
          >
            {t('cookies.privacyPolicy')}
          </button>
        </p>
        <div className="flex gap-4">
          <Button variant="outline" size="sm" onClick={() => handleAccept(false)}>
            {t('buttons.acceptNecessary')}
          </Button>
          <Button variant="primary" size="sm" onClick={() => handleAccept(true)}>
            {t('buttons.acceptAll')}
          </Button>
        </div>
      </div>
    </div>
  );
}