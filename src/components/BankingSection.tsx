import { Wallet, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { paymentMethods } from '../data/banking';

export function BankingSection() {
  return (
    <section id="banking" className="py-20 bg-white/5">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center gap-3 mb-2">
          <Wallet className="h-8 w-8 text-purple-400" />
          <h2 className="text-3xl font-bold">Metodi di Pagamento</h2>
        </div>
        <p className="text-gray-400 mb-8">Confronta i migliori metodi di pagamento per casinò online</p>
        
        <div className="grid gap-6 md:grid-cols-3">
          {paymentMethods.map((method, index) => (
            <div key={index} className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
              <img src={method.image} alt={method.name} className="w-16 h-16 mb-4 rounded-lg" />
              <h3 className="text-xl font-bold mb-2">{method.name}</h3>
              <ul className="space-y-2 mb-6 text-gray-400">
                <li>Commissioni: {method.fees}</li>
                <li>Tempi: {method.timing}</li>
                <li>Limiti: {method.limits}</li>
              </ul>
              <Link to="/banking">
                <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                  Maggiori Dettagli
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}