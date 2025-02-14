import { Button } from './Button';
import { useTranslation } from 'react-i18next';
import { useNews } from '../hooks/useNews';
import { Loader } from './Loader';
import { useState } from 'react';
import { Modal } from './Modal';
import { NewsArticle } from '../types';
import { AnimatedSection } from './AnimatedSection';

export function BlogSection() {
  const { t } = useTranslation();
  const { news, loading } = useNews();
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  
  // Get the 3 most recent news articles
  const recentNews = news.slice(0, 3);

  const handleReadArticle = (article: NewsArticle) => {
    setSelectedArticle(article);
  };

  if (loading) {
    return (
      <AnimatedSection className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="section-title">{t('sections.blog.title')}</h2>
          <p className="section-subtitle">Caricamento notizie in corso...</p>
          <Loader />
        </div>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="section-title">{t('sections.blog.title')}</h2>
        <p className="section-subtitle">{t('sections.blog.subtitle')}</p>
        
        <div className="grid gap-6 md:grid-cols-3">
          {recentNews.map((post) => (
            <div key={post.id} className="bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-all">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&q=80&w=600';
                }}
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-purple-400 mb-2">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleReadArticle(post)}
                >
                  {t('buttons.readArticle')}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Modal
          isOpen={!!selectedArticle}
          onClose={() => setSelectedArticle(null)}
          title={selectedArticle?.title || ''}
        >
          <div className="space-y-6">
            <img
              src={selectedArticle?.image}
              alt={selectedArticle?.title}
              className="w-full h-64 object-cover rounded-lg"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&q=80&w=600';
              }}
            />
            <div className="flex items-center gap-2 text-sm text-purple-400">
              <span>{selectedArticle?.category}</span>
              <span>•</span>
              <span>{selectedArticle?.date}</span>
            </div>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                {selectedArticle?.content}
              </p>
            </div>
          </div>
        </Modal>
      </div>
    </AnimatedSection>
  );
}