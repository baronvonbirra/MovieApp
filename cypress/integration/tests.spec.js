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

/* describe('In Theaters Page works', function() {
  it('successfully loads', function() {
    cy.visit('http://localhost:4200');
  });
  it('displays properly', function() {});
  it('loads movies', function() {});
  it('can change pages', function() {});
});

describe('Recommendations Page works', function() {
  it('successfully loads', function() {
    cy.visit('http://localhost:4200');
  });
  it('displays properly', function() {});
  it('loads suggestions in drop down', function() {});
  it('shows recommendations', function() {});
});

describe('Search Page works', function() {
  it('successfully loads', function() {
    cy.visit('http://localhost:4200');
  });
  it('displays properly', function() {});
  it('filter movies', function() {});
});
 */
