export interface Guide {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzato';
  readTime: string;
  image: string;
  content: string;
  steps?: {
    title: string;
    description: string;
  }[];
  tips?: string[];
}

export const guides: Guide[] = [
  {
    id: 'bankroll-management',
    title: 'Gestione del Bankroll',
    description: 'Impara a gestire il tuo budget di gioco in modo responsabile e sostenibile nel lungo periodo.',
    category: 'Fondamenti',
    difficulty: 'Principiante',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600',
    content: 'La gestione del bankroll è fondamentale per un gioco responsabile...',
    steps: [
      {
        title: 'Definisci il tuo budget',
        description: 'Stabilisci una somma che puoi permetterti di perdere'
      },
      {
        title: 'Regola del 5%',
        description: 'Non scommettere mai più del 5% del tuo bankroll totale'
      },
      {
        title: 'Traccia le tue sessioni',
        description: 'Mantieni un registro delle tue vincite e perdite'
      }
    ],
    tips: [
      'Usa solo denaro che puoi permetterti di perdere',
      'Imposta limiti giornalieri e settimanali',
      'Non inseguire mai le perdite'
    ]
  },
  {
    id: 'blackjack-basic-strategy',
    title: 'Strategia Base Blackjack',
    description: 'Padroneggia le mosse fondamentali del blackjack per ridurre il vantaggio del banco.',
    category: 'Giochi da Tavolo',
    difficulty: 'Intermedio',
    readTime: '15 min',
    image: 'https://images.unsplash.com/photo-1601556123240-462c758a50db?auto=format&fit=crop&q=80&w=600',
    content: 'La strategia base del blackjack è un insieme di regole matematicamente ottimali...',
    steps: [
      {
        title: 'Comprendi il valore delle carte',
        description: 'Impara come valutare le diverse combinazioni'
      },
      {
        title: 'Memorizza la tabella delle decisioni',
        description: 'Studia quando chiedere carta, stare o raddoppiare'
      }
    ],
    tips: [
      "Non prendere mai l\"assicurazione",
      'Dividi sempre gli assi e gli 8',
      'Stai sempre su 17 o più'
    ]
  },
  {
    id: 'poker-tournament',
    title: 'Strategie Tornei Poker',
    description: 'Tecniche avanzate per eccellere nei tornei di poker online.',
    category: 'Poker',
    difficulty: 'Avanzato',
    readTime: '20 min',
    image: 'https://images.unsplash.com/photo-1544098281-073ae35c98b4?auto=format&fit=crop&q=80&w=600',
    content: 'Il successo nei tornei di poker richiede una strategia specifica...',
    steps: [
      {
        title: 'Early Game',
        description: 'Gioca tight e accumula chips'
      },
      {
        title: 'Middle Game',
        description: 'Aumenta la pressione e ruba i bui'
      },
      {
        title: 'Final Table',
        description: 'Adatta il gioco alla struttura dei premi'
      }
    ],
    tips: [
      'Preserva il tuo stack nei primi livelli',
      'Sfrutta la bolla del torneo',
      'Studia i pattern dei tuoi avversari'
    ]
  }
];