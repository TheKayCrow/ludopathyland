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
import { SearchBar } from '../components/SearchBar';
import { ComparisonFilters } from '../components/ComparisonFilters';

export function Home() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    rating: 'all',
    bonus: 'all',
    payment: 'all'
  });

  const handleFilterChange = (type: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

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
              <SearchBar 
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder={t('home.hero.search')}
              />
              
              <div className="mt-4">
                <ComparisonFilters 
                  filters={selectedFilters}
                  onFilterChange={handleFilterChange}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Casinos */}
      <section className="page-section">
        <div className="page-container">
          <h2 className="section-title">{t('sections.casinos.title')}</h2>
          <p className="section-subtitle">{t('sections.casinos.subtitle')}</p>
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