// Lấy kết quả từ 1 request, rồi mới đem đi xử lý, ko then liền
// chỉ áp dụng cho request đơn giản
describe('Test handling async request in cypress', () => {
	it('Should be able to wait until a request resolved', async () => {
		let createdPostBody = {
			title: 'foo',
			body: 'bar',
			userId: 1,
		};

		let updatePutBody = { title: 'fooooooo', body: 'bar2', userId: 1 };

		// CRUD: Create - Read - Update - Delete
		cy.createPost(createdPostBody)
			.then((res) => {
				cy.getPost(Number(res.body.id) - 1);
			})
			.then((res) => {
				cy.updatePost(Number(res.body.id), updatePutBody);
			})
			.then((res) => {
				cy.deletePost(Number(res.body.id));
			})
			.then((res) => {
				cy.log(JSON.stringify(res));
			});
	});
});
