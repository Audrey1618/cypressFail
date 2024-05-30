describe('Test GET request', () => {
	it('Should be able to send GET request and verify the response', () => {
		cy.request({
			url: 'https://jsonplaceholder.typicode.com/posts',
			method: 'GET',
		}).then((response) => {
			expect(response.status).to.eq(201);
			expect(response.body.length).to.eq(300);
		});
	});
});
