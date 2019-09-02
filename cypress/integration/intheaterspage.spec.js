describe('In Theaters Page works', function() {
  it('successfully loads', function() {
    cy.visit('http://localhost:4200')
      .get(`[data-test="intheaters-menu-link"]`)
      .click();
  });
  it('displays properly', function() {
    cy.viewport(1280, 720);
    cy.wait(1000).matchImageSnapshot('theater-page');
  });
  it('loads movies', function() {
    cy.get(`[data-test="movies-container"]`).should('exist');
  });
  it('pagination exists', function() {
    cy.get(`[data-test="pagination-container"]`).should('exist');
  });
  it('can change pages', function() {
    cy.get(`[data-test="pagination-container"]`)
      .find('.page-item.active')
      .contains('1')
      .should('exist');
    cy.get(`[data-test="pagination-container"]`)
      .find('.page-item')
      .contains('2')
      .click();
    cy.get(`[data-test="pagination-container"]`)
      .find('.page-item.active')
      .contains('2')
      .should('exist');
  });
  it('links to movie page when clicking on a movie', function() {
    cy.get(`[data-test="movies-container"]`)
      .find('.card-img-top')
      .first()
      .click();
    cy.location().should(loc => {
      expect(loc.pathname).to.include('/movie/');
    });
  });
});
