import React, { useState } from 'react';
import { Search, Shield, Award, Menu, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Crown, Filter, TrendingUp, Wallet, BookOpen, Newspaper } from 'lucide-react';
import { Button } from './components/Button';
import { CasinoCard } from './components/CasinoCard';

const featuredCasinos = [
  {
    name: "Ludopathyland Casino",
    rating: 4.8,
    bonus: "Bonus di Benvenuto fino a €1.200",
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=200",
    features: [
      "Assistenza Clienti 24/7",
      "Pagamenti Rapidi",
      "500+ Giochi",
      "Compatibile con Mobile"
    ]
  },
  {
    name: "Ludopathy Palace",
    rating: 4.7,
    bonus: "€800 + 100 Giri Gratis",
    image: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&fit=crop&q=80&w=200",
    features: [
      "Programma VIP",
      "Giochi con Croupier dal Vivo",
      "Prelievi Istantanei",
      "Metodi di Pagamento Multipli"
    ]
  },
  {
    name: "Ludopathy Crown",
    rating: 4.6,
    bonus: "300% sul Primo Deposito",
    image: "https://images.unsplash.com/photo-1592167613833-0a00a31e4052?auto=format&fit=crop&q=80&w=200",
    features: [
      "Giochi Esclusivi",
      "Promozioni Settimanali",
      "Premi Fedeltà",
      "Chat Live 24/7"
    ]
  }
];

const paymentMethods = [
  {
    name: "Carte di Credito",
    commission: "1.5-2.5%",
    withdrawalTime: "2-3 giorni",
    minDeposit: "€10",
    maxWithdrawal: "€10,000",
    security: "Alto"
  },
  {
    name: "Bonifico Bancario",
    commission: "€0-5",
    withdrawalTime: "1-3 giorni",
    minDeposit: "€20",
    maxWithdrawal: "€50,000",
    security: "Molto Alto"
  },
  {
    name: "E-Wallet",
    commission: "0-1%",
    withdrawalTime: "Istantaneo",
    minDeposit: "€10",
    maxWithdrawal: "€5,000",
    security: "Alto"
  },
  {
    name: "Crypto",
    commission: "0-0.5%",
    withdrawalTime: "10-30 minuti",
    minDeposit: "€5",
    maxWithdrawal: "Illimitato",
    security: "Molto Alto"
  }
];

const strategies = [
  {
    title: "Gestione del Bankroll",
    description: "Impara a gestire il tuo budget di gioco in modo responsabile",
    difficulty: "Principiante"
  },
  {
    title: "Strategie Blackjack",
    description: "Tecniche avanzate per massimizzare le probabilità di vincita",
    difficulty: "Intermedio"
  },
  {
    title: "Poker Texas Hold'em",
    description: "Guide complete per tornei e cash game",
    difficulty: "Avanzato"
  }
];

const earningMethods = [
  {
    title: "Programmi di Affiliazione",
    potential: "€500-5000/mese",
    difficulty: "Media",
    timeRequired: "Part-time/Full-time"
  },
  {
    title: "Trading Sportivo",
    potential: "€1000-10000/mese",
    difficulty: "Alta",
    timeRequired: "Full-time"
  },
  {
    title: "Content Creation",
    potential: "€300-3000/mese",
    difficulty: "Media",
    timeRequired: "Part-time"
  }
];

const blogPosts = [
  {
    title: "Le Nuove Regolamentazioni del Gioco Online 2025",
    date: "15 Mar 2025",
    category: "Normative",
    readTime: "5 min"
  },
  {
    title: "Come Scegliere un Casinò Online Sicuro",
    date: "12 Mar 2025",
    category: "Guide",
    readTime: "8 min"
  },
  {
    title: "I Migliori Bonus del Mese",
    date: "10 Mar 2025",
    category: "Bonus",
    readTime: "6 min"
  }
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    rating: 'all',
    bonus: 'all',
    payment: 'all'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full backdrop-blur-lg border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Crown className="h-8 w-8 text-purple-500" />
              <div className="absolute -bottom-1 w-full h-1 bg-gradient-to-r from-purple-500 to-red-500 rounded-full" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">Ludopathyland</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#casino" className="hover:text-purple-400">Casinò</a>
            <a href="#banking" className="hover:text-purple-400">Banche</a>
            <a href="#tricks" className="hover:text-purple-400">Trucchi</a>
            <a href="#earnings" className="hover:text-purple-400">Guadagno</a>
            <a href="#blog" className="hover:text-purple-400">Blog</a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">Accedi</Button>
            <Button variant="primary" size="sm">Registrati</Button>
            <Menu className="h-6 w-6 md:hidden" />
          </div>
        </div>
      </nav>

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

      {/* Featured Sections */}
      <section className="py-20 bg-white/5">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Casino Section */}
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Crown className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Casinò Top</h3>
              <p className="text-gray-400 mb-4">Recensioni dettagliate e confronti dei migliori casinò online</p>
              <Button variant="outline" size="sm">Scopri di più</Button>
            </div>

            {/* Banking Section */}
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Wallet className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Metodi di Pagamento</h3>
              <p className="text-gray-400 mb-4">Guide complete su depositi, prelievi e commissioni</p>
              <Button variant="outline" size="sm">Scopri di più</Button>
            </div>

            {/* Tricks Section */}
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Strategie e Trucchi</h3>
              <p className="text-gray-400 mb-4">Tecniche avanzate e consigli degli esperti</p>
              <Button variant="outline" size="sm">Scopri di più</Button>
            </div>

            {/* Blog Section */}
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Newspaper className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Blog e News</h3>
              <p className="text-gray-400 mb-4">Ultime novità e approfondimenti del settore</p>
              <Button variant="outline" size="sm">Scopri di più</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Casino Comparison Section */}
      <section id="casino" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold mb-2">Confronto Casinò</h2>
          <p className="text-gray-400 mb-8">Analisi dettagliate e confronti dei migliori casinò online</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCasinos.map((casino, index) => (
              <CasinoCard key={index} {...casino} />
            ))}
          </div>
        </div>
      </section>

      {/* Banking Section */}
      <section id="banking" className="py-20 bg-white/5">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold mb-2">Comparazione Metodi di Pagamento</h2>
          <p className="text-gray-400 mb-8">Confronta commissioni, tempi e limiti dei vari metodi di pagamento</p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
                <h3 className="text-xl font-bold mb-4">{method.name}</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Commissioni:</span>
                    <span>{method.commission}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Tempo Prelievo:</span>
                    <span>{method.withdrawalTime}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Min Deposito:</span>
                    <span>{method.minDeposit}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Max Prelievo:</span>
                    <span>{method.maxWithdrawal}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Sicurezza:</span>
                    <span>{method.security}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tricks Section */}
      <section id="tricks" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold mb-2">Trucchi e Strategie</h2>
          <p className="text-gray-400 mb-8">Guide dettagliate e strategie vincenti per il gioco responsabile</p>
          
          <div className="grid gap-6 md:grid-cols-3">
            {strategies.map((strategy, index) => (
              <div key={index} className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
                <h3 className="text-xl font-bold mb-2">{strategy.title}</h3>
                <p className="text-gray-400 mb-4">{strategy.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-400">Difficoltà: {strategy.difficulty}</span>
                  <Button variant="outline" size="sm">Leggi Guida</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Section */}
      <section id="earnings" className="py-20 bg-white/5">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold mb-2">Guadagno Online</h2>
          <p className="text-gray-400 mb-8">Metodi legali e verificati per guadagnare online</p>
          
          <div className="grid gap-6 md:grid-cols-3">
            {earningMethods.map((method, index) => (
              <div key={index} className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
                <h3 className="text-xl font-bold mb-4">{method.title}</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Potenziale:</span>
                    <span className="text-green-400">{method.potential}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Difficoltà:</span>
                    <span>{method.difficulty}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Tempo:</span>
                    <span>{method.timeRequired}</span>
                  </li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">Scopri di Più</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold mb-2">Blog e Novità</h2>
          <p className="text-gray-400 mb-8">Articoli, guide e aggiornamenti dal mondo dei casinò online</p>
          
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
                <div className="flex items-center gap-2 text-sm text-purple-400 mb-2">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{post.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{post.date}</span>
                  <Button variant="outline" size="sm">Leggi Articolo</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-gradient-to-b from-black to-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Crown className="h-8 w-8 text-purple-500" />
                  <div className="absolute -bottom-1 w-full h-1 bg-gradient-to-r from-purple-500 to-red-500 rounded-full" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">Ludopathyland</span>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                La tua fonte affidabile per confronti, recensioni e guide nel mondo dei casinò online.
              </p>
              <div className="mt-6 flex gap-4">
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Link Rapidi</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#casino" className="text-gray-400 hover:text-purple-400">Confronto Casinò</a></li>
                <li><a href="#banking" className="text-gray-400 hover:text-purple-400">Metodi di Pagamento</a></li>
                <li><a href="#tricks" className="text-gray-400 hover:text-purple-400">Trucchi e Strategie</a></li>
                <li><a href="#earnings" className="text-gray-400 hover:text-purple-400">Guadagno Online</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-purple-400">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Supporto</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-purple-400">
                    <Mail className="h-4 w-4" />
                    supporto@ludopathyland.com
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-purple-400">
                    <Phone className="h-4 w-4" />
                    +39 02 1234567
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-purple-400">
                    <MapPin className="h-4 w-4" />
                    Milano, Italia
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <p className="mt-4 text-sm text-gray-400">
                Iscriviti per ricevere offerte esclusive e aggiornamenti.
              </p>
              <form className="mt-4">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Inserisci la tua email"
                    className="flex-1 rounded-lg bg-white/5 px-4 py-2 text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <Button variant="primary" size="sm">Iscriviti</Button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
              <p>&copy; 2025 Ludopathyland. Tutti i diritti riservati.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-purple-400">Privacy Policy</a>
                <a href="#" className="hover:text-purple-400">Termini di Servizio</a>
                <a href="#" className="hover:text-purple-400">Gioco Responsabile</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;