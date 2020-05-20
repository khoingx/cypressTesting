/// <reference types="cypress" />

describe('deal with alert suite', () => {
    it('Alert', () => {
      //  cy.get('https://mail.rediff.com/cgi-bin/login.cgi')
    
        // cy.visit('http://demo.automationtesting.in/Alerts.html')
        // cy.get('.btn-danger').click()
        // cy.on('window:alert',(str) => {
        //     expect(str).to.equal('I am an alert box!')
        // })

        cy.visit('http://testautomationpractice.blogspot.com/')
        cy.get('button[onclick="myFunction()"]').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press a button!')
        })
    })
})