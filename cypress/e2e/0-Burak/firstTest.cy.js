describe('First test', ()=>{
    it('TC001- User visits the login page',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq',"Swag Labs")
        
    })

    it('TC002-User cannot login with invalid credentials', () => {
        //cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('Username')
        cy.get('#password').type('Password')
        cy.get('#login-button').click()
        cy.get('[data-test=error]').should('have.text','Epic sadface: Username and password do not match any user in this service')
    })

    it('TC002-User can login with valid credentials', () => {
        //cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').clear().type('standard_user')
        cy.get('#password').clear().type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('contains',"https://www.saucedemo.com/inventory.html")
    })
   


})