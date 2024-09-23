const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://opencart.abstracta.us/index.php'
  },
  chromeWebSecurity: false,
});
