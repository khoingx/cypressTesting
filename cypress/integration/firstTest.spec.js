/// <reference types="cypress" />

describe('Locating elements', () => {
    it('Verify types of locators', () => {
        cy.visit('https://demo.nopcommerce.com/')

        cy.get('#small-searchterms').type('Apple Macbook Pro 13-inch')

        cy.get('[type="submit"]').click()

        cy.get('.product-box-add-to-cart-button[value="Add to cart"]').click()

        cy.get('#addtocart_4_EnteredQuantity').clear().type('3')

        cy.get('#add-to-cart-button-4').click() // Add items to shopping cart

        cy.wait(4000)

        cy.get('#topcartlink > a > span.cart-label').click() // Shopping cart link

        cy.wait(3000)

        cy.get('.product-unit-price').contains('$1,800.00') //unit price validation


    })
})