// cypress/integration/login.spec.js
describe('Login Functionality', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login with correct credentials', () => {
    cy.get('input[placeholder="Username"]').type('admin');
    cy.get('input[placeholder="Password"]').type('admin');
    cy.get('button').contains('Login').click();
    cy.url().should('include', '/dashboard');
  });

  it('should show an error with incorrect credentials', () => {
    cy.get('input[placeholder="Username"]').type('wrong');
    cy.get('input[placeholder="Password"]').type('wrong');
    cy.get('button').contains('Login').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Invalid credentials');
    });
  });
});
