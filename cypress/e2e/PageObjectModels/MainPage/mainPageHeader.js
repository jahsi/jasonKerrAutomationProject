// const checkOutData = require("../Data/siteData");

class MainPage {
  get topCartButton() {
    return cy.get("#top-cart");
  }
  get contact() {
    return cy.get("#top-contact");
  }
}

module.exports = new MainPage();
