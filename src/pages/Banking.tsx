import { useState } from 'react';
import { Search, Wallet } from 'lucide-react';
import { paymentMethods } from '../data/banking';

export function Banking() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMethods = paymentMethods.filter(method =>
    method.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    method.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page-section">
      <div className="page-container">
        <div className="flex items-center gap-3 mb-2">
          <Wallet className="h-8 w-8 text-purple-400" />
          <h1 className="section-title">Metodi di Pagamento</h1>
        </div>
        <p className="section-subtitle">Confronta i migliori metodi di pagamento per casinò online</p>

        <div className="relative max-w-xl mb-8">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Cerca metodi di pagamento..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg bg-gray-800/50 pl-12 pr-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {filteredMethods.map((method, index) => (
            <div key={index} className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <img src={method.image} alt={method.name} className="w-16 h-16 rounded-lg object-cover" />
                <div>
                  <h2 className="text-2xl font-bold">{method.name}</h2>
                  <p className="text-gray-400">{method.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="font-semibold mb-2">Dettagli</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>Commissioni: {method.fees}</li>
                    <li>Tempi: {method.timing}</li>
                    <li>Limiti: {method.limits}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Vantaggi</h3>
                  <ul className="space-y-1 text-green-400">
                    {method.advantages.map((advantage, i) => (
                      <li key={i}>✓ {advantage}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Svantaggi</h3>
                <ul className="space-y-1 text-red-400">
                  {method.disadvantages.map((disadvantage, i) => (
                    <li key={i}>✗ {disadvantage}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}