import { NewsArticle } from '../types';
import { newsArticles as fallbackNews } from '../data/news';

const API_KEYS = {
  newsapi: '2c6e6c9c5c3548c482815747c3a24aa2',
  mediastack: '803b6f09ec5963033f224c964e659f62',
  apitube: 'api_live_FHVwHQpEN1aiyYPM7p5XRBqYHZnJAFAYth4xgwcsKXFAcfRMyry',
  rapidapi: 'e9ef2f1150mshf85fbd75df3c4b9p10a266jsn408b80ec15c8',
  worldnews: 'x7F1m2J9N9Q7X7veRL5I2bTu2JGbypAv'
};

const CATEGORY_IMAGES = {
  'casino': [
    'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80&w=600'
  ],
  'gambling': [
    'https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&q=80&w=600'
  ],
  'technology': [
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600'
  ],
  'business': [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600'
  ],
  'default': [
    'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&q=80&w=600'
  ]
};

function getRandomImage(category: string): string {
  const images = CATEGORY_IMAGES[category.toLowerCase()] || CATEGORY_IMAGES.default;
  return images[Math.floor(Math.random() * images.length)];
}

function categorizeArticle(title: string, content: string): string {
  const text = `${title} ${content}`.toLowerCase();
  
  const categories = {
    'Casino': ['casino', 'gambling', 'poker', 'slot', 'roulette', 'blackjack'],
    'Technology': ['tech', 'technology', 'software', 'digital', 'online', 'mobile'],
    'Business': ['business', 'market', 'economy', 'finance', 'industry'],
    'Regulation': ['regulation', 'law', 'legal', 'license', 'compliance'],
    'Security': ['security', 'safety', 'protection', 'fraud', 'cybersecurity']
  };

  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      return category;
    }
  }

  return 'General';
}

function enhanceContent(title: string, content: string, category: string): string {
  if (content.length > 500) return content;

  const templates = {
    'Casino': `
      ${content}

      Approfondimento sul settore dei casinò online:
      
      Il settore dei casinò online continua a evolversi rapidamente, offrendo:
      • Nuove tecnologie per un'esperienza di gioco immersiva
      • Maggiore sicurezza e protezione per i giocatori
      • Varietà di giochi e bonus sempre più ampia
      • Integrazione con sistemi di pagamento innovativi
      
      È fondamentale rimanere aggiornati sugli sviluppi del settore per garantire un'esperienza di gioco sicura e responsabile.
    `,
    'Technology': `
      ${content}

      Impatto tecnologico sul gaming online:
      
      L'innovazione tecnologica sta trasformando il settore con:
      • Intelligenza artificiale per personalizzare l'esperienza
      • Blockchain per transazioni più sicure
      • Realtà virtuale per giochi immersivi
      • Cloud gaming per accesso istantaneo
      
      Questi avanzamenti stanno ridefinendo il futuro del gaming online.
    `,
    'default': `
      ${content}

      Analisi del settore:
      
      Il mondo del gaming online è in continua evoluzione:
      • Nuove tendenze emergenti
      • Maggiore focus sulla sicurezza
      • Innovazioni tecnologiche
      • Regolamentazioni in evoluzione
      
      Continueremo a monitorare gli sviluppi per fornire aggiornamenti tempestivi.
    `
  };

  return templates[category] || templates.default;
}

async function fetchFromNewsAPI(): Promise<NewsArticle[]> {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=casino+gambling&language=it&sortBy=publishedAt&apiKey=${API_KEYS.newsapi}`
    );
    const data = await response.json();

    if (!data.articles) return [];

    return data.articles.map(article => {
      const category = categorizeArticle(article.title, article.description || '');
      return {
        id: Math.random().toString(),
        title: article.title,
        date: new Date(article.publishedAt).toLocaleDateString(),
        category,
        image: article.urlToImage || getRandomImage(category),
        excerpt: article.description || '',
        content: enhanceContent(article.title, article.content || article.description || '', category)
      };
    });
  } catch (error) {
    console.error('Error fetching from NewsAPI:', error);
    return [];
  }
}

async function fetchFromMediaStack(): Promise<NewsArticle[]> {
  try {
    const response = await fetch(
      `http://api.mediastack.com/v1/news?access_key=${API_KEYS.mediastack}&keywords=casino,gambling&languages=it&limit=100`
    );
    const data = await response.json();

    if (!data.data) return [];

    return data.data.map(article => {
      const category = categorizeArticle(article.title, article.description || '');
      return {
        id: Math.random().toString(),
        title: article.title,
        date: new Date(article.published_at).toLocaleDateString(),
        category,
        image: article.image || getRandomImage(category),
        excerpt: article.description || '',
        content: enhanceContent(article.title, article.description || '', category)
      };
    });
  } catch (error) {
    console.error('Error fetching from MediaStack:', error);
    return [];
  }
}

async function fetchFromAPITube(): Promise<NewsArticle[]> {
  try {
    const response = await fetch(
      'https://api.apitube.io/v1/news/articles?query=casino+gambling&language=it',
      {
        headers: {
          'Authorization': `Bearer ${API_KEYS.apitube}`
        }
      }
    );
    const data = await response.json();

    if (!data.data) return [];

    return data.data.map(article => {
      const category = categorizeArticle(article.title, article.content || '');
      return {
        id: Math.random().toString(),
        title: article.title,
        date: new Date(article.published_at).toLocaleDateString(),
        category,
        image: article.image || getRandomImage(category),
        excerpt: article.description || '',
        content: enhanceContent(article.title, article.content || article.description || '', category)
      };
    });
  } catch (error) {
    console.error('Error fetching from APITube:', error);
    return [];
  }
}

async function fetchFromRapidAPI(): Promise<NewsArticle[]> {
  try {
    const response = await fetch(
      'https://gambling-news-live.p.rapidapi.com/news',
      {
        headers: {
          'X-RapidAPI-Key': API_KEYS.rapidapi,
          'X-RapidAPI-Host': 'gambling-news-live.p.rapidapi.com'
        }
      }
    );
    const data = await response.json();

    if (!data.articles) return [];

    return data.articles.map(article => {
      const category = categorizeArticle(article.title, article.description || '');
      return {
        id: Math.random().toString(),
        title: article.title,
        date: new Date(article.publishedAt).toLocaleDateString(),
        category,
        image: article.urlToImage || getRandomImage(category),
        excerpt: article.description || '',
        content: enhanceContent(article.title, article.content || article.description || '', category)
      };
    });
  } catch (error) {
    console.error('Error fetching from RapidAPI:', error);
    return [];
  }
}

async function fetchFromWorldNews(): Promise<NewsArticle[]> {
  try {
    const response = await fetch(
      `https://api.worldnewsapi.com/search-news?text=casino gambling&language=it&api-key=${API_KEYS.worldnews}`
    );
    const data = await response.json();

    if (!data.news) return [];

    return data.news.map(article => {
      const category = categorizeArticle(article.title, article.text || '');
      return {
        id: Math.random().toString(),
        title: article.title,
        date: new Date(article.publish_date).toLocaleDateString(),
        category,
        image: article.image || getRandomImage(category),
        excerpt: article.text?.substring(0, 200) + '...' || '',
        content: enhanceContent(article.title, article.text || '', category)
      };
    });
  } catch (error) {
    console.error('Error fetching from World News API:', error);
    return [];
  }
}

export async function getNews(): Promise<NewsArticle[]> {
  try {
    const [
      newsApiArticles, 
      mediaStackArticles, 
      apiTubeArticles,
      rapidApiArticles,
      worldNewsArticles
    ] = await Promise.all([
      fetchFromNewsAPI(),
      fetchFromMediaStack(),
      fetchFromAPITube(),
      fetchFromRapidAPI(),
      fetchFromWorldNews()
    ]);

    const allArticles = [
      ...newsApiArticles, 
      ...mediaStackArticles, 
      ...apiTubeArticles,
      ...rapidApiArticles,
      ...worldNewsArticles
    ];

    if (allArticles.length === 0) {
      console.log('No articles found from APIs, using fallback news');
      return fallbackNews;
    }

    // Remove duplicates based on title
    const uniqueArticles = Array.from(
      new Map(allArticles.map(article => [article.title, article])).values()
    );

    // Sort by date (most recent first) and limit to 10 articles
    return uniqueArticles
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 10);
  } catch (error) {
    console.error('Error fetching news:', error);
    return fallbackNews;
  }
}

export function subscribeToNews(callback: (news: NewsArticle[]) => void): () => void {
  const interval = setInterval(async () => {
    const news = await getNews();
    callback(news);
  }, 5 * 60 * 1000); // Update every 5 minutes

  return () => clearInterval(interval);
}