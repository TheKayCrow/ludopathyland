```typescript
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    question: "Come scelgo un casinò online sicuro?",
    answer: "Per scegliere un casinò online sicuro, verifica sempre: 1) La licenza AAMS/ADM, 2) Le recensioni degli utenti, 3) I metodi di pagamento sicuri, 4) La presenza di gioco responsabile, 5) L'assistenza clienti in italiano.",
    category: "Sicurezza"
  },
  {
    question: "Quali sono i metodi di pagamento più sicuri?",
    answer: "I metodi più sicuri includono: PayPal, carte di credito di circuiti principali (Visa/Mastercard), bonifici bancari e portafogli elettronici come Skrill e Neteller. Ogni metodo ha i suoi vantaggi in termini di velocità e commissioni.",
    category: "Pagamenti"
  },
  {
    question: "Come funzionano i bonus di benvenuto?",
    answer: "I bonus di benvenuto sono offerte per i nuovi iscritti. Tipicamente, prevedono un bonus sul primo deposito (es. 100% fino a 200€) e/o giri gratuiti. Importante: leggi sempre i termini e condizioni, in particolare i requisiti di scommessa.",
    category: "Bonus"
  },
  {
    question: "Cosa sono i requisiti di scommessa?",
    answer: "I requisiti di scommessa indicano quante volte devi giocare l'importo del bonus prima di poter prelevare le vincite. Ad esempio, con un requisito 35x su un bonus di 100€, dovrai effettuare puntate per 3.500€ prima del prelievo.",
    category: "Bonus"
  },
  {
    question: "Come posso limitare il mio gioco?",
    answer: "I casinò offrono strumenti di autoesclusione e limiti di deposito. Puoi impostare: 1) Limiti giornalieri/settimanali/mensili, 2) Pause temporanee, 3) Autoesclusione permanente. Usa questi strumenti per mantenere il controllo.",
    category: "Gioco Responsabile"
  }
];

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  const toggleQuestion = (question: string) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(question)) {
      newOpenQuestions.delete(question);
    } else {
      newOpenQuestions.add(question);
    }
    setOpenQuestions(newOpenQuestions);
  };

  const filteredFaqs = activeCategory
    ? faqs.filter(faq => faq.category === activeCategory)
    : faqs;

  return (
    <section className="py-12">
      <div className="container-responsive">
        <div className="flex items-center gap-2 mb-8">
          <HelpCircle className="h-8 w-8 text-pastel-purple" />
          <h2 className="text-2xl font-bold">Domande Frequenti</h2>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full transition-all ${
              activeCategory === null
                ? 'bg-pastel-purple text-gray-900'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Tutte
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-pastel-purple text-gray-900'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-gray-800/50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(faq.question)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/80 transition-colors"
              >
                <span className="font-semibold text-left">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openQuestions.has(faq.question) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openQuestions.has(faq.question) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-4 text-gray-300 border-t border-gray-700">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```