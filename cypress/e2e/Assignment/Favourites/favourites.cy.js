const checkOutData = require("../../Data/checkOutData/checkOutInformation");
const CheckOutPage = require("../../PageObjectModels/CheckOut/checkOutFields");
const HeaderOfPage = require("../../PageObjectModels/MainPage/mainPageHeader");
const ProductGrid = require("../../PageObjectModels/ProductGrid/productGrid");
const LoginPage = require("../../PageObjectModels/LoginPage/loginPage");
const CartPage = require("../../PageObjectModels/Cart/cartPage");
const FavoritesPage = require("../../PageObjectModels/FavoritesRelated/favouritesRelatedPage");
const favorutieData = require("../../Data/FovouritesRelated/favouritesRelated");
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
    ProductGrid.successAddItemsTOFavourtie.contains(
      favorutieData.succesfully_added
    );
    //  CartPage.backToCart.click();
  });

  it("An item can be successfully removed from the favourites by messages", () => {
    cy.wait(2000);
    ProductGrid.addItemToFavouriteIcon.eq(0).click();
    cy.wait(1000);
    ProductGrid.removeFavourtieIcon.eq(0).click();
    ProductGrid.removeFromFavouite.contains(favorutieData.removed_message);
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
    ProductGrid.removeFromFavouite.contains(favorutieData.removed_message);
  });

  it("The add all items to favourtie", () => {
    cy.wait(1000);
    HeaderOfPage.favoriteText.contains("0");

    ProductGrid.addAllItemsToFavourtie();
    HeaderOfPage.favoriteText.contains("22");
  });

  it("The verify that cart button on favourtie page works", () => {
    let num = 30;
    cy.wait(1000);
    cy.wait(2000);
    ProductGrid.addItemToFavouriteIcon.eq(0).click();
    cy.wait(1000);

    HeaderOfPage.topFavourtieButton.click();
    FavoritesPage.addToCartButton.eq(0).click();
    ProductGrid.containerForItems.should("have.length", 1);
    HeaderOfPage.topCartButton.contains(num.toString());
  });
});
