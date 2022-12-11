class CheckoutFields {
  get checkOut() {
    return cy.get(
      `button[class="snipcart-button-primary snipcart-base-button is-icon-right"]`
    );
  }
}

module.exports = new CheckoutFields();
