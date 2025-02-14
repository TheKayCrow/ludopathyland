import { SEO } from '../components/SEO';
import { Shield, Heart, HelpCircle, Phone, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const nationalHelplines = {
  it: {
    name: 'Italia',
    phone: '800 558822',
    email: 'help@gioco-responsabile.it',
    website: 'https://www.giocaresponsabile.it'
  },
  uk: {
    name: 'United Kingdom',
    phone: '0808 8020 133',
    email: 'help@gamcare.org.uk',
    website: 'https://www.gamcare.org.uk'
  },
  de: {
    name: 'Deutschland',
    phone: '0800 1372700',
    email: 'beratung@bzga.de',
    website: 'https://www.bzga.de'
  },
  fr: {
    name: 'France',
    phone: '09 74 75 13 13',
    email: 'contact@joueurs-info-service.fr',
    website: 'https://www.joueurs-info-service.fr'
  },
  es: {
    name: 'España',
    phone: '900 200 225',
    email: 'ayuda@jugarbien.es',
    website: 'https://www.jugarbien.es'
  },
  ru: {
    name: 'Россия',
    phone: '8 800 600 90 00',
    email: 'help@stopgambling.ru',
    website: 'https://www.stopgambling.ru'
  }
};

const countryCodeMap = {
  'IT': 'it',
  'GB': 'uk',
  'DE': 'de',
  'FR': 'fr',
  'ES': 'es',
  'RU': 'ru'
};

export function ResponsibleGamingPage() {
  const { i18n } = useTranslation();
  const [userCountry, setUserCountry] = useState<string | null>(null);

  useEffect(() => {
    // Try to get country from geolocation
    if ('geolocation' in navigator) {
      fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
          const countryCode = countryCodeMap[data.country_code];
          if (countryCode) {
            setUserCountry(countryCode);
          } else {
            // Fallback to browser language
            const browserLang = navigator.language.split('-')[0];
            setUserCountry(browserLang in nationalHelplines ? browserLang : 'it');
          }
        })
        .catch(() => {
          // Fallback to i18n language
          setUserCountry(i18n.language in nationalHelplines ? i18n.language : 'it');
        });
    } else {
      // Fallback to i18n language if geolocation is not available
      setUserCountry(i18n.language in nationalHelplines ? i18n.language : 'it');
    }
  }, [i18n.language]);

  const helpline = userCountry ? nationalHelplines[userCountry] : nationalHelplines.it;

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
            <h2 className="text-2xl font-semibold mb-4">Linea di Aiuto Nazionale</h2>
            <div className="bg-white/5 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-purple-400" />
                <h3 className="font-semibold text-xl">{helpline.name}</h3>
              </div>
              <div className="space-y-4">
                <a 
                  href={`tel:${helpline.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors p-3 bg-white/5 rounded-lg"
                >
                  <Phone className="h-6 w-6" />
                  <div>
                    <div className="font-semibold">Numero Verde</div>
                    <div>{helpline.phone}</div>
                  </div>
                </a>
                <a 
                  href={`mailto:${helpline.email}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors p-3 bg-white/5 rounded-lg"
                >
                  <Mail className="h-6 w-6" />
                  <div>
                    <div className="font-semibold">Email di Supporto</div>
                    <div>{helpline.email}</div>
                  </div>
                </a>
                <a 
                  href={helpline.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors p-3 bg-white/5 rounded-lg"
                >
                  <HelpCircle className="h-6 w-6" />
                  <div>
                    <div className="font-semibold">Sito Web di Supporto</div>
                    <div>Accedi alle risorse online</div>
                  </div>
                </a>
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
              <li>Giocare con denaro destinato a spese essenziali</li>
              <li>Chiedere prestiti per giocare</li>
              <li>Sensazione di ansia o depressione legata al gioco</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Consigli per il Gioco Responsabile</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Stabilisci un budget e rispettalo rigorosamente</li>
              <li>Non giocare mai denaro necessario per spese essenziali</li>
              <li>Considera il gioco come intrattenimento, non come fonte di reddito</li>
              <li>Fai pause regolari e mantieni un equilibrio con altre attività</li>
              <li>Non giocare sotto l'effetto di alcol o droghe</li>
              <li>Utilizza gli strumenti di autoesclusione quando necessario</li>
              <li>Parla con amici o familiari se il gioco diventa problematico</li>
              <li>Cerca aiuto professionale ai primi segnali di dipendenza</li>
            </ul>
          </section>

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
                  Ricevi notifiche sul tempo trascorso giocando per mantenere il controllo delle tue sessioni.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/5 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Supporto Immediato</h2>
            <p className="text-gray-300 mb-4">
              Se tu o qualcuno che conosci ha problemi con il gioco, non esitare a chiedere aiuto.
              Il supporto è disponibile 24/7 in modo completamente confidenziale e gratuito.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Supporto Telefonico</h3>
                <p className="text-gray-300">
                  Chiama il numero verde per parlare con un operatore specializzato.
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Supporto Online</h3>
                <p className="text-gray-300">
                  Accedi al sito web nazionale per risorse e supporto online immediato.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}