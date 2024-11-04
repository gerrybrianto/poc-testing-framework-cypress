// cypress/integration/dashboard.spec.js
describe('Dashboard Functionality', () => {
  beforeEach(() => {
    cy.visit('/dashboard');
  });

  it('should display project summaries', () => {
    cy.get('mat-card.project-summary').should('have.length', 2); // Ensure two projects are displayed
    cy.contains('Project Alpha');
    cy.contains('Project Beta');
  });

  it('should navigate to project details', () => {
    cy.contains('View Project').first().click(); // Click the first "View Project" button
    cy.url().should('include', '/project/1');
  });
});
