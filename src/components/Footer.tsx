import { Crown, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative border-t border-white/10">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-72 h-72 bg-pastel-purple/20 rounded-full blur-3xl" />
        <div className="absolute -top-12 right-1/4 w-64 h-64 bg-pastel-pink/20 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Newsletter Section */}
        <div className="container-responsive py-16 border-b border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pastel-purple to-pastel-pink bg-clip-text text-transparent">
              {t('footer.newsletter.title')}
            </h2>
            <p className="text-gray-400 mb-8">
              {t('footer.newsletter.description')}
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1 rounded-lg bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pastel-purple border border-white/10"
              />
              <Button variant="primary" className="flex items-center gap-2">
                {t('footer.newsletter.button')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container-responsive py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="relative">
                  <Crown className="h-8 w-8 text-pastel-purple" />
                  <div className="absolute -bottom-1 w-full h-1 bg-gradient-to-r from-pastel-purple to-pastel-pink rounded-full" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-pastel-purple to-pastel-pink bg-clip-text text-transparent">
                  Ludopathyland
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                {t('footer.description')}
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <Facebook className="h-5 w-5 text-gray-400 hover:text-pastel-purple transition-colors" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <Twitter className="h-5 w-5 text-gray-400 hover:text-pastel-purple transition-colors" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <Instagram className="h-5 w-5 text-gray-400 hover:text-pastel-purple transition-colors" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <Youtube className="h-5 w-5 text-gray-400 hover:text-pastel-purple transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{t('footer.quickLinks.title')}</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/comparazione" className="text-gray-400 hover:text-pastel-purple transition-colors flex items-center gap-2 group">
                    <span className="h-1 w-1 rounded-full bg-pastel-purple group-hover:w-2 transition-all" />
                    {t('footer.quickLinks.casinoComparison')}
                  </Link>
                </li>
                <li>
                  <Link to="/banking" className="text-gray-400 hover:text-pastel-purple transition-colors flex items-center gap-2 group">
                    <span className="h-1 w-1 rounded-full bg-pastel-purple group-hover:w-2 transition-all" />
                    {t('footer.quickLinks.paymentMethods')}
                  </Link>
                </li>
                <li>
                  <Link to="/strategie" className="text-gray-400 hover:text-pastel-purple transition-colors flex items-center gap-2 group">
                    <span className="h-1 w-1 rounded-full bg-pastel-purple group-hover:w-2 transition-all" />
                    {t('footer.quickLinks.tipsAndStrategies')}
                  </Link>
                </li>
                <li>
                  <Link to="/guadagni" className="text-gray-400 hover:text-pastel-purple transition-colors flex items-center gap-2 group">
                    <span className="h-1 w-1 rounded-full bg-pastel-purple group-hover:w-2 transition-all" />
                    {t('footer.quickLinks.onlineEarnings')}
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-gray-400 hover:text-pastel-purple transition-colors flex items-center gap-2 group">
                    <span className="h-1 w-1 rounded-full bg-pastel-purple group-hover:w-2 transition-all" />
                    {t('footer.quickLinks.blog')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{t('footer.support.title')}</h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href={`mailto:${t('footer.support.email.value')}`}
                    className="flex items-center gap-3 text-gray-400 hover:text-pastel-purple transition-colors p-2 rounded-lg bg-white/5 hover:bg-white/10"
                  >
                    <Mail className="h-4 w-4" />
                    <div>
                      <div className="font-medium">{t('footer.support.email.label')}</div>
                      <div className="text-sm">{t('footer.support.email.value')}</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href={`tel:${t('footer.support.phone.value')}`}
                    className="flex items-center gap-3 text-gray-400 hover:text-pastel-purple transition-colors p-2 rounded-lg bg-white/5 hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4" />
                    <div>
                      <div className="font-medium">{t('footer.support.phone.label')}</div>
                      <div className="text-sm">{t('footer.support.phone.value')}</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="#"
                    className="flex items-center gap-3 text-gray-400 hover:text-pastel-purple transition-colors p-2 rounded-lg bg-white/5 hover:bg-white/10"
                  >
                    <MapPin className="h-4 w-4" />
                    <div>
                      <div className="font-medium">{t('footer.support.location.label')}</div>
                      <div className="text-sm">{t('footer.support.location.value')}</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{t('footer.legal.title')}</h3>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/privacy-policy" 
                    className="block p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-pastel-purple transition-colors"
                  >
                    {t('footer.legal.privacy')}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/terms-of-service" 
                    className="block p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-pastel-purple transition-colors"
                  >
                    {t('footer.legal.terms')}
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/responsible-gaming" 
                    className="block p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-pastel-purple transition-colors"
                  >
                    {t('footer.legal.responsibleGaming')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="container-responsive py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>{t('footer.bottom.copyright')}</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy-policy" className="hover:text-pastel-purple transition-colors">
                {t('footer.bottom.links.privacy')}
              </Link>
              <Link to="/terms-of-service" className="hover:text-pastel-purple transition-colors">
                {t('footer.bottom.links.terms')}
              </Link>
              <Link to="/responsible-gaming" className="hover:text-pastel-purple transition-colors">
                {t('footer.bottom.links.responsibleGaming')}
              </Link>
              <a href="#" className="hover:text-pastel-purple transition-colors">
                {t('footer.bottom.links.siteMap')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}