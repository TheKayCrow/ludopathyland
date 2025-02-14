import { X } from 'lucide-react';
import { Button } from './Button';

interface PrivacyPolicyProps {
  onClose: () => void;
}

export function PrivacyPolicy({ onClose }: PrivacyPolicyProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-900 p-4 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-xl font-bold">Privacy Policy</h2>
          <Button variant="outline" size="sm" onClick={onClose} className="p-1">
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="p-6 space-y-6">
          <section>
            <h3 className="text-lg font-semibold mb-2">1. Raccolta dei Dati</h3>
            <p className="text-gray-300">
              Raccogliamo i seguenti tipi di informazioni:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Informazioni di accesso e utilizzo del sito</li>
              <li>Dati forniti durante la registrazione</li>
              <li>Preferenze e impostazioni</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">2. Utilizzo dei Cookie</h3>
            <p className="text-gray-300">
              Utilizziamo cookie e tecnologie simili per:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Migliorare la navigazione</li>
              <li>Memorizzare le preferenze</li>
              <li>Analizzare l'utilizzo del sito</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">3. Protezione dei Dati</h3>
            <p className="text-gray-300">
              Adottiamo misure di sicurezza per proteggere i tuoi dati personali:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Crittografia SSL</li>
              <li>Accesso limitato ai dati</li>
              <li>Monitoraggio continuo</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2">4. I Tuoi Diritti</h3>
            <p className="text-gray-300">
              Hai il diritto di:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Accedere ai tuoi dati</li>
              <li>Richiedere modifiche o cancellazioni</li>
              <li>Revocare il consenso</li>
            </ul>
          </section>
        </div>

        <div className="sticky bottom-0 bg-gray-900 p-4 border-t border-white/10">
          <Button variant="primary" onClick={onClose} className="w-full">
            Ho Capito
          </Button>
        </div>
      </div>
    </div>
  );
}