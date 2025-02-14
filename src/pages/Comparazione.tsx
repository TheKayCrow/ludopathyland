import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CasinoList } from '../components/CasinoList';
import { Loader } from '../components/Loader';
import { useCasinos } from '../hooks/useCasinos';
import { SearchBar } from '../components/SearchBar';
import { ComparisonFilters } from '../components/ComparisonFilters';

export function Comparazione() {
  const { t } = useTranslation();
  const { casinos, loading } = useCasinos();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    rating: 'all',
    bonus: 'all',
    payment: 'all'
  });

  const handleFilterChange = (type: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  if (loading) return <Loader />;

  return (
    <div className="page-section">
      <div className="page-container">
        <h1 className="section-title">Comparazione Casinò</h1>
        <p className="section-subtitle">Confronta i migliori casinò online e trova quello più adatto a te</p>
        
        <div className="space-y-6 mb-8">
          <SearchBar 
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={t('search.placeholder')}
          />
          
          <ComparisonFilters 
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>

        <CasinoList casinos={casinos} />
      </div>
    </div>
  );
}