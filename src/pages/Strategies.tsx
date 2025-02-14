import { useState, useMemo } from 'react';
import { Search, BookOpen, Trophy, Star, Clock } from 'lucide-react';
import { guides } from '../data/guides';
import { Button } from '../components/Button';

export function Strategies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);

  const filteredGuides = useMemo(() => {
    return guides.filter(guide => {
      const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          guide.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || guide.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesDifficulty = selectedDifficulty === 'all' || guide.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [guides, searchQuery, selectedCategory, selectedDifficulty]);

  const selectedGuideData = useMemo(() => {
    return guides.find(guide => guide.id === selectedGuide);
  }, [selectedGuide]);

  return (
    <div className="page-section">
      <div className="page-container">
        <div className="flex items-center gap-3 mb-2">
          <Trophy className="h-8 w-8 text-purple-400" />
          <h1 className="section-title">Trucchi e Strategie</h1>
        </div>
        <p className="section-subtitle">Guide dettagliate e strategie vincenti per migliorare il tuo gioco</p>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cerca guide e strategie..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg bg-gray-800/50 pl-12 pr-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-lg bg-gray-800/50 px-6 py-3 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 [&>option]:bg-gray-900"
          >
            <option value="all">Tutte le categorie</option>
            <option value="fondamenti">Fondamenti</option>
            <option value="giochi da tavolo">Giochi da Tavolo</option>
            <option value="poker">Poker</option>
          </select>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="rounded-lg bg-gray-800/50 px-6 py-3 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 [&>option]:bg-gray-900"
          >
            <option value="all">Tutte le difficoltà</option>
            <option value="principiante">Principiante</option>
            <option value="intermedio">Intermedio</option>
            <option value="avanzato">Avanzato</option>
          </select>
        </div>

        {selectedGuideData ? (
          <div className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm">
            <button
              onClick={() => setSelectedGuide(null)}
              className="text-purple-400 hover:text-purple-300 mb-6"
            >
              ← Torna alla lista
            </button>
            
            <img
              src={selectedGuideData.image}
              alt={selectedGuideData.title}
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            
            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-purple-400" />
                {selectedGuideData.category}
              </span>
              <span className="flex items-center gap-2">
                <Star className="h-5 w-5 text-purple-400" />
                {selectedGuideData.difficulty}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-purple-400" />
                {selectedGuideData.readTime}
              </span>
            </div>

            <h2 className="text-3xl font-bold mb-4">{selectedGuideData.title}</h2>
            <p className="text-gray-400 mb-8">{selectedGuideData.description}</p>

            {selectedGuideData.steps && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Passi da Seguire</h3>
                <div className="space-y-4">
                  {selectedGuideData.steps.map((step, index) => (
                    <div key={index} className="bg-gray-800/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">{index + 1}. {step.title}</h4>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedGuideData.tips && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Consigli Utili</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  {selectedGuideData.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredGuides.map((guide) => (
              <article
                key={guide.id}
                className="bg-gray-800/30 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/50 transition-all cursor-pointer"
                onClick={() => setSelectedGuide(guide.id)}
              >
                <img src={guide.image} alt={guide.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-purple-400 mb-2">
                    <span>{guide.category}</span>
                    <span>•</span>
                    <span>{guide.difficulty}</span>
                    <span>•</span>
                    <span>{guide.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">{guide.title}</h2>
                  <p className="text-gray-400 mb-4">{guide.description}</p>
                  <Button variant="outline" size="sm">
                    Leggi Guida
                  </Button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}