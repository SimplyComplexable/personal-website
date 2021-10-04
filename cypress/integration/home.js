describe('Home Page', () => {
  it('should load the page', () => {
    cy.visit('/');
    cy.contains('Click Me!').click();
  });
});
