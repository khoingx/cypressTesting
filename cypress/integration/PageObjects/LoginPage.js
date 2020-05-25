/// <reference types="cypress" />

class LoginPage {

    visit() {
        cy.visit('https://admin-demo.nopcommerce.com/login')
    }

    fillEmail(email) {
        const emailField = cy.get('input[name="Email"]')
        emailField.clear()
        emailField.type(email)
        return this
    }

    fillPass(password) {
        const passField = cy.get('input[name="Password')
        passField.clear()
        passField.type(password)
        return this
    }

}
