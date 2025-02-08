import { Search } from 'lucide-react';
import { useState } from 'react';
import { CasinoList } from '../components/CasinoList';
import { TricksSection } from '../components/TricksSection';
import { EarningsSection } from '../components/EarningsSection';
import { BlogSection } from '../components/BlogSection';
import { featuredCasinos } from '../data/casinos';

export function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    rating: 'all',
    bonus: 'all',
    payment: 'all'
  });

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              Benvenuto su
              <span className="bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent"> Ludopathyland</span>
            </h1>
            <p className="mt-6 text-xl text-gray-400">
              La tua guida completa al mondo dei casinò online, delle strategie e del guadagno intelligente
            </p>
            
            {/* Search and Filters */}
            <div className="mt-8 mx-auto max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cerca casinò, bonus o guide..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full bg-white/5 pl-12 pr-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div className="mt-4 flex flex-wrap gap-4 justify-center">
                <select
                  value={selectedFilters.rating}
                  onChange={(e) => setSelectedFilters({...selectedFilters, rating: e.target.value})}
                  className="rounded-full bg-white/5 px-4 py-2 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">Valutazione</option>
                  <option value="5">5 stelle</option>
                  <option value="4">4+ stelle</option>
                  <option value="3">3+ stelle</option>
                </select>
                
                <select
                  value={selectedFilters.bonus}
                  onChange={(e) => setSelectedFilters({...selectedFilters, bonus: e.target.value})}
                  className="rounded-full bg-white/5 px-4 py-2 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">Tipo Bonus</option>
                  <option value="deposit">Bonus Deposito</option>
                  <option value="spins">Giri Gratis</option>
                  <option value="cashback">Cashback</option>
                </select>
                
                <select
                  value={selectedFilters.payment}
                  onChange={(e) => setSelectedFilters({...selectedFilters, payment: e.target.value})}
                  className="rounded-full bg-white/5 px-4 py-2 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">Metodo Pagamento</option>
                  <option value="card">Carta</option>
                  <option value="bank">Bonifico</option>
                  <option value="crypto">Crypto</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Casinos */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold mb-2">Casinò in Evidenza</h2>
          <p className="text-gray-400 mb-8">I migliori casinò online selezionati per te</p>
          <CasinoList casinos={featuredCasinos} />
        </div>
      </section>

      {/* Tricks and Strategies */}
      <TricksSection />

      {/* Earnings */}
      <EarningsSection />

      {/* Blog */}
      <BlogSection />
    </main>
  );
}