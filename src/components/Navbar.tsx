import { Crown, Menu, X, Sparkles, Bitcoin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Button } from './Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/comparazione", text: t('nav.casinos') },
    { to: "/guide", text: t('nav.guides') },
    { to: "/strategie", text: t('nav.strategies') },
    { to: "/banking", text: t('nav.banking') },
    { 
      to: "/crypto", 
      text: "Crypto",
      icon: <Bitcoin className="h-4 w-4" />
    },
    { to: "/guadagni", text: t('nav.earnings') },
    { to: "/news", text: t('nav.news') }
  ];

  return (
    <nav 
      id="nav"
      className="fixed top-0 z-50 w-full bg-gray-900/95 backdrop-blur-lg border-b border-white/10"
    >
      <div className="mx-auto flex h-[73px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="flex items-center gap-2 group"
          aria-label="Ludopathyland Home"
        >
          <div className="relative">
            <Crown className="h-8 w-8 text-pastel-purple group-hover:text-pastel-pink transition-colors" />
            <Sparkles className="absolute -top-2 -right-2 h-4 w-4 text-pastel-yellow animate-bounce-slow" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-pastel-purple to-pastel-pink bg-clip-text text-transparent">
            Ludopathyland
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex items-center gap-1 text-gray-300 hover:text-pastel-purple transition-colors relative group"
            >
              {link.icon}
              {link.text}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pastel-purple transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Button variant="outline" size="sm">{t('nav.login')}</Button>
          <Button variant="primary" size="sm">{t('nav.register')}</Button>
        </div>

        <button 
          className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-[73px] bg-gray-900/95 backdrop-blur-lg"
          >
            <div className="p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-2 p-4 hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon}
                  {link.text}
                </Link>
              ))}

              <div className="p-4 space-y-4">
                <LanguageSwitcher />
                <Button variant="outline" className="w-full">{t('nav.login')}</Button>
                <Button variant="primary" className="w-full">{t('nav.register')}</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}