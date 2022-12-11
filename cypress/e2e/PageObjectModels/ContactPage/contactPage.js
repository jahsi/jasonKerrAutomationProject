class ContactPage {
  get name() {
    // return cy.get(`input[id="name_0e878f79-c5c7-4cec-a4c2-afc1a4e54032"]`);
    return cy.get(`input[name="name"]`);
  }

  get firstName() {
    return cy.get("#firstName");
  }

  get lastName() {
    return cy.get("#lastName");
  }

  get email() {
    return cy.get("#email");
  }
  get subject() {
    return cy.get("#subject");
  }
  get message() {
    return cy.get("#message");
  }
  get submit_button() {
    return cy.get(".css-1pdqelo > .chakra-button");
  }
  get successMessage() {
    return cy.get("#toast-1-title");
  }

  get emailFailMessage() {
    return cy.get("div.chakra-form__error-message");
  }
  get errorMessageFieldName() {
    return cy.get(".chakra-form__error-message");
  }

  fillValue(value) {
    this.firstName.type(value.firstName);
    this.lastName.type(value.lastName);
    this.email.type(value.email, { force: true });
    this.subject.type(value.subject);
    this.message.type(value.message);
  }
  leaveNameBlank(value) {
    this.firstName.type(value.firstName);
    this.lastName.type(value.lastName);
    this.email.type(value.email, { force: true });
    this.subject.type(value.subject);
    this.message.type(value.message);
    this.firstName.type("lol").clear();
    this.lastName.type("lol").clear();
  }
}

module.exports = new ContactPage();
