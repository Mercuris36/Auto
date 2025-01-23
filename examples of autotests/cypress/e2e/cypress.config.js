const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mu5fbi',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "C:/Users/user/projects/new_cypress-main/cypress/e2e/*.cy.{js,jsx,ts,tsx}", // Настройка поиска файлов
  },
});