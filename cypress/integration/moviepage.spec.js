describe('Movie Page works', function() {
  it('successfully loads', function() {
    cy.visit('/')
      .get('.carousel-item.active')
      .click();
  });
  it('shows all elements', function() {
    cy.get('.img-thumbnail').should('exist');
    cy.get('.movie-title').should('exist');
    cy.get('.genres').should('exist');
    cy.get(`[data-test="score-system"]`).should('exist');
    cy.get(`[data-test="popularity-system"]`).should('exist');
  });
  it('can go to previous page', function() {
    cy.get('.back').click();
    cy.location().should(loc => {
      expect(loc.pathname).to.include('/home');
    });
  });
});
