// const checkOutData = require("../Data/siteData");

class ProductGrid {
  get ProductDesciption() {
    return cy.get(`div>p[class="chakra-text css-1n64n71"]`);
  }

  get itemTag() {
    return cy.get(`div>span.css-1ccau2i`);
  }

  get cardList() {
    return cy.get(`div.css-uaqjf`);
  }
  get imageOFProductList() {
    return cy.get(`img.chakra-image[draggable="false"]`);
  }

  selectValue(value) {
    this.sortOption.select(value);
  }

  get listOfAddToCartItem() {
    return cy.get(`button[class="chakra-button snipcart-add-item css-betff9"]`);
  }
  get inputItemUp() {
    return cy.get(`input[role="spinbutton"]`);
  }
  get backToCart() {
    return cy.get(`button>svg[title="Remove item"]`);
  }
  get containerForItems() {
    return cy.get(`.snipcart-item-line__container`);
  }
  addAllitems() {
    let totalitems = parseInt(this.listOfAddToCartItem.length);
    cy.log(totalitems);
    cy.log("Above me is the total items");
    // this.listOfAddToCartItem.eq(1).click();

    for (let i = 0; i < 22; i++) {
      cy.wait(200);
      console.log("I am I" + i);
      this.listOfAddToCartItem.eq(i).click();
      this.backToCart.click();
    }
  }
  /////
}

module.exports = new ProductGrid();
