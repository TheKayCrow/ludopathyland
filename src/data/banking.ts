export interface PaymentMethod {
  name: string;
  image: string;
  fees: string;
  timing: string;
  limits: string;
  description: string;
  advantages: string[];
  disadvantages: string[];
}

export const paymentMethods: PaymentMethod[] = [
  {
    name: 'HYPE',
    image: 'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&q=80&w=300',
    fees: '0%',
    timing: 'Istantaneo',
    limits: '€10 - €50.000',
    description: 'HYPE è una soluzione di banking digitale innovativa che offre transazioni istantanee e zero commissioni.',
    advantages: [
      'Zero commissioni',
      'Transazioni istantanee',
      'App user-friendly',
      'Cashback sugli acquisti'
    ],
    disadvantages: [
      'Disponibile solo in Italia',
      'Richiede verifica identità',
      'Limiti mensili su piano base'
    ]
  },
  {
    name: 'PayPal',
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&q=80&w=300',
    fees: '0-2%',
    timing: 'Istantaneo',
    limits: '€10 - €10.000',
    description: 'PayPal è uno dei metodi più sicuri e veloci per le transazioni online.',
    advantages: [
      'Transazioni istantanee',
      'Alta sicurezza',
      'Ampiamente accettato'
    ],
    disadvantages: [
      'Alcune commissioni',
      'Limiti di prelievo',
      'Non sempre disponibile'
    ]
  },
  {
    name: 'Bonifico Bancario',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=300',
    fees: '€0-5',
    timing: '1-3 giorni',
    limits: '€20 - €50.000',
    description: 'Il metodo tradizionale più sicuro per trasferimenti di grandi somme.',
    advantages: [
      'Nessun limite massimo',
      'Molto sicuro',
      'Costi bassi'
    ],
    disadvantages: [
      'Tempi lunghi',
      'Processo più complesso',
      'Non adatto a piccole somme'
    ]
  },
  {
    name: 'Carte di Credito',
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=300',
    fees: '1-3%',
    timing: 'Istantaneo',
    limits: '€10 - €5.000',
    description: 'Visa e Mastercard sono accettate dalla maggior parte dei casinò online.',
    advantages: [
      'Depositi istantanei',
      'Ampiamente accettate',
      'Facili da usare'
    ],
    disadvantages: [
      'Commissioni più alte',
      'Limiti di spesa',
      'Possibili restrizioni bancarie'
    ]
  }
];