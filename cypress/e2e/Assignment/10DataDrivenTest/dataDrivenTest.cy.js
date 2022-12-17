const LoginPage = require("../../PageObjectModels/LoginPage/loginPage");
const domain = require("../../Data/siteData/generalData");
const credentials = require("../../Data/1Authentication/credentials");
const data = require("../../Data/DataDriven/AuthenticationList");
const errorMessage = require("../../Data/1Authentication/errorMessges");

describe("Authentication", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit(domain.domain);
    cy.wait(3000);
  });

  for (const cred of data.credentials) {
    it("Attempt to crete a user that exists and does not exits", () => {
      cy.wait(2000);
      if (cred.duplicate) {
        cy.log("Here is a duplicate");
        LoginPage.createAccountWithCredentials(cred.email, cred.password);
        LoginPage.duplicateEmailErrorMessage.contains(
          errorMessage.duplicate_email_message,
          { matchCase: false }
        );
      }
      let email = LoginPage.generateRandomEmail();

      if (cred.weak_password) {
        LoginPage.createAccountWithCredentials(email, cred.password);
        cy.wait(1000);
        //IF a user was creayed ot  navigates to product page
        cy.contains(data.weak_password);
        //Cannot find this element
        // LoginPage.weakPasswordErrorMessage.contains(errorMessage.weak_password);
      } else if (cred.allGood) {
        LoginPage.createAccountWithCredentials(email, cred.password);
        cy.url().should("include", "product");
      }
    });
  }
});
