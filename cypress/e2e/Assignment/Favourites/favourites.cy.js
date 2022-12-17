const checkOutData = require("../../Data/checkOutData/checkOutInformation");
const CheckOutPage = require("../../PageObjectModels/CheckOut/checkOutFields");
const HeaderOfPage = require("../../PageObjectModels/MainPage/mainPageHeader");
const ProductGrid = require("../../PageObjectModels/ProductGrid/productGrid");
const LoginPage = require("../../PageObjectModels/LoginPage/loginPage");
const CartPage = require("../../PageObjectModels/Cart/cartPage");
const FavoritesPage = require("../../PageObjectModels/FavoritesRelated/favouritesRelatedPage");

describe("Favorites  test", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    LoginPage.login();
    cy.wait(3000);
  });

  it("An item can be successfully added to the cart by message", () => {
    cy.wait(2000);
    ProductGrid.addItemToFavouriteIcon.eq(0).click();
    cy.wait(2000);
    ProductGrid.successAddItemsTOFavourtie.contains("added to favorites");
    //  CartPage.backToCart.click();
  });

  it("An item can be successfully removed from the favourites by messages", () => {
    cy.wait(2000);
    ProductGrid.addItemToFavouriteIcon.eq(0).click();
    cy.wait(1000);
    ProductGrid.removeFavourtieIcon.eq(0).click();
    ProductGrid.removeFromFavouite.contains("removed from favorites");
  });

  it("The favourtie button works", () => {
    cy.wait(2000);
    ProductGrid.addItemToFavouriteIcon.eq(0).click();
    cy.wait(1000);
    ProductGrid.removeFavourtieIcon.eq(0).click();
    HeaderOfPage.topFavourtieButton.click();
    cy.url().should("include", "favorites");
  });

  it("The remove favorites button should work on favorites pages", () => {
    cy.wait(1000);
    ProductGrid.addItemToFavouriteIcon.eq(0).click();
    cy.wait(1000);
    HeaderOfPage.topFavourtieButton.click();
    FavoritesPage.removeButton.eq(0).click();
    ProductGrid.removeFromFavouite.contains("removed from favorites");
  });

  it("The add all items to favourtie", () => {
    cy.wait(1000);
    ProductGrid.addAllItemsToFavourtie();
    HeaderOfPage.favoriteText.contains("22");
  });
});
