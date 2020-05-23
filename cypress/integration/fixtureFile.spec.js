/// <reference types="cypress" />

describe('My Test Suite', () => {

    before(() => {
        cy.fixture('example').then((data) => {
            this.data = data
        })
    })
    it('fixture demo test', () => {
        cy.visit('https://admin-demo.nopcommerce.com/login')

    })
})