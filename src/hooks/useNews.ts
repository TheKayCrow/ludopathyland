import { useState, useEffect } from 'react';
import { NewsArticle } from '../types';
import { newsArticles as fallbackNews } from '../data/news';

export function useNews() {
  const [news, setNews] = useState<NewsArticle[]>(fallbackNews);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchNews() {
      try {
        setLoading(true);
        // In development or if API fails, use static data
        if (import.meta.env.DEV || !mounted) {
          setNews(fallbackNews);
          setError(null);
          return;
        }

        // In production, try to fetch from API
        const response = await fetch('/api/news');
        if (!response.ok) throw new Error('Failed to fetch news');
        const data = await response.json();
        
        if (mounted) {
          setNews(data);
          setError(null);
        }
      } catch (err) {
        console.error('Error fetching news:', err);
        // Fallback to static data on error
        if (mounted) {
          setNews(fallbackNews);
          setError(null); // Don't show error to user since we have fallback data
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchNews();

    return () => {
      mounted = false;
    };
  }, []);

  return { news, loading, error };
}