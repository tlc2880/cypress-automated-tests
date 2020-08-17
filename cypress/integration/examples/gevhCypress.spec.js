// Name: Tommy Cao
// Date: 8/17/20
// Description: Cypress e2e testing of the gevh react filter website https://react-gevh-ui.netlify.app/

/// <reference types="Cypress" />

describe('GEVH E2E Test', () => {
    it('Verify website', () => {
        cy.visit('https://react-gevh-ui.netlify.app/') // Visit URL
        cy.title().should('eq', "React App") // Verify URL should include
        cy.get('#root > header > div > p').contains('large homes starting at $200')
        
        cy.get("[class='services-center']").contains('Free Coffee and Tea')
        cy.get("[class='services-center']").contains('Free Use of Xbox-360')

        cy.get("[class='featured-houses']").contains('featured houses')
        cy.get("[class='house-info']").contains('4BR/2BA + Pool')
        cy.get("[class='price-top']").contains('275')
        cy.get("[class='house-info']").contains('5BR/3BA + Pool')
        cy.get("[class='price-top']").contains('500')        
        cy.get("[class='house-info']").contains('6BR/4BA + Pool')        
        cy.get("[class='price-top']").contains('600')

        // Select 'house' button
        cy.get("#root > header > div > a").click()
    })

    it('House Type', () => {
        cy.get('#type').select('4-bedroom').should('have.value', '4-bedroom')
        cy.get(".house-info").contains('4BR/3BA')
        cy.get(".house-info").contains('4BR/2.5BA + Pool')
        cy.get(".house-info").contains('4BR/4BA + Pool')
        cy.get(".house-info").contains('4BR/2BA + Pool')
        cy.get(".house-info").contains('4BR/2BA')

        // Put selection back to 'all'
        cy.get('#type').select('all').should('have.value', 'all')
    })

    // Test House Size Filter
    it('House Size', () => {
        // Set house size minSize=1500
        cy.get("[name='minSize']").clear()
        cy.get("[name='minSize']").type('2400')
        cy.get(".house-info").contains('5BR/3BA + Pool')
        cy.get(".house-info").contains('6BR/4BA + Pool')    
        
        // Enter default minSize=1500
        cy.get("[name='minSize']").clear()
        cy.get("[name='minSize']").type('1500')

        cy.get("[name='maxSize']").clear()
        cy.get("[name='maxSize']").type('1800')
        cy.get(".house-info").contains('3BR/2.5BA + Pool')
        cy.get(".house-info").contains('3BR/1.5BA') 

        // Enter default maxSize=2500
        cy.get("[name='maxSize']").clear()
        cy.get("[name='maxSize']").type('2500')
       })

    it('Radio checkbox Pool and Pets', () => {
        // Select Checkboxes
        cy.get("input[name='pool']")
            .should('be.visible')// visibility checked state
            .click()           
        cy.get("input[name='pets']")
            .should('be.visible')// visibility checked state 
            .click() 
        cy.get(".house-info").contains('3BR/2.5BA + Pool') 
        cy.get(".house-info").contains('5BR/3.5BA + Pool')
        
        // Return to default by unchecking checkboxes
        cy.get("input[name='pool']")
            .should('be.visible') // visibility checked state 
            .click()          
        cy.get("input[name='pets']")
            .should('be.visible') // visibility checked state 
            .click()                             
    })

    // Test Guest Capacity
    it('Guest capacity', () => {
        // Set guest capacity=13
        cy.get('#capacity').select('13').should('have.value', '13')
        cy.get(".house-info").contains('5BR/3.5BA + Pool')
        cy.get(".house-info").contains('5BR/3BA + Pool')
        cy.get(".house-info").contains('6BR/4BA + Pool')

        // Return to default capacity=7
        cy.get('#capacity').select('7').should('have.value', '7')        
    }) 

    it('House Price', () => {
        cy.get("input[type='range']").as('range')
            .invoke('val', 190)
            .trigger('change')
    })    

    it('Verify 5BR/3BA + Pool house', () => {
        // Select 'house' button details
        cy.get("#root > section.houselist > div > article:nth-child(12) > div > a").click({force: true})
        cy.get('#root > header > div > h1').contains('5BR/3BA + Pool')

        cy.get('#root > section.single-house > div.single-house-images > img:nth-child(1)').should('be.visible')
        cy.get("[class='info']").contains('2400')
        cy.get("[class='info']").contains('500')
        cy.get("[class='info']").contains('14 people')        
        cy.get("[class='info']").contains('no pets allowed')
        cy.get("[class='info']").contains('private pool included')
        cy.get("[class='extras']").contains('Hot tub')

        // Back To Houses
        cy.get('#root > header > div > a').click()

        // Select house details
        cy.get('#root > section.houselist > div > article:nth-child(7) > div > a').click({force: true})
        cy.get('#root > header > div > h1').contains('4BR/2BA + Pool')
        cy.get("[class='info']").contains('2099')
        cy.get("[class='info']").contains('275')
        cy.get("[class='info']").contains('11 people') 
        cy.get("[class='extras']").contains('Onsite parking for 4 large cars') 
        cy.get("[class='extras']").contains('Game room with air hockey') 
        cy.get("[class='extras']").contains('Large Gazebo spa') 

        // Select top menu to go Back To Houses
        cy.get('#root > nav > div > ul > li:nth-child(2) > a').click()

        // Select house details
        cy.get('#root > section.houselist > div > article:nth-child(13) > div > a').click({force: true})
        cy.get('#root > header > div > h1').contains('6BR/4BA + Pool')
        cy.get("[class='info']").contains('2500')
        cy.get("[class='info']").contains('600')
        cy.get("[class='info']").contains('15 people') 
        cy.get("[class='extras']").contains('Private hot tub') 
        cy.get("[class='extras']").contains('Game room with billiard table') 
        cy.get("[class='extras']").contains('Some fireworks can be seen at house')         

        // Select the top logo to return to the home page
        cy.get('#root > nav > div > div > a > img').click()
        cy.get('#root > header > div > h1').contains('Great Vacation Homes')
    })
})    