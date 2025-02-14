import { decryptApiKeys } from '../../scripts/decrypt.js';

const API_KEYS = decryptApiKeys();

export const API_CONFIG = {
  newsapi: {
    key: API_KEYS.newsapi,
    baseUrl: 'https://newsapi.org/v2'
  },
  mediastack: {
    key: API_KEYS.mediastack,
    baseUrl: 'http://api.mediastack.com/v1'
  },
  apitube: {
    key: API_KEYS.apitube,
    baseUrl: 'https://api.apitube.io/v1'
  },
  rapidapi: {
    key: API_KEYS.rapidapi,
    baseUrl: 'https://gambling-news-live.p.rapidapi.com'
  },
  worldnews: {
    key: API_KEYS.worldnews,
    baseUrl: 'https://api.worldnewsapi.com'
  }
};