class CheckoutPage {
    startCheckout () {
        cy.get('#checkout').click()    
    }

    fillInformation(firstName, lastName, portalCode) {
        cy.get('#first-name').type('Alison')
        cy.get('#last-name').type('Test Option 2')
        cy.get('#postal-code').type('(Swq3133')
        cy.get('#continue').click()
    }

    finish(){
        cy.get('#finish').click() 
    }

    verifySuccess() {
        cy.get('.complete-header')
          .should('be.visible') 
          .and('contain.text', 'Thank you for your order!')
    }
}

export default new CheckoutPage()