import { Crown, Menu, X, Sparkles, Bitcoin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Button } from './Button';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-lg border-b border-pastel-purple/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Crown className="h-8 w-8 text-pastel-purple group-hover:text-pastel-pink transition-colors" />
            <Sparkles className="absolute -top-2 -right-2 h-4 w-4 text-pastel-yellow animate-bounce-slow" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-pastel-purple to-pastel-pink bg-clip-text text-transparent">
            Ludopathyland
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/comparazione" className="hover:text-pastel-purple transition-colors">{t('nav.casinos')}</Link>
          <Link to="/guide" className="hover:text-pastel-purple transition-colors">{t('nav.guides')}</Link>
          <Link to="/strategie" className="hover:text-pastel-purple transition-colors">{t('nav.strategies')}</Link>
          <Link to="/banking" className="hover:text-pastel-purple transition-colors">{t('nav.banking')}</Link>
          <Link to="/crypto" className="hover:text-pastel-purple transition-colors flex items-center gap-1">
            <Bitcoin className="h-4 w-4" />
            Crypto
          </Link>
          <Link to="/guadagni" className="hover:text-pastel-purple transition-colors">{t('nav.earnings')}</Link>
          <Link to="/news" className="hover:text-pastel-purple transition-colors">{t('nav.news')}</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Button variant="outline" size="sm">{t('nav.login')}</Button>
          <Button variant="primary" size="sm">{t('nav.register')}</Button>
        </div>

        <button 
          className="md:hidden p-2 hover:bg-pastel-purple/5 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-lg">
          <div className="p-4 space-y-4">
            <Link 
              to="/comparazione" 
              className="block p-4 hover:bg-pastel-purple/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.casinos')}
            </Link>
            <Link 
              to="/guide" 
              className="block p-4 hover:bg-pastel-purple/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.guides')}
            </Link>
            <Link 
              to="/strategie" 
              className="block p-4 hover:bg-pastel-purple/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.strategies')}
            </Link>
            <Link 
              to="/banking" 
              className="block p-4 hover:bg-pastel-purple/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.banking')}
            </Link>
            <Link 
              to="/crypto" 
              className="block p-4 hover:bg-pastel-purple/10 rounded-lg transition-colors flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Bitcoin className="h-4 w-4" />
              Crypto
            </Link>
            <Link 
              to="/guadagni" 
              className="block p-4 hover:bg-pastel-purple/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.earnings')}
            </Link>
            <Link 
              to="/news" 
              className="block p-4 hover:bg-pastel-purple/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.news')}
            </Link>

            <div className="p-4 space-y-4">
              <LanguageSwitcher />
              <Button variant="outline" className="w-full">{t('nav.login')}</Button>
              <Button variant="primary" className="w-full">{t('nav.register')}</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}