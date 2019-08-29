describe('Movie Page works', function() {
  it('successfully loads', function() {
    cy.visit('http://localhost:4200')
      .get('.carousel-item.active')
      .click();
  });
  it('displays properly', function() {
    cy.wait(1000).matchImageSnapshot('movie-page');
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
