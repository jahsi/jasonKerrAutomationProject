const checkOutData = require("../../Data/checkOutData/checkOutInformation");
const CheckOutPage = require("../../PageObjectModels/CheckOut/checkOutFields");

const ProductGrid = require("../../PageObjectModels/ProductGrid/productGrid");
const LoginPage = require("../../PageObjectModels/LoginPage/loginPage");
const CartPage = require("../../PageObjectModels/Cart/cartPage");

describe("Checkout test", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    LoginPage.login();
    cy.wait(3000);

    // console.log("Log me out Scotty");
  });

  //FIXME This works with dashboard but fails when ruan headless

  // FilterHeader.selectValue("lowToHigh");
  it("CheckOut with one item ", () => {
    cy.wait(2000);
    ProductGrid.listOfAddToCartItem.eq(0).click();
    cy.wait(2000);
    //  CartPage.backToCart.click();
    CartPage.checkOut.click();
    cy.wait(2000);
    CheckOutPage.fillValue(checkOutData.coorect_info);

    cy.wait(2000);
    CheckOutPage.submitButton.click();
    cy.wait(3000);
    // CheckOutPage.creditCardCardField.type(checkOutData.correct_credit_cart);
    CheckOutPage.fillCreditCardDetails(checkOutData.validCreditCard);
    CheckOutPage.placeOrderButton.click();
    cy.wait(2000);
    CheckOutPage.thankYouH1.contains("Thank");
  });

  it("Verify that one cannot checkout with invalid fields", () => {
    cy.wait(2000);
    ProductGrid.listOfAddToCartItem.eq(0).click();

    CartPage.checkOut.click();
    cy.wait(1000);
    CheckOutPage.fillValue(checkOutData.wrong_info);

    cy.wait(1500);
    CheckOutPage.submitButton.click();
    cy.wait(1500);
    CheckOutPage.invalidText.contains(checkOutData.invalid_email);
  });

  ///Wanted to use and invalid credit cart but it works   😢😕
  it.skip("Verify that one needs valid credit Card", () => {
    cy.wait(2000);
    ProductGrid.listOfAddToCartItem.eq(0).click();
    cy.wait(2000);
    //  CartPage.backToCart.click();
    CartPage.checkOut.click();
    cy.wait(2000);
    CheckOutPage.fillValue(checkOutData.coorect_info);

    cy.wait(2000);
    CheckOutPage.submitButton.click();
    cy.wait(3000);
    // CheckOutPage.creditCardCardField.type(checkOutData.correct_credit_cart);
    CheckOutPage.fillCreditCardDetails(checkOutData.validCreditCard);
    /// Cypress Iframe throws exception
    CheckOutPage.placeOrderButton.click();
    cy.wait(2000);
    CheckOutPage.thankYouH1.contains("Thank");
  });

  //TODO The checkout card does not apperar to be working
});
