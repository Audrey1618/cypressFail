import METHOD from "../utils/Method";

describe('Test PUT request', () => {
    
    it('Should be able to send a request with DELETE method', () => {
        let url = 'https://jsonplaceholder.typicode.com/posts/1';
 

        cy.request({
			method: METHOD.delete,
			url: url,
		}).then((res) => {
            let { status } = res;
            
            cy.log(JSON.stringify(res));
            expect(status).to.eq(200)

			// cy.log(JSON.stringify(resBody));
		});
	});
});
