const LoginPage = require("../../PageObjectModels/LoginPage/loginPage");
const domain = require("../../Data/siteData/generalData");
const credentials = require("../../Data/1Authentication/credentials");
const errorMessage = require("../../Data/1Authentication/messages");
const messages = require("../../Data/1Authentication/messages");
describe("LoginPage", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit(domain.domain);
    cy.wait(3000);
  });

  it("should be able to create a new user and navigate to products page", () => {
    cy.wait(2000);
    let email = LoginPage.generateRandomEmail();
    // let password = '';
    LoginPage.createAccountWithCredentials(email, domain.strong_password);
    cy.wait(2000);
    cy.url().should("include", "product");
  });

  it("should not allow a user to create a new account with invalid fields", () => {
    cy.wait(2000);
    LoginPage.createAccountWithCredentials(
      credentials.wrong_email,
      credentials.weak_password
    );
    LoginPage.invalidEmailText.contains(messages.invalid_email_message);
  });

  it("should not allow a user to create a new account with one that already exists", () => {
    cy.wait(2000);
    LoginPage.createAccountWithCredentials(
      credentials.existing_valid_account.email,
      credentials.existing_valid_account.password
    );
    LoginPage.duplicateEmailErrorMessage.contains(messages.duplicate_email, {
      matchCase: false,
    });
  });
});
