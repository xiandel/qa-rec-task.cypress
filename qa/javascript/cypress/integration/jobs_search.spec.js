/// <reference types="cypress" />

context('Jobs Search', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('verify search results', () => {
      cy.get("a[href$='/jobs/care/']").first().click()
      cy.get('h2').should('have.text', "We're Hiring!")
      cy.get('#searchLocation').type('Manchester')
      cy.get('[type="submit"]').click()
      cy.get('.results').within(() => {
          cy.get('div').first().should('have.text','Manchester')
      })
    })

    // it('negative scenario', () => {})
})
