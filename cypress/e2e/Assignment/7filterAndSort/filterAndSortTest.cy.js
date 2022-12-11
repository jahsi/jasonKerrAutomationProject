const LoginPage = require("../../PageObjectModels/LoginPage/loginPage");
const FilterHeader = require("../../PageObjectModels/FilterHeader/filterHeader");

const ProductData = require("../../Data/ProductData/productObjectData");
const ProductGrid = require("../../PageObjectModels/ProductGrid/productGrid");

describe("Filter and sort test", () => {
  beforeEach(() => {
    LoginPage.login();
    cy.wait(2000);
  });

  it("Filter By hat ", () => {
    cy.wait(1000);
    FilterHeader.filterCategory("hat");
    cy.wait(1000);
    ProductGrid.itemTag.each(($elem) => {
      expect($elem.text()).equal("hat");
    });

    // cy.reload()
  });

  it("reset the filters", () => {
    ProductGrid.cardList.should("have.length", 22);
    cy.wait(500);
    FilterHeader.filterCategory("hat");
    ProductGrid.cardList.should("have.length", 2);
    cy.wait(500);
    FilterHeader.resetButton.click();
    cy.wait(500);
    ProductGrid.cardList.should("have.length", 22);

    // cy.reload()
  });

  it("sort by Alphabetical Order ", () => {
    let unsortedList = ProductData.original_list;
    let sortedList = unsortedList.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    console.log(sortedList[1].name.trim());
    console.log(sortedList);
    console.log(unsortedList);
    cy.wait(2000);
    FilterHeader.selectValue(ProductData.filter_objects.assending_order);
    cy.wait(2000);
    ProductGrid.ProductDesciption.each(($elem, index, $list) => {
      expect($elem.text()).equal(sortedList[index].name);
    });
  });

  // cy.get("#sort").select("lowToHigh");
  //  FilterHeader.sortOption.select("lowToHigh");
});
