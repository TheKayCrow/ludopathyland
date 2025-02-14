import { SEO } from '../components/SEO';

export function TermsOfServicePage() {
  return (
    <div className="page-section">
      <SEO 
        title="Termini di Servizio"
        description="Termini e condizioni di utilizzo di Ludopathyland - I tuoi diritti e responsabilità"
      />
      
      <div className="page-container max-w-4xl">
        <h1 className="section-title">Termini di Servizio</h1>
        <div className="prose prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Accettazione dei Termini</h2>
            <p className="text-gray-300">
              Utilizzando il nostro sito web, accetti di essere vincolato da questi termini di servizio. 
              Se non accetti questi termini, ti preghiamo di non utilizzare il sito.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Utilizzo del Servizio</h2>
            <p className="text-gray-300 mb-4">
              Ti impegni a utilizzare il servizio solo per scopi legali e in accordo con questi termini.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Non violare leggi o regolamenti</li>
              <li>Non diffondere contenuti illegali o dannosi</li>
              <li>Non interferire con il funzionamento del sito</li>
              <li>Non accedere senza autorizzazione</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Account e Registrazione</h2>
            <p className="text-gray-300 mb-4">
              Per utilizzare alcune funzionalità del sito, potrebbe essere necessario registrare un account.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Fornire informazioni accurate e complete</li>
              <li>Mantenere la sicurezza delle credenziali</li>
              <li>Essere responsabile per tutte le attività dell'account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Proprietà Intellettuale</h2>
            <p className="text-gray-300 mb-4">
              Tutti i contenuti presenti sul sito sono di nostra proprietà o dei nostri licenziatari.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Copyright e marchi registrati</li>
              <li>Limitazioni all'uso dei contenuti</li>
              <li>Divieto di riproduzione non autorizzata</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Limitazione di Responsabilità</h2>
            <p className="text-gray-300">
              Il servizio è fornito "così com'è" e non forniamo garanzie di alcun tipo, 
              esplicite o implicite. Non saremo responsabili per danni diretti, indiretti, 
              incidentali o consequenziali.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Modifiche ai Termini</h2>
            <p className="text-gray-300">
              Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. 
              Le modifiche saranno effettive immediatamente dopo la pubblicazione sul sito.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Contatti</h2>
            <p className="text-gray-300">
              Per domande sui termini di servizio, contattaci a:{' '}
              <a href="mailto:legal@ludopathyland.com" className="text-purple-400 hover:text-purple-300">
                legal@ludopathyland.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}