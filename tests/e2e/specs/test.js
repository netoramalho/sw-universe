// https://docs.cypress.io/api/introduction/api.html

import people from "../../../src/store/data/people.json";
import planets from "../../../src/store/data/planets.json";

describe("Testing application", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Can view app title", () => {
    cy.contains("h1", "SW Universe");
  });

  it("Can view all the people", () => {
    cy.get("tbody")
      .find("tr")
      .should("have.length", people.length);
  });

  it("Search by name", () => {
    cy.get("input[type=text]").type(people[0].fields.name);
    cy.get("tbody")
      .find("tr")
      .should("have.length", 1);
    cy.get("tbody tr td").contains(people[0].fields.name);
  });

  it("Open planet details", () => {
    cy.get("tbody tr:nth-child(1) button").click();
    cy.get(".v-dialog").should("not.have.css", "display", "none");

    cy.get(".v-card__text").should($div => {
      const text = $div.text();
      const planet = planets.find(p => p.pk === people[0].fields.homeworld);
      expect(text).to.include(planet.fields.name);
      expect(text).to.include(planet.fields.diameter);
      expect(text).to.include(planet.fields.climate);
      expect(text).to.include(planet.fields.population);
    });
  });
});
