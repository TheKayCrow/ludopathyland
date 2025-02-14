import { useState } from 'react';
import { CasinoList } from '../components/CasinoList';
import { Loader } from '../components/Loader';
import { useCasinos } from '../hooks/useCasinos';

export function Comparazione() {
  const { casinos, loading } = useCasinos();
  const [sortBy, setSortBy] = useState('rating');

  if (loading) return <Loader />;

  return (
    <div className="page-section">
      <div className="page-container">
        <h1 className="section-title">Comparazione Casinò</h1>
        <p className="section-subtitle">Confronta i migliori casinò online e trova quello più adatto a te</p>
        
        <div className="mb-8">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg bg-gray-800/50 px-6 py-3 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 [&>option]:bg-gray-900"
          >
            <option value="rating">Ordina per Valutazione</option>
            <option value="bonus">Ordina per Bonus</option>
            <option value="games">Ordina per Numero Giochi</option>
          </select>
        </div>

        <CasinoList casinos={casinos} />
      </div>
    </div>
  );
}