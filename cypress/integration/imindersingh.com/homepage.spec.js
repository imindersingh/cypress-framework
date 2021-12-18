describe('Home Page Tests', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('The title is correct', () => {
        cy.url().should("include", "iminder");
        cy.title().should("eq", "Home | Watercolour artist | IminderSingh.com");
    });

    it('Can subscribe to newsletter successfully from banner', () => {
        cy.get("#Containercomp-jdpppire", { timeout: 16000 })
        .should("have.class", "_1KV2M");


        cy.get("#input_comp-kvk9khc8")
        .type("test@test.com").should("have.value", "test@test.com");

        cy.get("#comp-kvk9khcc > input._3ESMu")
        .not("[disabled]")
        .check().should("be.checked")

        cy.get("#comp-kvk9khcg > button")
        .click()

        //Captcha needs resolving here
    });
});