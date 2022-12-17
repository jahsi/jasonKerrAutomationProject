// const checkOutData = require("../Data/siteData");

class MainPage {
  get topCartButton() {
    return cy.get("#top-cart");
  }
  get contact() {
    return cy.get("#top-contact");
  }
  get topContact() {
    return cy.get("#top-contact");
  }
  get topHomeButton() {
    // return cy.get(`input[id="name_0e878f79-c5c7-4cec-a4c2-afc1a4e54032"]`);
    return cy.get("button#top-home");
  }
  get topFavourtieButton() {
    return cy.get("button#top-favorite");
  }
  get bigtitle() {
    return cy.get("a > .chakra-heading");
  }
  get favoriteText() {
    return cy.get("#top-favorite > .chakra-text");
  }
}
module.exports = new MainPage();
