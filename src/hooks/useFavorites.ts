import { useState, useEffect } from 'react';
import { Casino } from '../types';

export function useFavorites() {
  const [favorites, setFavorites] = useState<Casino[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (casino: Casino) => {
    setFavorites(prev => {
      if (prev.some(c => c.name === casino.name)) return prev;
      return [...prev, casino];
    });
  };

  const removeFavorite = (casinoName: string) => {
    setFavorites(prev => prev.filter(c => c.name !== casinoName));
  };

  const isFavorite = (casinoName: string) => {
    return favorites.some(c => c.name === casinoName);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
}