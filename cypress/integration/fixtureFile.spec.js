/// <reference types="cypress" />

describe('My Test Suite', () => {

    before(() => {
        cy.fixture('example').then((data) => {
            this.data = data
        })
    })
    it('fixture demo test', () => {
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('input[name="Email"]').type(this.data.email)
        cy.get('input[name="Password"]').type(this.data.password)
        cy.get('input[type="submit"]').click()
        
    })
})