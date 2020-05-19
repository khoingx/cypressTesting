/// <reference types="cypress" />

describe('Interact with UI', ()=> {
    it('verify checkboxes and all', () => {

        // cy.visit('http://demo.automationtesting.in/') // go to the URL

        // cy.get('#btn2').should('be.visible').click() // click on skip sign in button

        // cy.title().should('eq', "Register") // verify title of the new page

        cy.visit('http://demo.automationtesting.in/Register.html') // go to the URL

        cy.get('#checkbox1').check().should('be.checked').and('have.value',"Cricket") // verify checkbox with value

        cy.get('#checkbox3').check().should('be.checked').and('have.value',"Hockey") // verify checkbox with value

        //untick a checkbox

        // cy.get('#checkbox1').uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').uncheck(['Cricket', 'Hockey']).should('not.be.checked')


    })

    it('verify static dropdown and all', () => {
        
        //static dropdown has <select> tag in its HTML tag
        cy.get('#Skills').select('Android').should('have.value', 'Android') //select an option and verify the value

    })

    it('verify dynamic dropdown', () => {

        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Vietnamese').click()
    })
})