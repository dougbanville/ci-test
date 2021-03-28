
describe('Heading text', () => {
  it('it forces login', () => {
    cy.visit('http://localhost:4200/');
    cy.get('#title').should('contain', 'Congratulations')
  });
});
