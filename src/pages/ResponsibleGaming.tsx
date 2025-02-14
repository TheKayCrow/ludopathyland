import { SEO } from '../components/SEO';
import { Shield, Heart, HelpCircle, Phone } from 'lucide-react';

export function ResponsibleGamingPage() {
  return (
    <div className="page-section">
      <SEO 
        title="Gioco Responsabile"
        description="Informazioni e risorse sul gioco responsabile - Come giocare in modo sicuro e consapevole"
      />
      
      <div className="page-container max-w-4xl">
        <h1 className="section-title">Gioco Responsabile</h1>
        <p className="section-subtitle">
          Il nostro impegno per promuovere un approccio sano e consapevole al gioco
        </p>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
            <Shield className="h-8 w-8 text-purple-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Protezione del Giocatore</h2>
            <p className="text-gray-300">
              Implementiamo strumenti e misure per proteggere i giocatori da comportamenti problematici
              e promuovere un ambiente di gioco sicuro.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
            <Heart className="h-8 w-8 text-purple-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Supporto e Risorse</h2>
            <p className="text-gray-300">
              Offriamo supporto e risorse per aiutare i giocatori a mantenere il controllo
              e riconoscere i segnali di comportamenti problematici.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Strumenti di Controllo</h2>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Limiti di Deposito</h3>
                <p className="text-gray-300">
                  Imposta limiti giornalieri, settimanali o mensili per controllare quanto puoi depositare.
                </p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Auto-Esclusione</h3>
                <p className="text-gray-300">
                  Prendi una pausa dal gioco per un periodo definito o indefinito.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Promemoria di Tempo</h3>
                <p className="text-gray-300">
                  Ricevi notifiche sul tempo trascorso giocando.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Segnali di Allarme</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Giocare più di quanto ci si possa permettere</li>
              <li>Utilizzare il gioco come fuga dai problemi</li>
              <li>Trascurare lavoro, famiglia o responsabilità</li>
              <li>Mentire sul proprio comportamento di gioco</li>
              <li>Inseguire le perdite</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Consigli per il Gioco Responsabile</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Stabilisci un budget e rispettalo</li>
              <li>Non giocare mai denaro necessario per spese essenziali</li>
              <li>Considera il gioco come intrattenimento, non come fonte di reddito</li>
              <li>Fai pause regolari</li>
              <li>Non giocare sotto l'effetto di alcol o droghe</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Aiuto e Supporto</h2>
            <div className="bg-white/5 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <p className="text-gray-300">
                  Numero Verde: <a href="tel:800558822" className="text-purple-400 hover:text-purple-300">800 558822</a>
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-purple-400" />
                <p className="text-gray-300">
                  Email: <a href="mailto:support@ludopathyland.com" className="text-purple-400 hover:text-purple-300">
                    support@ludopathyland.com
                  </a>
                </p>
              </div>

              <p className="text-gray-300">
                Se tu o qualcuno che conosci ha problemi con il gioco, non esitare a chiedere aiuto.
                Il supporto è disponibile 24/7 in modo completamente confidenziale.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}