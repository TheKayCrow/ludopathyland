import { useState } from 'react';
import { Search, DollarSign, Wifi, Shield, Clock } from 'lucide-react';
import { earningMethods } from '../data/earnings';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';

export function Earnings() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredMethods = earningMethods.filter(method =>
    (selectedCategory === 'all' || method.category === selectedCategory) &&
    (method.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    method.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="page-section">
      <SEO 
        title="Guadagno Online"
        description="Scopri metodi verificati per guadagnare online in modo sicuro e legale"
      />
      
      <div className="page-container">
        <div className="flex items-center gap-3 mb-2">
          <DollarSign className="h-8 w-8 text-pastel-green" />
          <h1 className="section-title">Guadagno Online</h1>
        </div>
        <p className="section-subtitle">Scopri metodi verificati per guadagnare online in modo sicuro e legale</p>

        {/* Featured Method */}
        <div className="mb-12 bg-gradient-to-r from-pastel-purple/20 to-pastel-pink/20 rounded-3xl p-8 backdrop-blur-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-white/10 rounded-2xl">
              <Wifi className="h-12 w-12 text-pastel-blue animate-pulse" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Guadagna con la tua Connessione Internet</h2>
              <p className="text-pastel-blue">Nuovo metodo: Condivisione banda inutilizzata</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-pastel-purple" />
              <span>Guadagno Passivo</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-pastel-green" />
              <span>100% Sicuro e Legale</span>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="h-5 w-5 text-pastel-yellow" />
              <span>€20-50/mese</span>
            </div>
          </div>

          <p className="text-gray-300 mb-6">
            Trasforma la tua banda internet inutilizzata in un flusso di reddito passivo. 
            Installa l'app, lasciala in esecuzione in background e guadagna mentre navighi normalmente.
          </p>

          <a 
            href="https://bit.ly/3ktSk8W"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="primary">
              Inizia a Guadagnare
            </Button>
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cerca opportunità di guadagno..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg bg-gray-800/50 pl-12 pr-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-lg bg-gray-800/50 px-6 py-3 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 [&>option]:bg-gray-900"
          >
            <option value="all">Tutte le categorie</option>
            <option value="Passivo">Guadagno Passivo</option>
            <option value="Affiliazioni">Affiliazioni</option>
            <option value="Trading">Trading</option>
            <option value="Content">Content Creation</option>
          </select>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredMethods.map((method, index) => (
            <div key={index} className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
              <h2 className="text-2xl font-bold mb-4">{method.title}</h2>
              <p className="text-gray-400 mb-6">{method.description}</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Potenziale:</span>
                  <span className="text-pastel-green">{method.potential}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Difficoltà:</span>
                  <span>{method.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tempo:</span>
                  <span>{method.timeRequired}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold mb-2">Requisiti:</h3>
                <ul className="list-disc list-inside text-gray-400">
                  {method.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>

              {method.link ? (
                <a 
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mt-6"
                >
                  <Button variant="primary" className="w-full">
                    Inizia Ora
                  </Button>
                </a>
              ) : (
                <Button variant="outline" size="sm" className="w-full mt-6">
                  Scopri di Più
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}