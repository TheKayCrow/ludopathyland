import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { useFavorites } from '../../hooks/useFavorites';

const mockCasino = {
  name: "Test Casino",
  rating: 4.5,
  bonus: "100% up to €200",
  image: "https://example.com/image.jpg",
  features: ["Feature 1", "Feature 2"],
  affiliateLink: "https://example.com"
};

describe('useFavorites', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('initializes with empty favorites', () => {
    const { result } = renderHook(() => useFavorites());
    expect(result.current.favorites).toEqual([]);
  });

  it('adds casino to favorites', () => {
    const { result } = renderHook(() => useFavorites());
    
    act(() => {
      result.current.addFavorite(mockCasino);
    });

    expect(result.current.favorites).toHaveLength(1);
    expect(result.current.favorites[0]).toEqual(mockCasino);
  });

  it('removes casino from favorites', () => {
    const { result } = renderHook(() => useFavorites());
    
    act(() => {
      result.current.addFavorite(mockCasino);
    });
    
    act(() => {
      result.current.removeFavorite(mockCasino.name);
    });

    expect(result.current.favorites).toHaveLength(0);
  });

  it('checks if casino is favorite', () => {
    const { result } = renderHook(() => useFavorites());
    
    act(() => {
      result.current.addFavorite(mockCasino);
    });

    expect(result.current.isFavorite(mockCasino.name)).toBe(true);
    expect(result.current.isFavorite('Non-existent Casino')).toBe(false);
  });

  it('persists favorites in localStorage', () => {
    const { result } = renderHook(() => useFavorites());
    
    act(() => {
      result.current.addFavorite(mockCasino);
    });

    const stored = JSON.parse(localStorage.getItem('favorites') || '[]');
    expect(stored).toEqual([mockCasino]);
  });
});