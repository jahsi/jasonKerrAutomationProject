const LoginPage = require("../../PageObjectModels/LoginPage/loginPage");
const FilterHeader = require("../../PageObjectModels/FilterHeader/filterHeader");

const ProductData = require("../../Data/ProductData/productObjectData");
const ProductGrid = require("../../PageObjectModels/ProductGrid/productGrid");

describe("Search for words containing hat", () => {
  beforeEach(() => {
    LoginPage.login();
    cy.wait(2000);

    // console.log("Log me out Scotty");
  });

  // FilterHeader.selectValue("lowToHigh");
  it("search for words only containing hat ", () => {
    cy.wait(1000);
    FilterHeader.searchField.type("hat");
    cy.wait(1000);
    ProductGrid.ProductDesciption.each(($elem) => {
      //   $elem.contains("hat");
      cy.wrap($elem).should("contain.text", "Hat");
      //   cy.wrap($elem).should("include.text", "Hat");
    });

    // cy.reload()
  });

  it("Search for giberish and product gallary should be empty", () => {
    cy.wait(1500);
    ProductGrid.cardList.should("have.length", 22);
    cy.wait(500);
    FilterHeader.searchField.type("giberish");
    cy.wait(1500);
    ProductGrid.cardList.should("have.length", 0);
    ProductGrid.cardList.should("not.exist");
    cy.wait(500);
    // FilterHeader.searchField.clear()
    /// TODO should this be two test to see if clear is working prooperly
    FilterHeader.resetButton.click();
    ProductGrid.cardList.should("have.length", 22);

    // cy.reload()
  });
  //TODO What else can I do? for search
  it("Search for a specific item ", () => {
    let itemSearched = ProductData.original_list[1].name;
    cy.wait(1000);
    FilterHeader.searchField.type(itemSearched);
    cy.wait(1000);
    ProductGrid.ProductDesciption.each(($elem) => {
      //   $elem.contains("hat");
      cy.wrap($elem).should("contain.text", itemSearched);
      //   cy.wrap($elem).should("include.text", "Hat");
    });
  });
});
