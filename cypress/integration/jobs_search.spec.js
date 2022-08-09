/// <reference types="cypress" />

context('Jobs Search', () => {
  beforeEach(() => {
    cy.visit('/')
  })


  it('verify search results', () => {

    cy.wait(3000);
    cy.waitFor('#onetrust-accept-btn-handler')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('.header_content__LmDsk > .button_base__KzM17').click()
    cy.get('h1').should('have.text', "Find a Care Assistant job")
    cy.wait(3000);
    cy.get('.location-search-input').focus().type('Trafford', { force: true })
    cy.get('.locationSearchInput_dropdown__KG52s').within(() => {
      cy.contains('Trafford Park')
      cy.contains('Bridge Trafford')

    })


  })
  //Negative 1 checks that incorrect answers are not present
  it('negative scenario 1', () => {

    cy.waitFor('#onetrust-accept-btn-handler')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('.header_content__LmDsk > .button_base__KzM17').click()
    cy.get('h1').should('have.text', "Find a Care Assistant job")
    cy.wait(3000);
    cy.get('.location-search-input').focus().type('Trafford', { force: true })
    cy.get('.locationSearchInput_dropdown__KG52s').within(() => {
      cy.contains('Manchester').should('not.exist')

    })
  })

    //Negative 2 checks that the correct answer are not present for a different search location
    it('negative senario 2', () => {


      cy.waitFor('#onetrust-accept-btn-handler')
      cy.get('#onetrust-accept-btn-handler').click()
      cy.get('.header_content__LmDsk > .button_base__KzM17').click()
      cy.get('h1').should('have.text', "Find a Care Assistant job")
      cy.wait(3000);
      cy.get('.location-search-input').focus().type('Manchester', { force: true })
      cy.get('.locationSearchInput_dropdown__KG52s').within(() => {
        cy.contains('Trafford Park').should('not.exist')
        cy.contains('Bridge Trafford').should('not.exist')

      })

    })
  })
