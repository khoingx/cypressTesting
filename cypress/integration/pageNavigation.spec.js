/// <reference types="cypress" />

describe('Page Navigation suite', () => {
    it('navigate between pages', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq', "nopCommerce demo store") //grab a title of the first page (homepage)

        cy.get('.ico-register').click()
        cy.title().should('eq', 'nopCommerce demo store. Register') //grab a title of the second page

        cy.go('back') //go back to the home page
        cy.title().should('eq', "nopCommerce demo store") //grab a title of the page

    })
})