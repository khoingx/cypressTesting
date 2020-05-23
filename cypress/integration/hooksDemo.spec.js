/// <reference types="cypress" />

describe('My test suite', () => {

    before(() => {
        cy.log('*****This is setup block******')
    })

    after(function() {
        cy.log('*****This is teardown block******')

    })

    beforeEach(function(){
        cy.log('This is login block')
    })

    afterEach(function() {
        cy.log('This is log out block')
    })

    it('Searching', ()=> {
        cy.log('This is a searching test')
    })

    it('advanced searching', () => {
        cy.log('This is an advance searching test')
    })

    it('listing products', () => {
        cy.log('This is listing products test')
    })

})