describe("Login functionality", () => {
  it("success_login", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get(".app_logo").should("be.visible");
    cy.get(".title").should("be.visible");
  });

  it("failed_login", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("aaaaa");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should("be.visible");
  });

  it("failed_login_blank_input", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should("be.visible");
  });
});
