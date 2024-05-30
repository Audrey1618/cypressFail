describe('Test PUT request', () => {
    it('Should be able to send a request with PUT method', () => {
        let url = 'https://jsonplaceholder.typicode.com/posts/1';
        let header = {
			'Content-type': 'application/json; charset=UTF-8',
        };
        
        let requestBody = {
				id: 1,
				title: 'foo',
				body: 'bar',
				userId: 1,
			
		};

        let requestObject = {
            method: 'PUT',
            url: url,
            headers: header,
            body: JSON.stringify(requestBody),
        }

        cy.request(requestObject).then((res) => {
			let { status } = res;
			let resBody = res.body;
			let { userId, id, title, body } = resBody;
			// cy.log(JSON.stringify(res));

			// cy.log(JSON.stringify(resBody));
            expect(id).to.eq(requestBody.id, 'Id is not correct')
            expect(title).to.eq(requestBody.title, 'title is not correct');
            expect(body).to.eq(requestBody.body, 'body is not correct');
            expect(userId).to.eq(requestBody.userId, 'userId is not correct');

		});
	});
});


