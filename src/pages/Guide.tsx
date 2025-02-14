import { Book, BookOpen, GraduationCap } from 'lucide-react';
import { Button } from '../components/Button';

const guides = [
  {
    category: "Per Principianti",
    icon: Book,
    guides: [
      {
        title: "Guida al Gioco Responsabile",
        description: "Impara a giocare in modo sicuro e responsabile",
        readTime: "5 min"
      },
      {
        title: "Come Scegliere un Casinò",
        description: "Fattori da considerare nella scelta di un casinò online",
        readTime: "8 min"
      },
      {
        title: "ABC dei Bonus",
        description: "Tutto quello che devi sapere sui bonus casinò",
        readTime: "6 min"
      }
    ]
  },
  {
    category: "Strategie",
    icon: GraduationCap,
    guides: [
      {
        title: "Strategie Roulette",
        description: "Le migliori strategie per la roulette online",
        readTime: "10 min"
      },
      {
        title: "Guida al Blackjack",
        description: "Tecniche avanzate per vincere al blackjack",
        readTime: "12 min"
      },
      {
        title: "Poker Texas Hold'em",
        description: "Strategie vincenti per il poker online",
        readTime: "15 min"
      }
    ]
  },
  {
    category: "Glossario",
    icon: BookOpen,
    guides: [
      {
        title: "Termini del Casinò",
        description: "Glossario completo dei termini più comuni",
        readTime: "4 min"
      },
      {
        title: "Regole dei Giochi",
        description: "Spiegazione dettagliata delle regole principali",
        readTime: "7 min"
      },
      {
        title: "Termini dei Bonus",
        description: "Comprendi i requisiti e i termini dei bonus",
        readTime: "5 min"
      }
    ]
  }
];

export function Guide() {
  return (
    <div className="page-section">
      <div className="page-container">
        <h1 className="section-title">Guide e Tutorial</h1>
        <p className="section-subtitle">Tutto quello che devi sapere sul mondo dei casinò online</p>

        <div className="space-y-12">
          {guides.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index}>
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="h-8 w-8 text-purple-400" />
                  <h2 className="text-2xl font-semibold">{section.category}</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {section.guides.map((guide, guideIndex) => (
                    <div key={guideIndex} className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all">
                      <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
                      <p className="text-gray-400 mb-4">{guide.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-purple-400">Tempo lettura: {guide.readTime}</span>
                        <Button variant="outline" size="sm">Leggi Guida</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}