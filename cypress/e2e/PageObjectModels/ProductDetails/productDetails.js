// const checkOutData = require("../Data/siteData");

class ProductDetails {
  get ProductDesciption() {
    return cy.get(".css-egoftb > :nth-child(2)");
  }

  get backToButton() {
    return cy.get(".css-dpkrn2 > .chakra-heading");
  }

  get addToCart() {
    return cy.get("#add-to-cart");
  }

  get relatedItemsParagraph() {
    return cy.get(`p[class="chakra-text css-1n64n71"]`);
  }
}
module.exports = new ProductDetails();
