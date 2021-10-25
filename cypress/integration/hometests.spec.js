describe('Home Tests', () => {
    it('open the home page and verify the url & title', () => {
        cy.visit('https://imindersingh.com/');
        cy.url().should("include", "iminder");
        cy.title().should("eq", "Home | Watercolour artist | IminderSingh.com")
    });
});