/// <reference types="cypress" />

describe('deal with alert suite', () => {
    it('Alert', () => {
      //  cy.get('https://mail.rediff.com/cgi-bin/login.cgi')
    
        cy.visit('http://demo.automationtesting.in/Alerts.html')
        cy.get('.btn-danger').click()
        cy.on('window:alert',(str) => {
            expect(str).to.equal('I am an alert box!')
        })
    })
})