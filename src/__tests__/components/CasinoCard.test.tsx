import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CasinoCard } from '../../components/CasinoCard';
import { BrowserRouter } from 'react-router-dom';

const mockCasino = {
  name: "Test Casino",
  rating: 4.5,
  bonus: "100% up to €200",
  image: "https://example.com/image.jpg",
  features: ["Feature 1", "Feature 2"],
  affiliateLink: "https://example.com"
};

describe('CasinoCard', () => {
  const renderCard = () => {
    return render(
      <BrowserRouter>
        <CasinoCard {...mockCasino} />
      </BrowserRouter>
    );
  };

  it('renders casino information correctly', () => {
    renderCard();
    
    expect(screen.getByText(mockCasino.name)).toBeInTheDocument();
    expect(screen.getByText(mockCasino.bonus)).toBeInTheDocument();
    mockCasino.features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('displays correct number of stars for rating', () => {
    renderCard();
    const filledStars = screen.getAllByTestId('filled-star');
    expect(filledStars).toHaveLength(4); // 4.5 rating should show 4 filled stars
  });

  it('handles affiliate link click', () => {
    const openSpy = vi.spyOn(window, 'open');
    renderCard();
    
    fireEvent.click(screen.getByText(/get bonus/i));
    expect(openSpy).toHaveBeenCalledWith(mockCasino.affiliateLink, '_blank', 'noopener,noreferrer');
  });

  it('navigates to detail page on review click', () => {
    renderCard();
    const reviewButton = screen.getByText(/review/i);
    expect(reviewButton.closest('a')).toHaveAttribute('href', `/casino/test-casino`);
  });

  it('handles favorite toggle', () => {
    renderCard();
    const favoriteButton = screen.getByLabelText(/add to favorites/i);
    
    fireEvent.click(favoriteButton);
    expect(favoriteButton).toHaveClass('text-pastel-red');
    
    fireEvent.click(favoriteButton);
    expect(favoriteButton).not.toHaveClass('text-pastel-red');
  });
});