const LoginPage = require("../../PageObjectModels/LoginPage/loginPage");
const ProductGrid = require("../../PageObjectModels/ProductGrid/productGrid");
const MainPage = require("../../PageObjectModels/MainPage/mainPageHeader");
const ProductDetails = require("../../PageObjectModels/ProductDetails/productDetails");

describe("Product Details Test Test", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    LoginPage.login();
    cy.wait(3000);

    // console.log("Log me out Scotty");
  });

  it("Veriffy that back to button works and the url is there ", () => {
    cy.wait(3000);
    ProductGrid.imageOFProductList.eq(5).click();
    cy.wait(2000);
    cy.url().should("include", "shirt");
    ProductDetails.backToButton.click();
    cy.url().should("include", "product");
  });

  it("Verify that related items are there", () => {
    cy.wait(3000);
    // This is a shirt item so only shirts should be present_
    ProductGrid.imageOFProductList.eq(5).click();
    cy.wait(2000);
    ProductDetails.relatedItemsParagraph.each(($elem) => {
      cy.log($elem.text()); //$elem.contains("hat");
      cy.wrap($elem).should("contain.text", "shirt");
      //   cy.wrap($elem).should("include.text", "Hat");
    });
  });

  it("Verify that add to cart button is there", () => {
    cy.wait(3000);
    ProductGrid.imageOFProductList.eq(5).click();
    cy.wait(2000);
    ProductDetails.addToCart.should("exist");
  });

  // cy.get("#sort").select("lowToHigh");
  //  FilterHeader.sortOption.select("lowToHigh");
});
