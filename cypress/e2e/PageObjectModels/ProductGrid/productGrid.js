// const checkOutData = require("../Data/siteData");

class ProductGrid {
  get ProductDesciption() {
    return cy.get(`div>p[class="chakra-text css-1n64n71"]`);
  }

  get itemTag() {
    return cy.get(`div>span.css-1ccau2i`);
  }

  get deleteItemButton() {
    return cy.get(`button[title="Remove item"]`);
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
  get priceTotalForInteger() {
    return cy.get(
      `div>div[class="snipcart-item-quantity__total-price snipcart__font--bold snipcart__font--secondary"]`
    );
  }

  get incrementQuantity() {
    return cy.get(`button[title="Increment quantity"]`);
  }
  get grandtotal() {
    return cy.get(".snipcart-summary-fees__amount");
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

  addAllItemsToFavourtie() {
    // let favourties = parseInt(this.addItemToFavouriteIcon.length);

    for (let i = 21; i >= 0; i--) {
      cy.wait(200);
      console.log("I am I" + i);
      cy.wait(200);
      this.addItemToFavouriteIcon.eq(0).click();
    }
  }

  get removeFavourtieIcon() {
    return cy.get("#remove-from-favorite");
  }
  get addItemToFavouriteIcon() {
    return cy.get("#add-to-favorite");
  }

  get successAddItemsTOFavourtie() {
    return cy.get("#toast-1-title");
  }

  get removeFromFavouite() {
    return cy.get("#toast-2-title");
  }
}

module.exports = new ProductGrid();
