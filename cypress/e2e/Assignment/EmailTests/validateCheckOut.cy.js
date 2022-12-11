const LoginPage = require("../../PageObjectModels/LoginPage/loginPage");
const checkOutData = require("../../Data/checkOutData/checkOutInformation");
const CheckOutPage = require("../../PageObjectModels/CheckOut/checkOutFields");
const ProductGrid = require("../../PageObjectModels/ProductGrid/productGrid");

const CartPage = require("../../PageObjectModels/Cart/cartPage");

describe("Email Test", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    LoginPage.login();
    cy.wait(3000);
  });

  it("Verify that email was sent when checking out ", () => {
    const serverId = "630hhlpz";
    const serverDomain = "630hhlpz.mailosaur.net"; ///@630hhlpz.mailosaur.net
    const email = checkOutData.email.email + serverDomain;
    cy.wait(2000);
    ProductGrid.listOfAddToCartItem.eq(0).click();
    cy.wait(3000);

    CartPage.checkOut.click();
    cy.wait(2000);
    CheckOutPage.fillValueTestEmail(checkOutData.coorect_info, email);

    cy.wait(1500);
    CheckOutPage.submitButton.click();
    cy.wait(2000);
    CheckOutPage.placeOrderButton.click();
    cy.wait(1500);
    cy.mailosaurGetMessage(serverId, {
      sentTo: email,
    }).then((email) => {
      cy.log(email.subject);
      cy.log("This is email below");
      cy.log(email.html.body);
      expect(email.subject).to.contains("Order");
      expect(email.html.body).to.contains("Thank you for your order");
    });

    CheckOutPage.thankYouH1.contains("Thank");
  });
});
