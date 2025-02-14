import { Crown, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { 
      to: '/comparazione', 
      text: t('footer.quickLinks.casinoComparison'),
      description: 'Confronta i migliori casinò online'
    },
    { 
      to: '/banking', 
      text: t('footer.quickLinks.paymentMethods'),
      description: 'Metodi di pagamento sicuri'
    },
    { 
      to: '/strategie', 
      text: t('footer.quickLinks.tipsAndStrategies'),
      description: 'Guide e strategie vincenti'
    },
    { 
      to: '/guadagni', 
      text: t('footer.quickLinks.onlineEarnings'),
      description: 'Opportunità di guadagno online'
    },
    { 
      to: '/news', 
      text: t('footer.quickLinks.blog'),
      description: 'Ultime notizie e aggiornamenti'
    }
  ];

  return (
    <footer className="relative mt-auto border-t border-white/10">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900 to-black pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-72 h-72 bg-pastel-purple/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -top-12 right-1/4 w-64 h-64 bg-pastel-pink/10 rounded-full blur-3xl animate-float delay-150" />
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
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1 rounded-full bg-white/5 px-6 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pastel-purple border border-white/10"
              />
              <Button variant="primary" className="flex items-center justify-center gap-2 whitespace-nowrap">
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
              <div className="flex items-center gap-2 mb-6 group">
                <div className="relative">
                  <Crown className="h-8 w-8 text-pastel-purple group-hover:text-pastel-pink transition-colors" />
                  <div className="absolute -bottom-1 w-full h-1 bg-gradient-to-r from-pastel-purple to-pastel-pink rounded-full opacity-75 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-pastel-purple to-pastel-pink bg-clip-text text-transparent">
                  Ludopathyland
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                {t('footer.description')}
              </p>
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, href: '#' },
                  { Icon: Twitter, href: '#' },
                  { Icon: Instagram, href: '#' },
                  { Icon: Youtube, href: '#' }
                ].map(({ Icon, href }, index) => (
                  <a 
                    key={index}
                    href={href}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all hover:scale-110 hover:shadow-pastel"
                    aria-label={`Follow us on ${Icon.name}`}
                  >
                    <Icon className="h-5 w-5 text-gray-400 hover:text-pastel-purple transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{t('footer.quickLinks.title')}</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.to}
                      className="group block p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all hover:shadow-pastel border border-transparent hover:border-pastel-purple/20"
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-pastel-purple group-hover:scale-125 transition-transform" />
                        <div className="flex-grow">
                          <div className="text-gray-200 group-hover:text-pastel-purple transition-colors font-medium">
                            {link.text}
                          </div>
                          <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                            {link.description}
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-pastel-purple group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{t('footer.support.title')}</h3>
              <ul className="space-y-4">
                {[
                  {
                    Icon: Mail,
                    href: `mailto:${t('footer.support.email.value')}`,
                    label: t('footer.support.email.label'),
                    value: t('footer.support.email.value')
                  },
                  {
                    Icon: Phone,
                    href: `tel:${t('footer.support.phone.value')}`,
                    label: t('footer.support.phone.label'),
                    value: t('footer.support.phone.value')
                  },
                  {
                    Icon: MapPin,
                    href: '#',
                    label: t('footer.support.location.label'),
                    value: t('footer.support.location.value')
                  }
                ].map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href}
                      className="flex items-center gap-3 text-gray-400 hover:text-pastel-purple transition-all p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:shadow-pastel group"
                    >
                      <item.Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-sm">{item.value}</div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">{t('footer.legal.title')}</h3>
              <ul className="space-y-4">
                {[
                  { to: '/privacy-policy', text: t('footer.legal.privacy') },
                  { to: '/terms-of-service', text: t('footer.legal.terms') },
                  { to: '/responsible-gaming', text: t('footer.legal.responsibleGaming') }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.to}
                      className="block p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-pastel-purple transition-all hover:shadow-pastel"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="container-responsive py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>{t('footer.bottom.copyright')}</p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { to: '/privacy-policy', text: t('footer.bottom.links.privacy') },
                { to: '/terms-of-service', text: t('footer.bottom.links.terms') },
                { to: '/responsible-gaming', text: t('footer.bottom.links.responsibleGaming') },
                { href: '#', text: t('footer.bottom.links.siteMap') }
              ].map((link, index) => (
                'to' in link ? (
                  <Link 
                    key={index}
                    to={link.to}
                    className="hover:text-pastel-purple transition-colors"
                  >
                    {link.text}
                  </Link>
                ) : (
                  <a 
                    key={index}
                    href={link.href}
                    className="hover:text-pastel-purple transition-colors"
                  >
                    {link.text}
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}