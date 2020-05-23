/// <reference types="cypress" />

describe('Table Handling Test Suite', ()=> {
    it('deal with table and data', () => {
        cy.visit('http://testautomationpractice.blogspot.com/')

        //Check if the value presence somewhere in the table
        cy.get('table[name="BookTable"]').contains('td','Learn Selenium').should('be.visible')

        //Check if the value presence in specific row and column
        cy.get('table[name="BookTable"] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')

        //Grab a book name of which author is "amod"
        cy.get('table[name="BookTable"] > tbody > tr td:nth-child(2)').each(($e,index,$list) => {

            var text = $e.text();
            if(text.includes("Amod")) {
                cy.get('table[name="BookTable"] > tbody > tr td:nth-child(1)').eq(index).then((bname) => {
                    const bookName = bname.text()
                    expect(bookName).to.equal('Master In Java')
                })
            }
        })
    })
})