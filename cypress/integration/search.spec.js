describe('Search Page works', function() {
  it('successfully loads', function() {
    cy.visit('http://localhost:4200')
      .get(`[data-test="search-menu-link"]`)
      .click();
  });
  it('filter movies', function() {
    cy.get(`[data-test="search-search"]`)
      .find('input')
      .click()
      .type('Demolition man')
      .type('{enter}');
    cy.get(`[data-test="movies-container"]`)
      .find('.image-caption')
      .contains('Demolition Man')
      .should('exist');
  });
  it('displays properly', function() {
    cy.viewport(1280, 720);
    cy.wait(1000).matchImageSnapshot('search-page');
  });
  it('links to movie page when clicking on a movie', function() {
    cy.get(`[data-test="movies-container"]`)
      .find('.img-thumbnail')
      .first()
      .click();
    cy.location().should(loc => {
      expect(loc.pathname).to.include('/movie/');
    });
  });
  it('movie page displays properly', function() {
    cy.viewport(1280, 720);
    cy.wait(1000).matchImageSnapshot('movie-page');
  });
});
