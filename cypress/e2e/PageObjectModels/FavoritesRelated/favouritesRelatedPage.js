class FavoritesPage {
  get removeButton() {
    return cy.get("#remove-favorite-btn");
  }

  get addToCartButton() {
    return cy.get("#add-to-cart");
  }
}

module.exports = new FavoritesPage();
