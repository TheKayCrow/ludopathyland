describe('Casino Comparison Page', () => {
  beforeEach(() => {
    cy.visit('/comparazione');
  });

  it('displays casino cards', () => {
    cy.get('[data-testid="casino-card"]').should('have.length.at.least', 1);
  });

  it('filters casinos correctly', () => {
    cy.get('[data-testid="rating-filter"]').select('4');
    cy.get('[data-testid="casino-card"]').each(($card) => {
      cy.wrap($card).find('[data-testid="rating"]').should('have.attr', 'data-rating').and('be.gte', 4);
    });
  });

  it('adds casino to favorites', () => {
    cy.get('[data-testid="casino-card"]').first().within(() => {
      cy.get('[data-testid="favorite-button"]').click();
      cy.get('[data-testid="favorite-button"]').should('have.class', 'text-pastel-red');
    });
  });

  it('navigates to casino detail page', () => {
    cy.get('[data-testid="casino-card"]').first().within(() => {
      cy.get('[data-testid="review-button"]').click();
    });
    cy.url().should('include', '/casino/');
  });

  it('opens affiliate link in new tab', () => {
    cy.get('[data-testid="casino-card"]').first().within(() => {
      cy.get('[data-testid="bonus-button"]').should('have.attr', 'target', '_blank');
    });
  });
});