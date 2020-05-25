/// <reference types="cypress" />

describe('My Test Suite', function() {

    // before(function() {
    //     cy.fixture('example').then(function(example) {
    //         this.example = example
    //     })
    // })

    it('fixture demo test', () => {
        cy.fixture('example').then(function(data) {
            this.data = data
            cy.visit('https://admin-demo.nopcommerce.com/login')
            cy.get('input[name="Email"]').clear().type(this.data.email)
            cy.get('input[name="Password"]').clear().type(this.data.password)
            cy.get('input[type="submit"]').click()
        })
        

    })
})