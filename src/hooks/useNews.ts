import { useState, useEffect } from 'react';
import { NewsArticle } from '../data/news';
import { getNews, subscribeToNews } from '../services/newsService';

export function useNews() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isSubscribed = true;

    const fetchNews = async () => {
      try {
        const data = await getNews();
        if (isSubscribed) {
          setNews(data);
          setLoading(false);
        }
      } catch (err) {
        if (isSubscribed) {
          setError(err instanceof Error ? err.message : 'Errore nel caricamento delle notizie');
          setLoading(false);
        }
      }
    };

    // Carica le notizie iniziali
    fetchNews();

    // Sottoscrizione agli aggiornamenti
    const unsubscribe = subscribeToNews((updatedNews) => {
      if (isSubscribed) {
        setNews(updatedNews);
      }
    });

    return () => {
      isSubscribed = false;
      unsubscribe();
    };
  }, []);

  return { news, loading, error };
}