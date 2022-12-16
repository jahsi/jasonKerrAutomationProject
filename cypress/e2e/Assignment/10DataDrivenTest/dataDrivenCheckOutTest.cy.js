const checkOutData = require("../../Data/checkOutData/checkOutInformation");
const CheckOutPage = require("../../PageObjectModels/CheckOut/checkOutFields");

const ProductGrid = require("../../PageObjectModels/ProductGrid/productGrid");
const LoginPage = require("../../PageObjectModels/LoginPage/loginPage");
const CartPage = require("../../PageObjectModels/Cart/cartPage");
const dataDrivenCheckOut = require("../../Data/DataDriven/checkOutTest");

describe("Checkout test", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    LoginPage.login();
    cy.wait(3000);

    // console.log("Log me out Scotty");
  });

  //FIXME This works with dashboard but fails when ruan headless
  for (const contact of dataDrivenCheckOut.contact_information) {
    it("CheckOut with different param ", () => {
      cy.wait(2000);
      ProductGrid.listOfAddToCartItem.eq(0).click();
      cy.wait(2000);
      //  CartPage.backToCart.click();
      CartPage.checkOut.click();
      cy.wait(2000);
      CheckOutPage.fillValue(contact);
      if (contact.valid_email) {
        cy.wait(2000);
        CheckOutPage.submitButton.click({ force: true });
        cy.wait(2000);
        CheckOutPage.placeOrderButton.click({ force: true });
        cy.wait(2000);
        CheckOutPage.thankYouH1.contains("Thank");
      } else {
        cy.wait(1500);
        CheckOutPage.submitButton.click();
        cy.wait(1500);
        /// Not finding element in error message
        cy.contains(dataDrivenCheckOut.invalid_email);
        // Tried to find element with PAGE OBJECT BUT COUD NOT
        // The only what that is requried is city which would be the same check for error message
      }
    });
  }
});
