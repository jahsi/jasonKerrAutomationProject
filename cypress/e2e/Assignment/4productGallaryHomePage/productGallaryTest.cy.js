const LoginPage = require("../../PageObjectModels/LoginPage/loginPage");
const productGallaryData = require("../../Data/ProductGallary/productGallaryData");
const HeaderOfPage = require("../../PageObjectModels/MainPage/mainPageHeader");

describe("Product Gallary Test", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    LoginPage.login();
    cy.wait(3000);
  });

  it("Check if home button is there ", () => {
    cy.wait(3000);
    HeaderOfPage.topHomeButton.contains("Home");
  });

  it("Verify that  Title Is Correct", () => {
    //Name of title may change but Home buttons and url unlikely to change
    cy.wait(2000);
    HeaderOfPage.bigtitle.contains(productGallaryData.websiteTitleName);
  });

  it("Verify  that contact button works", () => {
    HeaderOfPage.topContact.click();
    cy.log(cy.url());
    cy.url().should("include", "contact");
  });
});
