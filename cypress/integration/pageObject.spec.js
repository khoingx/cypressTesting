/// <reference types="cypress" />

import LoginPage from './PageObjects/LoginPage'

describe('My testsuit', () => {
    it('log in ', () => {

        cy.fixture('example').then(function(data) {
            this.data = data
            const lp = new LoginPage()
            lp.visit()
            lp.fillEmail(this.data.email)
            lp.fillPass(this.data.password)
            lp.submit()
            cy.title().should('be.equal', 'Dashboard / nopCommerce administration')
        }) 
       

    })
})