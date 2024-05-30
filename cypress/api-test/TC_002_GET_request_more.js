describe('Test GET request', () => {
	it('Should be able to send GET request and verify the response', () => {
		cy.request({
			url: 'https://jsonplaceholder.typicode.com/posts',
			method: 'GET',
		}).then((response) => {
			// Destructure
			let { status, body } = response;

			// Get a random element from array object
			let roundedRandomIndex = Math.floor(Math.random() * body.length);
			let randomObject = body[roundedRandomIndex];

			// Verification
			// expect(randomObject)
			verifyNotEmpty('UserID', randomObject.userId);
			verifyNotEmpty('Title', randomObject.title);
			verifyNotEmpty('Body', randomObject.body);

			//{"userId":6,"id":54,"title":"sit asperiores ipsam eveniet odio non quia","body":"totam corporis dignissimos\nvitae dolorem ut occaecati accusamus\nex velit deserunt\net exercitationem vero incidunt corrupti mollitia"}
		});
	});
});

let verifyNotEmpty = (name, data) => {
	if (!data) {
		expect(true).to.eq(false, `${name} data is empty`);
	}
};
