import { NewsArticle, newsArticles } from '../data/news';

// Simula un ritardo di rete
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Simula il recupero delle notizie dal server
export async function getNews(): Promise<NewsArticle[]> {
  await delay(1000);
  return newsArticles;
}

// Simula l'aggiornamento periodico delle notizie
export function subscribeToNews(callback: (news: NewsArticle[]) => void): () => void {
  const interval = setInterval(async () => {
    // Simula nuove notizie aggiungendo un timestamp
    const updatedNews = newsArticles.map(article => ({
      ...article,
      date: new Date().toLocaleDateString()
    }));
    callback(updatedNews);
  }, 60000); // Aggiorna ogni minuto

  return () => clearInterval(interval);
}