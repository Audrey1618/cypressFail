// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

let header = {
	'Content-type': 'application/json; charset=UTF-8',
};

/**
 * Create post
 */

Cypress.Commands.add('createPost', (body) => {
	cy.request({
		method: 'POST',
		url: '/',
		headers: header,
		body: body,
	});
});

/**
 * Get post
 */
Cypress.Commands.add('getPost', (id) => {
	cy.request({
		method: 'GET',
		url: '/' + id.toString(),
	});
});

Cypress.Commands.add('updatePost', (id, body) => {
	cy.request({
		method: 'PUT',
		url: '/' + id.toString(),
		headers: header,
		body: body,
	});
});

Cypress.Commands.add('deletePost', (id) => {
	cy.request({
		method: 'DELETE',
		url: '/' + id.toString(),
	});
});
