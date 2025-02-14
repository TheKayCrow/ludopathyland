import './commands';
import 'cypress-axe';

beforeEach(() => {
  cy.injectAxe();
});

afterEach(() => {
  cy.checkA11y();
});