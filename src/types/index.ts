export interface Casino {
  name: string;
  rating: number;
  bonus: string;
  image: string;
  features: string[];
  affiliateLink: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
}