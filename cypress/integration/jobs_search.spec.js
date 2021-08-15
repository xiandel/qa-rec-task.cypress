/// <reference types="cypress" />

context('Jobs Search', () => {
  beforeEach(() => {
    //This has been updated to remove repeated steps in the below test, improving readability and efficiency of tests
    cy.visit('/jobs/care/');
  });

  it('verify search results', () => {
    cy.get('#searchLocation').type('Manchester');
    cy.get('[type="submit"]').click();
    //This has been refactored to directly target all existing html tags with class 'job-location' for better readability
    cy.get('.job-location').first().should('contain.text', 'Manchester'); //These results are subject to change, based on live data. Would suggest running in an isolated test environment instead to prevent hiccups
  });

  // it('negative scenario', () => {})
  /**
   * I have noticed that providing a non-existing location returns all exsting care positions
   * For the purposes of this test, I have assumed this is intended, and will proceed accordingly
   */
  it('provide negative test case', () => {
    //Negative input guaranteed to not give results
    cy.get('#searchLocation').type('Alderaan');
    cy.get('[type="submit"]').click();
    //This is checking that some positions have displayed in the DOM
    cy.get('.job-card').should('exist');
    //The number of results should not be 0, based on the above explained assumption, otherwise removing 'not.' will satisfy opposite functionality
    cy.get('.results-count').should('not.contain.text', '0');
  });
});
