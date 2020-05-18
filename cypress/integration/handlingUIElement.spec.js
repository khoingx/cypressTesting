/// <reference types="cypress" />

describe('UI Element', () => {
    it('Verify inputbox and radio button', () => {
        cy.visit('http://newtours.demoaut.com/') //visit the page

        cy.url().should('include', 'newtours') // verify URL should contain a specific content

        cy.get('input[name="userName"]').should('be.visible').should('be.enabled').type("mercury") //verify username input and input username

        cy.get('input[name="password"]').should('be.visible').should('be.enabled').type("mercury") //verify password input and input password

        cy.get('input[name="login"]').should('be.visible').click() // sign in to the account

        
    })
})