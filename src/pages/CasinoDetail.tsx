import { useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { featuredCasinos } from '../data/casinos';
import { CreditCard, Gamepad2, Gift, HelpCircle } from 'lucide-react';

export function CasinoDetail() {
  const { id } = useParams();
  const casino = featuredCasinos.find(c => c.name.toLowerCase().replace(/\s+/g, '-') === id);

  if (!casino) {
    return <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24 px-4">
      Casinò non trovato
    </div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24">
      <div className="container-responsive">
        <div className="flex items-center gap-6 mb-8">
          <img src={casino.image} alt={casino.name} className="w-24 h-24 rounded-lg object-cover" />
          <div>
            <h1 className="text-4xl font-bold text-white">{casino.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`text-2xl ${i < casino.rating ? 'text-yellow-400' : 'text-gray-700'}`}>
                  ★
                </span>
              ))}
              <span className="text-white ml-2">{casino.rating} / 5</span>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Gift className="h-6 w-6 text-pastel-purple" />
              <h2 className="text-xl font-semibold text-white">Bonus Disponibili</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center justify-between text-white">
                <span>Bonus Benvenuto</span>
                <span className="text-pastel-green font-semibold">{casino.bonus}</span>
              </li>
              <li className="flex items-center justify-between text-white">
                <span>Cashback Settimanale</span>
                <span className="text-pastel-green font-semibold">10%</span>
              </li>
              <li className="flex items-center justify-between text-white">
                <span>Giri Gratis</span>
                <span className="text-pastel-green font-semibold">50</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="h-6 w-6 text-pastel-purple" />
              <h2 className="text-xl font-semibold text-white">Metodi di Pagamento</h2>
            </div>
            <ul className="space-y-2 text-white">
              <li>✓ Visa/Mastercard</li>
              <li>✓ PayPal</li>
              <li>✓ Bonifico Bancario</li>
              <li>✓ Skrill</li>
              <li>✓ Neteller</li>
              <li>✓ Paysafecard</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Gamepad2 className="h-6 w-6 text-pastel-purple" />
              <h2 className="text-xl font-semibold text-white">Giochi Disponibili</h2>
            </div>
            <ul className="space-y-2 text-white">
              <li>✓ Slot Machine</li>
              <li>✓ Roulette</li>
              <li>✓ Blackjack</li>
              <li>✓ Poker</li>
              <li>✓ Baccarat</li>
              <li>✓ Game Show</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="h-6 w-6 text-pastel-purple" />
            <h2 className="text-xl font-semibold text-white">FAQ</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Come posso registrarmi?</h3>
              <p className="text-gray-200">
                La registrazione è semplice e veloce. Clicca sul pulsante "Registrati", compila il form con i tuoi dati e verifica il tuo account tramite email.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Quanto tempo richiedono i prelievi?</h3>
              <p className="text-gray-200">
                I tempi di prelievo variano in base al metodo scelto. E-wallet: 24-48 ore, Carte: 2-5 giorni, Bonifici: 3-7 giorni lavorativi.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Come funziona il bonus di benvenuto?</h3>
              <p className="text-gray-200">
                Il bonus viene accreditato automaticamente dopo il primo deposito. Requisiti di scommessa e termini specifici sono disponibili nella sezione "Termini e Condizioni".
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a href={casino.affiliateLink} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="lg" className="font-bold">
              Registrati Ora e Ottieni il Bonus
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}