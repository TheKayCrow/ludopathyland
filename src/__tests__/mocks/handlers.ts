import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/casinos', () => {
    return HttpResponse.json([
      {
        name: "Test Casino",
        rating: 4.5,
        bonus: "100% up to €200",
        image: "https://example.com/image.jpg",
        features: ["Feature 1", "Feature 2"],
        affiliateLink: "https://example.com"
      }
    ]);
  }),

  http.get('/api/news', () => {
    return HttpResponse.json([
      {
        id: "1",
        title: "Test News",
        content: "Test content",
        date: "2025-02-14",
        category: "News",
        image: "https://example.com/image.jpg"
      }
    ]);
  })
];