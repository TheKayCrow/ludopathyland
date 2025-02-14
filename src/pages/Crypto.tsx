import { useState } from 'react';
import { Bitcoin, Search, Wallet, Shield, Zap, TrendingUp, DollarSign, Clock } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';

const cryptoMethods = [
  {
    name: "Trading Crypto",
    image: "https://images.unsplash.com/photo-1622790698141-94e30457ef12?auto=format&fit=crop&q=80&w=300",
    description: "Guadagna dal trading di criptovalute con una piattaforma affidabile e regolamentata",
    potential: "€500-5000/mese",
    difficulty: "Media",
    timeRequired: "Part-time/Full-time",
    link: "https://bit.ly/3ktSk8W",
    features: [
      "Spread competitivi",
      "Leva finanziaria",
      "Analisi tecniche avanzate",
      "Supporto 24/7"
    ],
    requirements: [
      "Conoscenza base dei mercati",
      "Capitale iniziale minimo",
      "Strategia di trading",
      "Gestione del rischio"
    ]
  },
  {
    name: "Staking",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=300",
    description: "Guadagna interessi passivi bloccando le tue criptovalute",
    potential: "5-15% APY",
    difficulty: "Bassa",
    timeRequired: "Passivo",
    features: [
      "Rendimento garantito",
      "Rischio minimo",
      "Guadagno passivo",
      "Nessuna esperienza richiesta"
    ],
    requirements: [
      "Possesso di crypto",
      "Wallet compatibile",
      "Periodo di lock-in",
      "Importo minimo"
    ]
  },
  {
    name: "Mining",
    image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=300",
    description: "Guadagna minando nuove criptovalute",
    potential: "€200-2000/mese",
    difficulty: "Alta",
    timeRequired: "Full-time",
    features: [
      "Hardware dedicato",
      "Consumo energetico ottimizzato",
      "Pool mining",
      "Ricompense giornaliere"
    ],
    requirements: [
      "Hardware specifico",
      "Conoscenze tecniche",
      "Elettricità economica",
      "Spazio adeguato"
    ]
  }
];

export function Crypto() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMethods = cryptoMethods.filter(method =>
    method.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    method.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page-section">
      <SEO 
        title="Guadagnare con le Crypto"
        description="Scopri come guadagnare con le criptovalute attraverso trading, staking e mining"
      />
      
      <div className="page-container">
        <div className="flex items-center gap-3 mb-2">
          <Bitcoin className="h-8 w-8 text-pastel-yellow animate-float" />
          <h1 className="section-title">Guadagnare con le Crypto</h1>
        </div>
        <p className="section-subtitle">Esplora diverse strategie per guadagnare nel mondo delle criptovalute</p>

        {/* Info Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
            <TrendingUp className="h-8 w-8 text-pastel-green mb-4" />
            <h3 className="text-xl font-bold mb-2">Trading Attivo</h3>
            <p className="text-gray-400">
              Sfrutta le oscillazioni di mercato per generare profitti a breve termine
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
            <DollarSign className="h-8 w-8 text-pastel-blue mb-4" />
            <h3 className="text-xl font-bold mb-2">Reddito Passivo</h3>
            <p className="text-gray-400">
              Guadagna interessi sulle tue crypto attraverso lo staking
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
            <Clock className="h-8 w-8 text-pastel-purple mb-4" />
            <h3 className="text-xl font-bold mb-2">Lungo Termine</h3>
            <p className="text-gray-400">
              Investi in progetti promettenti per guadagni futuri
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-xl mb-8">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Cerca metodi di guadagno..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg bg-gray-800/50 pl-12 pr-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Methods List */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredMethods.map((method, index) => (
            <div key={index} className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <img src={method.image} alt={method.name} className="w-16 h-16 rounded-lg object-cover" />
                <div>
                  <h3 className="text-xl font-bold">{method.name}</h3>
                  <p className="text-pastel-purple">{method.potential}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6">{method.description}</p>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Difficoltà:</span>
                  <span>{method.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Impegno:</span>
                  <span>{method.timeRequired}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Caratteristiche:</h4>
                <ul className="space-y-1">
                  {method.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-pastel-green"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Requisiti:</h4>
                <ul className="space-y-1">
                  {method.requirements.map((req, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-pastel-blue"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {method.link && (
                <a 
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="primary" className="w-full">
                    Inizia Ora
                  </Button>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}