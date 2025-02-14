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
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center gap-6 mb-8">
          <img src={casino.image} alt={casino.name} className="w-24 h-24 rounded-lg object-cover" />
          <div>
            <h1 className="text-4xl font-bold">{casino.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`text-2xl ${i < casino.rating ? 'text-yellow-400' : 'text-gray-600'}`}>
                  ★
                </span>
              ))}
              <span className="text-gray-400 ml-2">{casino.rating} / 5</span>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Gift className="h-6 w-6 text-purple-400" />
              <h2 className="text-xl font-semibold">Bonus Disponibili</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <span>Bonus Benvenuto</span>
                <span className="text-green-400">{casino.bonus}</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Cashback Settimanale</span>
                <span className="text-green-400">10%</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Giri Gratis</span>
                <span className="text-green-400">50</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="h-6 w-6 text-purple-400" />
              <h2 className="text-xl font-semibold">Metodi di Pagamento</h2>
            </div>
            <ul className="space-y-2">
              <li>✓ Visa/Mastercard</li>
              <li>✓ PayPal</li>
              <li>✓ Bonifico Bancario</li>
              <li>✓ Skrill</li>
              <li>✓ Neteller</li>
              <li>✓ Paysafecard</li>
            </ul>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Gamepad2 className="h-6 w-6 text-purple-400" />
              <h2 className="text-xl font-semibold">Giochi Disponibili</h2>
            </div>
            <ul className="space-y-2">
              <li>✓ Slot Machine</li>
              <li>✓ Roulette</li>
              <li>✓ Blackjack</li>
              <li>✓ Poker</li>
              <li>✓ Baccarat</li>
              <li>✓ Game Show</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="h-6 w-6 text-purple-400" />
            <h2 className="text-xl font-semibold">FAQ</h2>
          </div>
          <div className="space-y-4">
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-white/5 p-4">
                <span>Come posso registrarmi?</span>
                <span className="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 px-4 text-gray-400">
                La registrazione è semplice e veloce. Clicca sul pulsante "Registrati", compila il form con i tuoi dati e verifica il tuo account tramite email.
              </p>
            </details>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-white/5 p-4">
                <span>Quanto tempo richiedono i prelievi?</span>
                <span className="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 px-4 text-gray-400">
                I tempi di prelievo variano in base al metodo scelto. E-wallet: 24-48 ore, Carte: 2-5 giorni, Bonifici: 3-7 giorni lavorativi.
              </p>
            </details>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-white/5 p-4">
                <span>Come funziona il bonus di benvenuto?</span>
                <span className="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 px-4 text-gray-400">
                Il bonus viene accreditato automaticamente dopo il primo deposito. Requisiti di scommessa e termini specifici sono disponibili nella sezione "Termini e Condizioni".
              </p>
            </details>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a href={casino.affiliateLink} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="lg">
              Registrati Ora e Ottieni il Bonus
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}