describe('Login', () => {
    it('should be publicly accessible', () => {
      cy.visit('http://example.com')
  
      // snapshot name will be the test title
      cy.viewport('iphone-6')
      cy.matchImageSnapshot();

    })
  })