const { defineConfig } = require('cypress');

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		specPattern: 'cypress/api-test/**.{js,jsx,ts,tsx}',
		baseUrl: 'https://jsonplaceholder.typicode.com/posts',
		reporter: 'mochawesome',
		reporterOptions: {
			reportDir: 'cypress/results',
			overwrite: false,
			html: false,
			json: true,
		},
	},
});
