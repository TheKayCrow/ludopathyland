import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CasinoList } from '../components/CasinoList';
import { TricksSection } from '../components/TricksSection';
import { EarningsSection } from '../components/EarningsSection';
import { BlogSection } from '../components/BlogSection';
import { BankingSection } from '../components/BankingSection';
import { featuredCasinos } from '../data/casinos';
import { Button } from '../components/Button';
import { Shield, Zap, Trophy, ArrowRight, Crown, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const { t } = useTranslation();
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Shield,
      title: "Casinò Verificati",
      description: "Solo casinò con licenza AAMS/ADM, garantendo massima sicurezza e affidabilità",
      link: "/comparazione",
      gradient: "from-pastel-purple to-pastel-pink"
    },
    {
      icon: Zap,
      title: "Bonus Esclusivi",
      description: "Offerte e promozioni esclusive negoziate direttamente con i migliori casinò",
      link: "/comparazione",
      gradient: "from-pastel-blue to-pastel-purple"
    },
    {
      icon: Trophy,
      title: "Guide Esperte",
      description: "Strategie e consigli da professionisti per massimizzare le tue vincite",
      link: "/guide",
      gradient: "from-pastel-green to-pastel-blue"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-73px)] flex items-center justify-center relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 left-1/4 w-72 h-72 bg-pastel-purple/20 rounded-full blur-3xl animate-float" />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pastel-pink/20 rounded-full blur-3xl animate-float delay-150" />
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-pastel-blue/20 rounded-full blur-3xl animate-float delay-300" />
          
          {/* Floating stars */}
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`absolute text-pastel-yellow w-${2 + i} h-${2 + i} animate-float`}
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>

        <div className="container-responsive py-20 relative">
          <div className="text-center max-w-4xl mx-auto mb-16">
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="relative">
                <Crown className="h-12 w-12 text-pastel-purple animate-float" />
                <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-pastel-yellow animate-bounce-slow" />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl mb-6">
              {t('home.hero.title')}{' '}
              <span className="bg-gradient-to-r from-pastel-purple to-pastel-pink bg-clip-text text-transparent">
                Ludopathyland
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/comparazione">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="min-w-[200px] flex items-center justify-center gap-2 group"
                >
                  Inizia Ora
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/guide">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="min-w-[200px] hover:bg-white/5"
                >
                  Scopri di Più
                </Button>
              </Link>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid gap-6 md:grid-cols-3 relative">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link 
                  key={index}
                  to={feature.link}
                  className="group relative"
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all h-full">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                    
                    {/* Hover effect */}
                    <div 
                      className={`absolute inset-0 rounded-2xl border-2 border-pastel-purple opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                        activeFeature === index ? 'scale-105' : 'scale-100'
                      }`}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Casinos */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pastel-purple/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-pastel-pink/10 rounded-full blur-3xl animate-float delay-150" />
        </div>
        
        <div className="container-responsive relative">
          <h2 className="section-title">{t('sections.casinos.title')}</h2>
          <p className="section-subtitle">{t('sections.casinos.subtitle')}</p>
          <CasinoList casinos={featuredCasinos} />
          <div className="mt-12 flex justify-center">
            <Link to="/comparazione">
              <Button 
                variant="outline" 
                size="lg" 
                className="min-w-[200px] group"
              >
                {t('buttons.readMore')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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