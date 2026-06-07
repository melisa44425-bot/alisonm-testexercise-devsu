class LoginPage {
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  login(username, password) {
    cy.get("#user-name").type(username);
    cy.get("#password").type(password, { log: false });
    cy.get("#login-button").click();
  }
}

export default new LoginPage();