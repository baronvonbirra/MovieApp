describe('Recommendations Page works', function() {
  it('successfully loads', function() {
    cy.visit('http://localhost:4200')
      .get(`[data-test="recommendations-menu-link"]`)
      .click();
  });
  it('loads suggestions in drop down', function() {
    cy.get(`[data-test="recommendations-search"]`)
      .find('input')
      .click()
      .type('w');
    cy.get('.dropdown-item')
      .contains('War')
      .should('exist');
    cy.get('.dropdown-item')
      .contains('Western')
      .should('exist');
  });
  it('shows recommendations', function() {
    cy.get('.dropdown-item')
      .contains('Western')
      .click();
    cy.get(`[data-test="movies-container"]`).should('exist');
  });
  it('displays properly', function() {
    cy.wait(1000).matchImageSnapshot('recommendations-page');
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
});
