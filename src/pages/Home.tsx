import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CasinoList } from '../components/CasinoList';
import { TricksSection } from '../components/TricksSection';
import { EarningsSection } from '../components/EarningsSection';
import { BlogSection } from '../components/BlogSection';
import { BankingSection } from '../components/BankingSection';
import { featuredCasinos } from '../data/casinos';
import { Button } from '../components/Button';
import { Shield, Zap, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const { t } = useTranslation();
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Shield,
      title: "Casinò Verificati",
      description: "Solo casinò con licenza AAMS/ADM, garantendo massima sicurezza e affidabilità",
      link: "/comparazione"
    },
    {
      icon: Zap,
      title: "Bonus Esclusivi",
      description: "Offerte e promozioni esclusive negoziate direttamente con i migliori casinò",
      link: "/comparazione"
    },
    {
      icon: Trophy,
      title: "Guide Esperte",
      description: "Strategie e consigli da professionisti per massimizzare le tue vincite",
      link: "/guide"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-73px)] flex items-center justify-center bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 left-1/4 w-72 h-72 bg-pastel-purple/20 rounded-full blur-3xl animate-float" />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pastel-pink/20 rounded-full blur-3xl animate-float" />
        </div>

        <div className="container-responsive py-20 relative">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl font-bold leading-tight md:text-6xl mb-6">
              {t('home.hero.title')}{' '}
              <span className="bg-gradient-to-r from-pastel-purple to-pastel-pink bg-clip-text text-transparent">
                Ludopathyland
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/comparazione">
                <Button variant="primary" size="lg" className="min-w-[200px] flex items-center gap-2">
                  Inizia Ora
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/guide">
                <Button variant="outline" size="lg" className="min-w-[200px]">
                  Scopri di Più
                </Button>
              </Link>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link 
                  key={index}
                  to={feature.link}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group relative"
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pastel-purple to-pastel-pink p-3 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                  <div 
                    className={`absolute inset-0 rounded-2xl border-2 border-pastel-purple transition-opacity ${
                      activeFeature === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Casinos */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container-responsive">
          <h2 className="section-title">{t('sections.casinos.title')}</h2>
          <p className="section-subtitle">{t('sections.casinos.subtitle')}</p>
          <CasinoList casinos={featuredCasinos} />
          <div className="mt-12 flex justify-center">
            <Link to="/comparazione">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                {t('buttons.readMore')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <BankingSection />
      <TricksSection />
      <EarningsSection />
      <BlogSection />
    </main>
  );
}