class FilterHeader {
  get sortOption() {
    return cy.get(`#sort`);
  }

  get category() {
    return cy.get(`#category`);
  }

  get searchField() {
    return cy.get(`input[id=search]`);
  }

  selectValue(value) {
    this.sortOption.select(value);
  }
  get resetButton() {
    return cy.get(`button#reset`);
  }

  filterCategory(category) {
    this.category.select(category);
  }
}

module.exports = new FilterHeader();
