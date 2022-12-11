const LoginPage = require("../../PageObjectModels/LoginPage/loginPage");
const ContactPage = require("../../PageObjectModels/ContactPage/contactPage");
const ContactData = require("../../Data/ContactData/contactData");
const MainPage = require("../../PageObjectModels/MainPage/mainPageHeader");

describe("Contact Test", () => {
  beforeEach(() => {
    LoginPage.login();
    cy.wait(2000);
  });

  it("Ensure that the success message is shown when submit", () => {
    cy.wait(1000);
    MainPage.contact.click();
    cy.wait(500);
    ContactPage.fillValue(ContactData.coorect_info);
    ContactPage.submit_button.click();
    cy.wait(1000);
    ContactPage.successMessage.contains("Message");

    // cy.reload()
  });

  it("Ensure that one has to ensure email field is valid", () => {
    cy.wait(1500);
    cy.wait(1000);
    MainPage.contact.click();
    cy.wait(500);
    ContactPage.fillValue(ContactData.wrong_info);
    ContactPage.submit_button.click();
    cy.wait(1000);
    ContactPage.emailFailMessage.eq(0).contains("Email is invalid");
  });

  it("Ensure that name field cant be left blank ", () => {
    cy.wait(1500);
    cy.wait(1000);
    MainPage.contact.click();
    cy.wait(500);
    ContactPage.leaveNameBlank(ContactData.coorect_info);
    ContactPage.submit_button.click();
    cy.wait(1500);
    ContactPage.errorMessageFieldName.eq(0).contains("Field is required");
  });
});
