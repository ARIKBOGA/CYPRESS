/// <reference types = "Cypress" />
describe("Custom login commands", () => {
    it("Successful login test", () => {
        cy.fixture("userdata").as("user")
        cy.visit('https://www.saucedemo.com')
        cy.get("@user").then((user)=>{
            cy.login(user.username,user.password)
        })
    })
})
