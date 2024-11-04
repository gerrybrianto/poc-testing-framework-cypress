// cypress/integration/project-details.spec.js
describe('Project Details Functionality', () => {
  beforeEach(() => {
    cy.visit('/project/1');
  });

  it('should display tasks', () => {
    cy.get('mat-list mat-list-item').should('have.length', 2); // Ensure two tasks are displayed
    cy.contains('Task 1');
    cy.contains('Task 2');
  });

  it('should add a new task', () => {
    cy.get('button').contains('Add Task').click();
    // Add logic to fill the form, submit it, and verify the new task appears
  });

  it('should edit a task', () => {
    cy.get('button').contains('Edit').first().click();
    // Add logic to modify the task and verify the changes
  });

  it('should delete a task', () => {
    cy.get('button').contains('Delete').first().click();
    // Verify that the task is removed from the list
  });
});
