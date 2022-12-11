const LoginPage = require("../../PageObjectModels/LoginPage/loginPage");
const domain = require("../../Data/siteData/generalData");
const credentials = require("../../Data/1Authentication/credentials");

describe("Email Test", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit(domain.domain);
    cy.wait(3000);
  });

  it("Verify that email was sent when checking out ", () => {
    const serverId = "630hhlpz";
    const serverDomain = "@630hhlpz.mailosaur.net"; ///@630hhlpz.mailosaur.net
    const email = LoginPage.createRandomString(serverDomain);
    const password = credentials.strong_password;
    cy.log(email);

    cy.wait(2000);
    LoginPage.createAccountWithCredentials(email, password);
    cy.wait(1000);

    cy.mailosaurGetMessage(serverId, {
      sentTo: email,
    })
      .then((email) => {
        cy.log(email.subject);
        cy.log("This is email below");
        cy.log(email.html.body);
        expect(email.subject).to.contains("Verify your email");
        expect(email.html.body).to.contains("Your account information");
      })
      .end();
    cy.wait(500);
  });
});
