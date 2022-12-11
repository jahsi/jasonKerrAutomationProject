const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    MAILOSAUR_API_KEY: "qKH8DULbcjv69dBb",
  },
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false,
});
