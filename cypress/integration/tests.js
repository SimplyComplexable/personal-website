describe('Tests Page', () => {
  it('should render', () => {
    cy.visit('/tests');
    cy.contains('Click Me!').click();
    cy.contains('Active');
  });
});
