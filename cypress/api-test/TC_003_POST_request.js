describe('Test POST request', () => {
    it('Should be able to send POST request and get response', () => {
        let url = 'https://jsonplaceholder.typicode.com/posts';
        let header = {
			'Content-type': 'application/json; charset=UTF-8'
        };
        let requestBody = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }

        let requestObject = {
            method: 'post',
            url: url,
            headers: header,
            body: JSON.stringify(requestBody),
        }

		cy.request(requestObject).then((res) => {
            let { status, body } = res;
            expect(status).to.eq(201)

            let { userId, id, title } = body;
            let responseBody = body.body;

            expect(userId).to.eq(requestBody.userId, 'UserId is not correct')
            expect(id).to.eq(101, 'id is not correct');
            expect(title).to.eq(requestBody.title, 'Title is not correct');
            expect(responseBody).to.eq(requestBody.body, 'Body is not correct');

		});
	});
});

