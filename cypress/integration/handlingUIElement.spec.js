/// <reference types="cypress" />

describe('UI Element', () => {
    it('Verify inputbox and radio button', () => {
        cy.visit('http://newtours.demoaut.com/') //visit the page

        cy.url().should('include', 'newtours') // verify URL should contain a specific content

        cy.get('input[name="userName"]').should('be.visible').should('be.enabled').type("mercury") //verify username input and input username

        cy.get('input[name="password"]').should('be.visible').should('be.enabled').type("mercury") //verify password input and input password

        cy.get('input[name="login"]').should('be.visible').click() // sign in to the account

        cy.title().should('contain', 'Mercury Tours:')   //title verification

        // Working with radio button

        cy.get('input[value="roundtrip"]').should('be.visible').should('be.checked')   //verify radio buttons, check if round trip option is selected

        cy.get('input[value="oneway"]').should('be.visible').should('not.be.checked').click()   //veriry one way option then select it

        cy.get('input[name="findFlights"]').should('be.visible').click() // click on search flight button

        //verify new page title

        cy.title().should('contain','Select a Flight')

        


    })
})