declare namespace Cypress {
    interface Chainable<Subject> {
        createPost(body: any): Chainable<any>
        getPost(id: any): Chainable<any>
        updatePost(id: any, body: any): Chainable<any>
        deletePost(id: any): Chainable<any>
  }
}