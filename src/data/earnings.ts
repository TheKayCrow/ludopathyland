export interface EarningMethod {
  title: string;
  description: string;
  category: string;
  potential: string;
  difficulty: string;
  timeRequired: string;
  link?: string;
  requirements: string[];
}

export const earningMethods: EarningMethod[] = [
  {
    title: "Honeygain - Guadagna con la tua Connessione",
    description: "Trasforma la tua connessione internet inutilizzata in un flusso di reddito passivo. Honeygain ti paga per condividere la tua banda internet in eccesso.",
    category: "Passivo",
    potential: "€20-50/mese",
    difficulty: "Facile",
    timeRequired: "Passivo",
    link: "https://bit.ly/3ktSk8W",
    requirements: [
      "Connessione internet stabile",
      "Dispositivo sempre connesso",
      "Almeno 10GB di traffico mensile disponibile",
      "Indirizzo email valido"
    ]
  },
  {
    title: "Pawns - Guadagna Giocando e Condividendo Internet",
    description: "Guadagna in due modi: giocando ai tuoi giochi preferiti e condividendo la banda internet inutilizzata. Pawns ti permette di monetizzare il tuo tempo libero e le tue risorse in modo sicuro.",
    category: "Passivo",
    potential: "€30-100/mese",
    difficulty: "Facile",
    timeRequired: "Passivo",
    link: "https://bit.ly/pawnsL",
    requirements: [
      "PC o dispositivo per gaming",
      "Connessione internet stabile",
      "Almeno 10GB di traffico mensile disponibile",
      "Account Steam o Epic Games"
    ]
  },
  {
    title: "Programmi di Affiliazione",
    description: "Guadagna promuovendo prodotti e servizi di qualità attraverso il marketing di affiliazione",
    category: "Affiliazioni",
    potential: "€500-5000/mese",
    difficulty: "Media",
    timeRequired: "Part-time/Full-time",
    requirements: [
      "Competenze di marketing digitale",
      "Capacità di creare contenuti",
      "Conoscenza SEO base",
      "Budget iniziale per pubblicità (opzionale)"
    ]
  },
  {
    title: "Trading Sportivo",
    description: "Applica strategie matematiche per il trading su eventi sportivi",
    category: "Trading",
    potential: "€1000-10000/mese",
    difficulty: "Alta",
    timeRequired: "Full-time",
    requirements: [
      "Conoscenza approfondita dello sport",
      "Competenze matematiche e statistiche",
      "Gestione del rischio",
      "Capitale iniziale significativo"
    ]
  },
  {
    title: "Content Creation",
    description: "Crea contenuti di valore per blog, social media e piattaforme di streaming",
    category: "Content",
    potential: "€300-3000/mese",
    difficulty: "Media",
    timeRequired: "Part-time",
    requirements: [
      "Creatività e originalità",
      "Competenze di scrittura o video editing",
      "Conoscenza delle piattaforme social",
      "Attrezzatura base per contenuti multimediali"
    ]
  },
  {
    title: "Arbitraggio Sportivo",
    description: "Sfrutta le differenze di quote tra diversi bookmaker",
    category: "Trading",
    potential: "€200-2000/mese",
    difficulty: "Media",
    timeRequired: "Part-time",
    requirements: [
      "Conoscenza del betting",
      "Software di comparazione quote",
      "Capitale iniziale medio",
      "Accesso a multiple piattaforme"
    ]
  },
  {
    title: "Recensioni e Guide",
    description: "Crea contenuti informativi su casinò, scommesse e giochi online",
    category: "Content",
    potential: "€400-4000/mese",
    difficulty: "Media",
    timeRequired: "Part-time/Full-time",
    requirements: [
      "Esperienza nel settore",
      "Capacità di scrittura tecnica",
      "Conoscenza SEO",
      "Portfolio di lavori precedenti"
    ]
  },
  {
    title: "Consulenza nel Gambling",
    description: "Offri servizi di consulenza per giocatori e operatori",
    category: "Affiliazioni",
    potential: "€1000-8000/mese",
    difficulty: "Alta",
    timeRequired: "Full-time",
    requirements: [
      "Esperienza comprovata nel settore",
      "Certificazioni rilevanti",
      "Network professionale",
      "Competenze di business development"
    ]
  }
];