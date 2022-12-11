const LoginPage = require("../../PageObjectModels/LoginPage/loginPage");
const ProductGrid = require("../../PageObjectModels/ProductGrid/productGrid");
const MainPage = require("../../PageObjectModels/MainPage/mainPageHeader");

describe("Testing Cart Functionailities", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    LoginPage.login();
    cy.wait(3000);
  });

  //   div>img.chakra-image[draggable="false"]

  it("Verify that one can remove an item", () => {
    cy.wait(3000);

    //TODO

    ProductGrid.listOfAddToCartItem.eq(0).click();
    ProductGrid.backToCart.click();
    ProductGrid.listOfAddToCartItem.eq(1).click();
    ProductGrid.containerForItems.should("have.length", 2);
    cy.wait(200);
    ProductGrid.deleteItemButton.eq(0).click();
    ProductGrid.containerForItems.should("have.length", 1);
    // MainPage.topCartButton.click();
  });

  it("Verify that the subtotal adds up to the grandtotal ", () => {
    cy.wait(2000);

    //TODO
    ProductGrid.addAllitems();
    cy.wait(500);
    MainPage.topCartButton.click();

    cy.wait(300);
    let subtotal = 0;

    cy.log();
    ProductGrid.priceTotalForInteger.each(($elem, index, $list) => {
      cy.log("This is the index" + index);
      cy.log("This is the list" + $list.length);
      cy.wait(200);
      let price = $elem.text().trim();
      // let intValue = price.replace(/\D/g, "");
      let intValue = price.replace(/[^\d.]/g, "");
      let convertToInt = parseInt(intValue);
      cy.log("This is the inditiual price" + intValue);
      subtotal += convertToInt;
      cy.log(subtotal);
      console.log(convertToInt);
      if (index == $list.length - 1) {
        let str = subtotal.toString();
        /// Trying to convert to dollar sign instead
        //TODO Create function that determines how string is formated based on int value length
        let dollarConverted = str.slice(0, 1) + "," + str.slice(1, 4);
        cy.log("This is subtotal blow");
        cy.log(subtotal);
        ProductGrid.grandtotal.contains(dollarConverted);
      }
    });
  });
  it("Verify that the increse button works", () => {
    let unitprice = 30;
    convertToInt(unitprice);
    cy.wait(3000);

    ProductGrid.listOfAddToCartItem.eq(0).click();
    ProductGrid.priceTotalForInteger.eq(0).contains(30);

    cy.wait(500);
    ProductGrid.incrementQuantity.eq(0).click();
    ProductGrid.priceTotalForInteger.eq(0).contains(30 + 30);
    cy.wait(500);
    // MainPage.inputItemUp.type(20);
    // MainPage.listOfAddToCartItem.eq(0).click();
    // MainPage.topCartButton.contains("30");
    // MainPage.addAllitems();
    // MainPage.containerForItems.should("have.length", 1);
  });
  function convertToInt(numStr) {
    console.log("addAllitems");
  }
});
