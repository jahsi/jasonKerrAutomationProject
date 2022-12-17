class FavoritesPage {
  get removeButton() {
    return cy.get("#remove-favorite-btn");
  }

  get addToCartButton() {
    return cy.get("#add-to-cart");
  }
  get messageNoFavorite() {
    return cy.get(".chakra-stack > .chakra-heading");
  }
}

module.exports = new FavoritesPage();
