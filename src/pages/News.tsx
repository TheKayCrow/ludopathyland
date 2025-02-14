import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { useNews } from '../hooks/useNews';
import { Loader } from '../components/Loader';

export function News() {
  const { news, loading, error } = useNews();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredNews = useMemo(() => {
    return news.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || article.category.toLowerCase() === selectedCategory.toLowerCase();
      return matchesSearch && matchesCategory;
    });
  }, [news, searchQuery, selectedCategory]);

  if (loading) return <Loader />;
  if (error) return <div className="text-red-500 text-center pt-24">{error}</div>;

  return (
    <div className="page-section">
      <div className="page-container">
        <h1 className="section-title">News e Aggiornamenti</h1>
        <p className="section-subtitle">Le ultime notizie dal mondo dei casinò online</p>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cerca notizie..."
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
            <option value="normative">Normative</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="tendenze">Tendenze</option>
            <option value="sicurezza">Sicurezza</option>
            <option value="bonus">Bonus</option>
          </select>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredNews.map((article) => (
            <article key={article.id} className="bg-gray-800/30 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/50 transition-all">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-purple-400 mb-2">
                  <span>{article.category}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p className="text-gray-400 mb-4">{article.excerpt}</p>
                <button className="text-purple-400 hover:text-purple-300 transition-colors">
                  Leggi di più →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}