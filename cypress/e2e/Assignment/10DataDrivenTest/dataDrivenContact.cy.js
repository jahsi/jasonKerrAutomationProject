const LoginPage = require("../../PageObjectModels/LoginPage/loginPage");
const ContactPage = require("../../PageObjectModels/ContactPage/contactPage");
const ContactData = require("../../Data/ContactData/contactData");
const MainPage = require("../../PageObjectModels/MainPage/mainPageHeader");
const dataDrivenCheckOut = require("../../Data/DataDriven/contact");

describe("Contact Test data driven", () => {
  beforeEach(() => {
    LoginPage.login();
    cy.wait(2000);
  });

  for (const contactIfno of dataDrivenCheckOut.contact_information) {
    it("Ensure that various error message shows up", () => {
      cy.wait(1000);
      MainPage.contact.click();
      cy.wait(500);
      ContactPage.fillValue(contactIfno);
      ContactPage.submit_button.click();
      cy.wait(1000);
      if (contactIfno.blank_first_name) {
        ContactPage.firstName.clear();
        ContactPage.errorMessageFieldName.contains(
          dataDrivenCheckOut.required_message
        );
      }
      if (contactIfno.blank_last_name) {
        ContactPage.lastName.clear();
        ContactPage.errorMessageFieldName.contains(
          dataDrivenCheckOut.required_message
        );
      }

      if (contactIfno.blank_message) {
        ContactPage.message.clear();
        ContactPage.errorMessageFieldName.contains(
          dataDrivenCheckOut.required_message
        );
      }

      if (contactIfno.blank_subject) {
        ContactPage.subject.clear();
        ContactPage.errorMessageFieldName.contains(
          dataDrivenCheckOut.required_message
        );
      }
      if (contactIfno.invalid_email) {
        ContactPage.errorMessageFieldName.contains(
          dataDrivenCheckOut.invalid_email_message
        );
      }
      if (contactIfno.allGood) {
        ContactPage.successMessage.contains("Message Sent");
      }
      ///Could be a case

      // cy.reload()
    });
  }
});
