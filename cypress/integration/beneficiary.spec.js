Cypress.Commands.add("addBeneficiary", (name, percentage) => {
  cy.get(".cypoc__add").click();
  cy.get(".cypoc__form").should("have.class", "cypoc__form--visible");
  cy.get(".cypoc__form-input").eq(0).type(name);
  cy.get(".cypoc__form-input")
    .eq(1)
    .type(percentage)
    .should("have.value", percentage);
  cy.get(".cypoc__form-button").eq(1).click();
});

describe("Beneficiary flow", () => {
  it("Adding a new single beneficiary", () => {
    cy.visit("/");

    cy.get(".cypoc__next").should("have.class", "cypoc__next--disabled");

    cy.addBeneficiary("Gabriel Escame", "100");

    cy.get(".cypoc__no-beneficiary").should("not.exist");
    cy.get(".cypoc__add").should("not.exist");
    cy.get(".cypoc__alert-card").should("not.exist");

    cy.get(".cypoc__beneficiary").should("exist");
    cy.get(".cypoc__next").should("not.have.class", "cypoc__next--disabled");
  });

  it("Adding and removing beneficiary", () => {
    cy.visit("/");

    cy.get(".cypoc__next").should("have.class", "cypoc__next--disabled");
    cy.addBeneficiary("Gabriel Escame", "100");

    cy.get(".cypoc__beneficiary").click();
    cy.get(".cypoc__beneficiary").should("not.exist");

    cy.get(".cypoc__no-beneficiary").should("exist");
    cy.get(".cypoc__add").should("exist");
    cy.get(".cypoc__alert-card").should("exist");

    cy.get(".cypoc__next").should("have.class", "cypoc__next--disabled");
  });

  it("Adding multiple beneficiaries", () => {
    cy.visit("/");

    cy.get(".cypoc__next").should("have.class", "cypoc__next--disabled");

    cy.addBeneficiary("Gabriel Escame", "25");

    cy.addBeneficiary("Marcos Toledo", "25");

    cy.addBeneficiary("Rodrigo Bruno", "25");

    cy.addBeneficiary("Yuri Becker", "25");

    cy.get(".cypoc__add").should("not.exist");
    cy.get(".cypoc__alert-card").should("not.exist");

    cy.get(".cypoc__next").should("not.have.class", "cypoc__next--disabled");


  })
});
