describe('My first Test', function(){
  it('Does not do much', function(){

    cy.visit("https://example.cypress.io")

    cy.pause()

    cy.contains('type').click()

    cy.url()
      .should('include','/commands/actions')

    cy.get('#email1')
      .type('barikboga@gmail.com',{delay:50})
      .should('have.value','barikboga@gmail.com')


    //expect("Burak").to.not.equal("burak")
  })
})