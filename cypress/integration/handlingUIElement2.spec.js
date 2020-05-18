/// <reference types="cypress" />

describe('Interact with UI', ( )=> {
    it('verify checkboxes and all', () => {
        cy.visit('http://demo.automationtesting.in/') // go to the URL

        cy.get('#btn2').should('be.visible').click() // click on skip sign in button

        cy.title().should('eq', "Register") // verify title of the new page
    })
})