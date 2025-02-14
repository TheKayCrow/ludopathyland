import { Search } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CasinoList } from '../components/CasinoList';
import { TricksSection } from '../components/TricksSection';
import { EarningsSection } from '../components/EarningsSection';
import { BlogSection } from '../components/BlogSection';
import { BankingSection } from '../components/BankingSection';
import { featuredCasinos } from '../data/casinos';
import { Button } from '../components/Button';

export function Home() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    rating: 'all',
    bonus: 'all',
    payment: 'all'
  });

  return (
    <main>
      {/* Hero Section */}
      <section className="page-section">
        <div className="page-container">
          <div className="text-center">
            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              {t('home.hero.title')}{' '}
              <span className="bg-gradient-to-r from-pastel-purple to-pastel-pink bg-clip-text text-transparent">
                Ludopathyland
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-400">
              {t('home.hero.subtitle')}
            </p>
            
            {/* Search and Filters */}
            <div className="mt-8 mx-auto max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('home.hero.search')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full bg-gray-800/50 pl-12 pr-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                <select
                  value={selectedFilters.rating}
                  onChange={(e) => setSelectedFilters({...selectedFilters, rating: e.target.value})}
                  className="flex-1 min-w-[200px] max-w-[250px] rounded-full bg-gray-800/50 px-6 py-3 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 [&>option]:bg-gray-900"
                >
                  <option value="all">Valutazione</option>
                  <option value="5">5 stelle</option>
                  <option value="4">4+ stelle</option>
                  <option value="3">3+ stelle</option>
                </select>
                
                <select
                  value={selectedFilters.bonus}
                  onChange={(e) => setSelectedFilters({...selectedFilters, bonus: e.target.value})}
                  className="flex-1 min-w-[200px] max-w-[250px] rounded-full bg-gray-800/50 px-6 py-3 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 [&>option]:bg-gray-900"
                >
                  <option value="all">Tipo Bonus</option>
                  <option value="deposit">Bonus Deposito</option>
                  <option value="spins">Giri Gratis</option>
                  <option value="cashback">Cashback</option>
                </select>
                
                <select
                  value={selectedFilters.payment}
                  onChange={(e) => setSelectedFilters({...selectedFilters, payment: e.target.value})}
                  className="flex-1 min-w-[200px] max-w-[250px] rounded-full bg-gray-800/50 px-6 py-3 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 [&>option]:bg-gray-900"
                >
                  <option value="all">Metodo Pagamento</option>
                  <option value="card">Carta</option>
                  <option value="bank">Bonifico</option>
                  <option value="crypto">Crypto</option>
                </select>
              </div>

              <div className="mt-8 flex justify-center gap-4">
                <Button variant="outline" size="lg" className="min-w-[160px]">
                  {t('buttons.learnMore')}
                </Button>
                <Button variant="primary" size="lg" className="min-w-[160px]">
                  {t('buttons.startNow')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Casinos */}
      <section className="page-section">
        <div className="page-container">
          <h2 className="section-title">Casinò in Evidenza</h2>
          <p className="section-subtitle">I migliori casinò online selezionati per te</p>
          <CasinoList casinos={featuredCasinos} />
          <div className="mt-8 flex justify-center">
            <Button variant="outline" size="lg" className="min-w-[200px]">
              {t('buttons.readMore')}
            </Button>
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