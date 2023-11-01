describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.get('.navbar-brand').should('include.text', 'ngx ui switch');
  });
});
