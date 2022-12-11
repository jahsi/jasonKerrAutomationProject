class CheckoutFields {
  get name() {
    // return cy.get(`input[id="name_0e878f79-c5c7-4cec-a4c2-afc1a4e54032"]`);
    return cy.get(`input[name="name"]`);
  }

  get email() {
    return cy.get(`input[name="email"]`);
  }

  get streetAddress() {
    return cy.get(`input[name="address1"]`);
  }

  get appSuite() {
    return cy.get(`input[name="address2"]`);
  }
  get city() {
    return cy.get(`input[name="city"]`);
  }
  get country() {
    return cy.get(`input[name="country-target"]`);
  }
  get province() {
    return cy.get(`input[name="province"]`);
  }
  get postalCode() {
    return cy.get(`input[name="postalCode"]`);
  }

  get submitButton() {
    return cy.get(`button[type="submit"]`);
  }
  get placeOrderButton() {
    return cy.get(`button[type="submit"]`);
  }

  get thankYouH1() {
    return cy.get(":nth-child(2) > .snipcart__font--subtitle");
  }

  get invalidText() {
    return cy.get(".snipcart__box > :nth-child(2) > :nth-child(2)");
  }

  fillValue(value) {
    this.name.type(value.name);
    this.email.type(value.email);
    this.streetAddress.type(value.streetAddress, { force: true });
    this.appSuite.type(value.appSuite);
    this.city.type(value.city);
    this.country.type(value.country, { force: true });
    // this.country.type("{downarrow}");
    // this.country.type("{downarrow}").click();
    this.province.type(value.province);
    this.postalCode.type(value.postalCode);
  }

  fillValueTestEmail(value, email) {
    this.name.type(value.name);
    this.email.type(email);
    this.streetAddress.type(value.streetAddress, { force: true });
    this.appSuite.type(value.appSuite);
    this.city.type(value.city);
    this.country.type(value.country, { force: true });
    // this.country.type("{downarrow}");
    // this.country.type("{downarrow}").click();
    this.province.type(value.province);
    this.postalCode.type(value.postalCode);
  }
}

module.exports = new CheckoutFields();
