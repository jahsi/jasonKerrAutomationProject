const LoginPage = require("../../PageObjectModels/LoginPage/loginPage");
const domain = require("../../Data/siteData/generalData");

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
});
