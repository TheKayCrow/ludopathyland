export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: "Nuove Regolamentazioni per i Casinò Online in Italia",
    date: "15 Mar 2025",
    category: "Normative",
    image: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&q=80&w=600",
    excerpt: "L'ADM ha introdotto nuove normative per i casinò online. Scopri cosa cambia per gli operatori e i giocatori.",
    content: "L'Agenzia delle Dogane e dei Monopoli ha recentemente introdotto nuove normative..."
  },
  {
    id: '2',
    title: "Innovazione nel Gambling: L'Impatto dell'AI",
    date: "12 Mar 2025",
    category: "Tecnologia",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
    excerpt: "Come l'intelligenza artificiale sta rivoluzionando l'industria del gambling online.",
    content: "L'intelligenza artificiale sta trasformando il modo in cui interagiamo con i casinò online..."
  },
  {
    id: '3',
    title: "I Trend dei Casinò Online nel 2025",
    date: "10 Mar 2025",
    category: "Tendenze",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    excerpt: "Analisi dei trend emergenti nel settore dei casinò online e previsioni per il futuro.",
    content: "Il settore dei casinò online continua a evolversi rapidamente..."
  },
  {
    id: '4',
    title: "Sicurezza nei Pagamenti: Le Nuove Tecnologie",
    date: "8 Mar 2025",
    category: "Sicurezza",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600",
    excerpt: "Le ultime innovazioni nella sicurezza dei pagamenti per i casinò online.",
    content: "La sicurezza dei pagamenti rimane una priorità assoluta..."
  },
  {
    id: '5',
    title: "Bonus di Benvenuto: Guida Completa 2025",
    date: "5 Mar 2025",
    category: "Bonus",
    image: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&q=80&w=600",
    excerpt: "Tutto quello che devi sapere sui bonus di benvenuto dei casinò online nel 2025.",
    content: "I bonus di benvenuto sono uno strumento fondamentale..."
  }
];