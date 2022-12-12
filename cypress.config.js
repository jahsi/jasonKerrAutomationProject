const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  env: {
    MAILOSAUR_API_KEY: "qKH8DULbcjv69dBb",
  },
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false,
});
