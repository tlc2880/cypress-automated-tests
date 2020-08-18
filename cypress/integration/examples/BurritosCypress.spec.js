// Name: Tommy Cao
// Date: 8/15/20
// Description: Cypress e2e testing of the "Tommy's Burritos" website

/// <reference types="Cypress" />

describe('E2E Test', () => {
    it('Verify buttons', () => {
        cy.visit('https://tlc2880-burritos-cypress-e2e-testing.netlify.app/') // Visit URL
        cy.title().should('eq', "Tommy's Burritos - RTL") // Verify URL shuld include

        cy.get("[data-testid='add-item-1']").click()
        cy.get(".order__name").contains('Wet Burrito')
        cy.get(".order__spice").contains('🌶️') 
        cy.get(".order__price").contains('$5')        
        cy.get(".order__heading--total").contains('$5') 

        cy.get("[data-testid='add-item-2']").click()
        cy.get(".order__name").contains('Poncho Burrito')
        cy.get(".order__spice").contains('🌶️🌶️') 
        cy.get(".order__price").contains('$7')        
        cy.get(".order__heading--total").contains('$12')

        cy.get("[data-testid='add-item-3']").click()
        cy.get(".order__name").contains('Breakfast Burrito')
        cy.get(".order__spice").contains('🌶️') 
        cy.get(".order__price").contains('$8')        
        cy.get(".order__heading--total").contains('$20')        

        cy.get("[data-testid='add-item-5']").click()
        cy.get(".order__name").contains('Chimichanga')
        cy.get(".order__spice").contains('🌶️🌶️🌶️') 
        cy.get(".order__price").contains('$8')        
        cy.get(".order__heading--total").contains('$28') 

        cy.get("[data-testid='add-item-4']").click()
        cy.get(".order__name").contains('California Burrito')
        cy.get(".order__spice").contains('🌶️🌶️🌶️') 
        cy.get(".order__price").contains('$9')        
        cy.get(".order__heading--total").contains('$37')   
        
        // Remove burrito item-1
        cy.get("[data-testid='add-item-1']").click()
        cy.get(".order__name").not('Wet Burrito')      
        cy.get(".order__heading--total").contains('$32') 

        // Remove burrito item-2
        cy.get("[data-testid='add-item-2']").click()
        cy.get(".order__name").not('Poncho Burrito')      
        cy.get(".order__heading--total").contains('$25')         

        // Remove burrito item-3
        cy.get("[data-testid='add-item-3']").click()
        cy.get(".order__name").not('Breakfast Burrito')      
        cy.get(".order__heading--total").contains('$17')      

        // Remove burrito item-5
        cy.get("[data-testid='add-item-5']").click()
        cy.get(".order__name").not('Chimichanga')      
        cy.get(".order__heading--total").contains('$9')      

        // Remove burrito item-4
        cy.get("[data-testid='add-item-4']").click()
        cy.get(".order__heading--nothing").contains('It looks like you have an empty stomach, order now! 🌯🌯🌯')
    })
})    
