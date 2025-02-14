import { SEO } from '../components/SEO';

export function PrivacyPolicyPage() {
  return (
    <div className="page-section">
      <SEO 
        title="Privacy Policy"
        description="Informativa sulla privacy di Ludopathyland - Come trattiamo e proteggiamo i tuoi dati personali"
      />
      
      <div className="page-container max-w-4xl">
        <h1 className="section-title">Privacy Policy</h1>
        <div className="prose prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Raccolta dei Dati</h2>
            <p className="text-gray-300 mb-4">
              Raccogliamo e trattiamo i seguenti tipi di dati personali:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Informazioni di registrazione (nome, email, data di nascita)</li>
              <li>Dati di utilizzo del sito</li>
              <li>Informazioni sul dispositivo e browser</li>
              <li>Cookie e tecnologie simili</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Utilizzo dei Dati</h2>
            <p className="text-gray-300 mb-4">
              Utilizziamo i tuoi dati personali per:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Fornirti i nostri servizi</li>
              <li>Personalizzare la tua esperienza</li>
              <li>Migliorare il nostro sito</li>
              <li>Comunicare con te</li>
              <li>Rispettare gli obblighi legali</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Condivisione dei Dati</h2>
            <p className="text-gray-300 mb-4">
              Condividiamo i tuoi dati solo con:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Fornitori di servizi autorizzati</li>
              <li>Autorità competenti (se richiesto dalla legge)</li>
              <li>Partner commerciali (con il tuo consenso)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. I Tuoi Diritti</h2>
            <p className="text-gray-300 mb-4">
              Hai il diritto di:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Accedere ai tuoi dati personali</li>
              <li>Richiedere la rettifica dei dati</li>
              <li>Richiedere la cancellazione dei dati</li>
              <li>Opporti al trattamento</li>
              <li>Revocare il consenso</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Sicurezza</h2>
            <p className="text-gray-300 mb-4">
              Adottiamo misure di sicurezza tecniche e organizzative per proteggere i tuoi dati:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Crittografia SSL/TLS</li>
              <li>Firewall e sistemi di sicurezza</li>
              <li>Accesso limitato ai dati</li>
              <li>Formazione del personale</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contatti</h2>
            <p className="text-gray-300">
              Per qualsiasi domanda sulla privacy, contattaci a:{' '}
              <a href="mailto:privacy@ludopathyland.com" className="text-purple-400 hover:text-purple-300">
                privacy@ludopathyland.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}