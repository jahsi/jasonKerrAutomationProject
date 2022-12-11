const LoginPage = require("../../PageObjectModels/LoginPage/loginPage");
const ProductGrid = require("../../PageObjectModels/ProductGrid/productGrid");
const MainPage = require("../../PageObjectModels/MainPage/mainPageHeader");

describe("Adding items to cart", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    LoginPage.login();
    cy.wait(3000);
  });

  //   div>img.chakra-image[draggable="false"]

  it("add the first item of the product listing to the cart ", () => {
    cy.wait(3000);

    ProductGrid.listOfAddToCartItem.eq(0).click();
    MainPage.topCartButton.contains("30");
  });
  it("use the input button and add twenty items with first cart ", () => {
    cy.wait(3000);

    ProductGrid.inputItemUp.eq(0).clear();
    let num = 20 * 30;
    ProductGrid.inputItemUp.eq(0).type(20);
    ProductGrid.listOfAddToCartItem.eq(0).click();
    MainPage.topCartButton.contains(num.toString());
  });

  it("add every item to the cart ", () => {
    cy.wait(3000);

    ProductGrid.addAllitems();
    ProductGrid.containerForItems.should("have.length", 22);
  });
});
