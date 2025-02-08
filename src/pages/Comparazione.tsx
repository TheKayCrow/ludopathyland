import { useState } from 'react';
import { CasinoList } from '../components/CasinoList';
import { Loader } from '../components/Loader';
import { useCasinos } from '../hooks/useCasinos';

export function Comparazione() {
  const { casinos, loading } = useCasinos();
  const [sortBy, setSortBy] = useState('rating');

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="text-4xl font-bold mb-2">Comparazione Casinò</h1>
        <p className="text-gray-400 mb-8">Confronta i migliori casinò online e trova quello più adatto a te</p>
        
        <div className="mb-8">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg bg-white/5 px-4 py-2 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
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