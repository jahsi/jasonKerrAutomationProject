const loginData = require("../../Data/siteData/generalData");
class LoginPage {
  get signOrRegisterButton() {
    return cy.get('button[id="signInOrRegister"]');
  }

  get emailTexField() {
    return cy.get('input[id="1-email"]');
  }

  get passwordTextField() {
    return cy.get('input[type="password"]');
  }
  get emailType() {
    return cy.get('input[type="email"]');
  }

  get submitField() {
    return cy.get('button[id="1-submit"]');
  }

  get otherTab() {
    return cy.get(":nth-child(2) > a");
  }
  get signOutButton() {
    return cy.get("#top-sign-out");
  }
  get invalidEmailText() {
    return cy.get(
      "#auth0-lock-error-msg-email > .auth0-lock-error-invalid-hint"
    );
  }
  get duplicateEmailErrorMessage() {
    return cy.get(".animated > span");
  }
  get weakPasswordErrorMessage() {
    return cy.get(".auth0-lock-error-invalid-hint");
  }
  generateRandomEmail() {
    return (
      Math.random().toString(36).substring(2, 11) +
      Math.floor(Math.random() * 100) +
      "@example.com"
    );
  }

  createAccountWithCredentials(email, password) {
    this.signOrRegisterButton.click();
    this.otherTab.click();
    this.emailTexField.type(email);
    this.passwordTextField.type(password);
    this.submitField.click();
  }

  createRandomString(domain) {
    return Math.random().toString(36).substring(2, 11) + domain;
  }
  ///REVIEW  This was created by
  //
  login() {
    cy.visit(loginData.domain);
    cy.get("#signInOrRegister").click();
    //Login on to site.
    cy.origin(
      "https://dev-mlluudmotpwoldtv.us.auth0.com",
      { args: {} },
      ({}) => {
        cy.get('[type="email"]').type("test1@tester.com");
        cy.get('[type="password"]').type("Password1", { log: false });
        cy.get("[name=submit]").click();
      }
    );
  }
  //INFO
  goLoginPage(email, password) {
    cy.visit(checkOutData.domain);

    this.signOrRegisterButton.click();

    this.emailTexField.type(email);
    this.passwordTextField.type(password);
    this.submitField.click();
  }
}

module.exports = new LoginPage();
