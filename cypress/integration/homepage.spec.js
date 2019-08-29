describe('Home Page works', function() {
  it('successfully loads', function() {
    cy.visit('http://localhost:4200');
  });
  it('displays properly', function() {
    cy.wait(1000).matchImageSnapshot('home-page');
  });
  it('loads a carousel', function() {
    cy.get('.carousel-item.active').should('exist');
  });
  it('loads panels with content', function() {
    cy.get(`[data-test="movies-panel"]`)
      .contains('Movies in theaters now')
      .should('exist');
    cy.get(`[data-test="movies-panel"]`)
      .find('.card-img-top')
      .should('exist');
  });
  it('links to movie page when clicking on a movie', function() {
    cy.get(`[data-test="movies-panel"]`)
      .find('.card-img-top')
      .first()
      .click();
    cy.location().should(loc => {
      expect(loc.pathname).to.include('/movie/');
    });
  });
});
