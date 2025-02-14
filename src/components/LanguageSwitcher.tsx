import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useCallback } from 'react';

const languages = {
  it: 'Italiano',
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  ru: 'Русский'
};

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = useCallback((code: string) => {
    i18n.changeLanguage(code).catch(console.error);
  }, [i18n]);

  return (
    <div className="relative group">
      <button 
        className="flex items-center gap-2 text-gray-400 hover:text-purple-400 min-h-[44px] px-3"
        aria-label="Select language"
      >
        <Globe className="h-5 w-5" />
        <span className="hidden md:inline">
          {languages[i18n.language as keyof typeof languages] || languages.it}
        </span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="py-1">
          {Object.entries(languages).map(([code, name]) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code)}
              className={`w-full text-left px-4 py-3 text-sm ${
                i18n.language === code 
                  ? 'bg-purple-500 text-white' 
                  : 'text-gray-300 hover:bg-gray-800'
              } transition-colors min-h-[44px]`}
              aria-label={`Change language to ${name}`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}