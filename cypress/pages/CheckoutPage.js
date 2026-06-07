class CheckoutPage {
  startCheckout() {
    cy.get("#checkout").click();
  }

  fillInformation(firstName, lastName, postalCode) {
    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#postal-code").type(postalCode);
    cy.get("#continue").click();
  }

  finish() {
    cy.get("#finish").click();
  }

  verifySuccess() {
    cy.get(".complete-header")
      .should("be.visible")
      .and("contain.text", "Thank you for your order!");
  }
}

export default new CheckoutPage();