describe("My first test with Odi", () => {
  it("Adding a new single beneficiary", () => {
    cy.visit("/");

    cy.get(".cypoc__next").should("have.class", "cypoc__next--disabled");

    cy.get(".cypoc__add").click();
    cy.get(".cypoc__form").should("have.class", "cypoc__form--visible");
    cy.get(".cypoc__form-input").eq(0).type("Gabriel Escame");
    cy.get(".cypoc__form-input").eq(1).type("100").should("have.value", "100");
    cy.get(".cypoc__form-button").eq(1).click();

    cy.get(".cypoc__add").should("not.exist");
    cy.get(".cypoc__alert-card").should("not.exist");
    cy.get(".cypoc__no-beneficiary").should("not.exist");

    cy.get(".cypoc__beneficiary").should("exist");
    cy.get(".cypoc__next").should("not.have.class", "cypoc__next--disabled");
  });
});
