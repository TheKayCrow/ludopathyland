import cron from 'node-cron';
import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';
import { decryptApiKeys } from './decrypt.js';

// Load environment variables and decrypt API keys
config();
const decryptedKeys = decryptApiKeys();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const NEWS_FILE_PATH = path.join(__dirname, '../src/data/news.ts');
const NEWS_CACHE_PATH = path.join(__dirname, '../.cache/news.json');

// Cache duration in milliseconds (15 minutes)
const CACHE_DURATION = 15 * 60 * 1000;

// News categories and their corresponding images
const CATEGORY_IMAGES = {
  'casino': 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=600',
  'gambling': 'https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&fit=crop&q=80&w=600',
  'technology': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600',
  'business': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
  'entertainment': 'https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&q=80&w=600',
  'default': 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&q=80&w=600'
};

// Content enhancement functions
function enhanceContent(article) {
  const { title, excerpt = '', content = '' } = article;
  
  // Generate a more detailed content if the original is too short
  if (content.length < 500) {
    const enhancedContent = [
      content || excerpt || title,
      '\n\n',
      'Approfondimento:',
      '\n\n',
      generateAdditionalContent(article),
    ].join('');

    return enhancedContent;
  }

  return content;
}

function generateAdditionalContent(article) {
  const { title, category } = article;
  
  // Template per contenuti aggiuntivi basati sulla categoria
  const templates = {
    'Normative': `
      Le recenti evoluzioni normative nel settore del gioco d'azzardo online richiedono un'attenta analisi delle implicazioni per operatori e giocatori. 
      Gli aspetti principali da considerare includono:

      1. Conformità alle nuove regolamentazioni
      2. Impatto sulle operazioni dei casinò online
      3. Tutela dei giocatori
      4. Misure anti-riciclaggio
      5. Procedure di verifica dell'identità

      È fondamentale che tutti gli stakeholder si adeguino tempestivamente alle nuove disposizioni per garantire un ambiente di gioco sicuro e regolamentato.
    `,
    'Tecnologia': `
      L'innovazione tecnologica continua a trasformare il settore del gaming online, portando:

      • Maggiore sicurezza nelle transazioni
      • Esperienza di gioco più immersiva
      • Nuove funzionalità per il gioco responsabile
      • Integrazione con sistemi di pagamento avanzati
      • Miglioramenti nell'assistenza clienti

      Questi sviluppi rappresentano un passo importante verso un futuro del gaming più sicuro e coinvolgente.
    `,
    'default': `
      Questo sviluppo rappresenta un importante cambiamento nel panorama del gaming online.
      Gli esperti del settore prevedono significative ripercussioni su:

      • Modalità di fruizione dei servizi
      • Sicurezza e protezione dei dati
      • Esperienza utente
      • Sviluppi futuri del mercato

      Continueremo a monitorare la situazione e fornire aggiornamenti tempestivi su ogni evoluzione significativa.
    `
  };

  return templates[category] || templates.default;
}

function getCategoryImage(article) {
  const { category, title = '', content = '' } = article;
  const searchTerms = [category.toLowerCase(), ...title.toLowerCase().split(' ')];
  
  // Match category with appropriate image
  for (const term of searchTerms) {
    for (const [key, url] of Object.entries(CATEGORY_IMAGES)) {
      if (term.includes(key)) {
        return url;
      }
    }
  }

  return CATEGORY_IMAGES.default;
}

function categorizeArticle(article) {
  const { title = '', content = '' } = article;
  const text = `${title} ${content}`.toLowerCase();
  
  // Categorization rules
  const categories = {
    'Normative': ['legge', 'regolamento', 'normativa', 'adm', 'monopoli'],
    'Tecnologia': ['tecnologia', 'innovazione', 'software', 'app', 'digitale'],
    'Business': ['mercato', 'industria', 'economia', 'business', 'fatturato'],
    'Sicurezza': ['sicurezza', 'protezione', 'tutela', 'prevenzione'],
    'Eventi': ['evento', 'conferenza', 'premio', 'festival', 'fiera']
  };

  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      return category;
    }
  }

  return 'News';
}

// Transform API response
function transformArticle(rawArticle) {
  const base = {
    id: String(Math.random()),
    title: rawArticle.title || 'Notizia senza titolo',
    date: new Date(rawArticle.published_at || Date.now()).toLocaleDateString(),
    category: categorizeArticle(rawArticle),
    excerpt: rawArticle.description || rawArticle.title,
    content: rawArticle.content || rawArticle.description || rawArticle.title
  };

  return {
    ...base,
    content: enhanceContent(base),
    image: getCategoryImage(base)
  };
}

// API Configuration
const API_CONFIG = {
  apitube: {
    url: 'https://api.apitube.io/v1/news/articles?query=casino&language=it&limit=10',
    headers: {
      'Authorization': `Bearer ${decryptedKeys.apitube}`
    },
    transform: (data) => {
      if (!data?.data?.length) return [];
      return data.data.map(transformArticle);
    }
  },
  mediastack: {
    url: `http://api.mediastack.com/v1/news?access_key=${decryptedKeys.mediastack}&keywords=casino&languages=it&limit=10`,
    transform: (data) => {
      if (!data?.data?.length) return [];
      return data.data.map(transformArticle);
    }
  }
};

// Cache management
async function createCacheDir() {
  const cacheDir = path.dirname(NEWS_CACHE_PATH);
  try {
    await fs.mkdir(cacheDir, { recursive: true });
  } catch (error) {
    console.error('Error creating cache directory:', error);
  }
}

async function readCache() {
  try {
    const cacheData = await fs.readFile(NEWS_CACHE_PATH, 'utf8');
    const { timestamp, news } = JSON.parse(cacheData);
    if (Date.now() - timestamp < CACHE_DURATION) {
      return news;
    }
  } catch (error) {
    // Cache miss or invalid cache is okay
  }
  return null;
}

async function writeCache(news) {
  try {
    await createCacheDir();
    await fs.writeFile(
      NEWS_CACHE_PATH,
      JSON.stringify({ timestamp: Date.now(), news }),
      'utf8'
    );
  } catch (error) {
    console.error('Error writing cache:', error);
  }
}

// Fetch from API with timeout and retry
async function fetchWithRetry(url, options, retries = 2) {
  for (let i = 0; i < retries; i++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);
      
      const response = await fetch(url, {
        ...options,
        signal: controller.signal
      });
      
      clearTimeout(timeout);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}

// Fetch from a single API
async function fetchFromAPI(apiName) {
  const config = API_CONFIG[apiName];
  try {
    console.log(`Fetching from ${apiName}...`);
    const data = await fetchWithRetry(config.url, { headers: config.headers });
    const transformed = config.transform(data);
    console.log(`Fetched ${transformed.length} articles from ${apiName}`);
    return transformed;
  } catch (error) {
    console.error(`Error fetching from ${apiName}:`, error.message);
    return [];
  }
}

// Fetch from all APIs
async function fetchNewsFromAPIs() {
  try {
    // Check cache first
    const cachedNews = await readCache();
    if (cachedNews) {
      console.log('Using cached news');
      return cachedNews;
    }

    console.log('Fetching fresh news...');
    const results = await Promise.allSettled(
      Object.keys(API_CONFIG).map(apiName => fetchFromAPI(apiName))
    );

    const allNews = results
      .filter(result => result.status === 'fulfilled')
      .flatMap(result => result.value)
      .filter(article => article?.title && article?.content)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 10);

    if (allNews.length > 0) {
      await writeCache(allNews);
      return allNews;
    }
    
    return generateDefaultNews();
  } catch (error) {
    console.error('Error fetching news:', error);
    return generateDefaultNews();
  }
}

// Generate default news with enhanced content
function generateDefaultNews() {
  return [
    {
      id: '1',
      title: "Nuove Regolamentazioni per i Casinò Online in Italia",
      date: new Date().toLocaleDateString(),
      category: "Normative",
      image: CATEGORY_IMAGES.casino,
      excerpt: "L'ADM ha introdotto nuove normative per i casinò online. Scopri cosa cambia per operatori e giocatori.",
      content: enhanceContent({
        title: "Nuove Regolamentazioni per i Casinò Online in Italia",
        category: "Normative",
        content: "L'Agenzia delle Dogane e dei Monopoli ha recentemente introdotto nuove normative per il settore del gioco d'azzardo online..."
      })
    },
    {
      id: '2',
      title: "Innovazione nel Gambling: L'Impatto dell'AI",
      date: new Date().toLocaleDateString(),
      category: "Tecnologia",
      image: CATEGORY_IMAGES.technology,
      excerpt: "Come l'intelligenza artificiale sta rivoluzionando l'industria del gambling online.",
      content: enhanceContent({
        title: "Innovazione nel Gambling: L'Impatto dell'AI",
        category: "Tecnologia",
        content: "L'intelligenza artificiale sta trasformando il modo in cui interagiamo con i casinò online..."
      })
    }
  ];
}

// Update news file
async function updateNewsFile(news) {
  const fileContent = `// Auto-generated news file - DO NOT EDIT
import { NewsArticle } from '../types';

export const newsArticles: NewsArticle[] = ${JSON.stringify(news, null, 2)};
`;
  
  try {
    await fs.writeFile(NEWS_FILE_PATH, fileContent, 'utf8');
    console.log('News file updated successfully');
    return true;
  } catch (error) {
    console.error('Error updating news file:', error);
    return false;
  }
}

// Schedule updates
cron.schedule('0 * * * *', async () => {
  console.log('Running scheduled news update...');
  const news = await fetchNewsFromAPIs();
  await updateNewsFile(news);
});

// Initial setup
async function initialize() {
  console.log('Initializing news system...');
  const news = await fetchNewsFromAPIs();
  await updateNewsFile(news);
  return news;
}

// Run initialization
initialize().catch(console.error);