// Name: Tommy Cao
// Date: 8/18/20
// Description: Cypress e2e testing of the react tic-tac-toe game website https://react-gevh-ui.netlify.app/

/// <reference types="Cypress" />

describe('Tic-Tac-Toe E2E Test', () => {
    it('Verify website', () => {
        cy.visit('https://tlc2880-react-tictactoe-e2e-test.netlify.app/') // Visit URL
        cy.title().should('eq', "Tic-Tac-Toe React App") // Verify URL should include
        // 1st 'X' move
        cy.get("#root > div > div.game-board > div > div:nth-child(2) > button:nth-child(1)").click()
        cy.get("[class='game-info']").contains('Next player: O')
        cy.get("[class='game-info']").contains('Go to move #1, square: 0, row: 0, column: 0')

        // 2nd 'O' move
        cy.get("#root > div > div.game-board > div > div:nth-child(3) > button:nth-child(3)").click()
        cy.get("#root > div > div.game-board > div > div:nth-child(3) > button:nth-child(3)").contains('O')
        cy.get("[class='game-info']").contains('Next player: X')
        cy.get("[class='game-info']").contains('Go to move #2, square: 5, row: 1, column: 2')    
        cy.get("#root > div > div.game-info > ol > li:nth-child(3) > button").contains('Go to move #2, square: 5, row: 1, column: 2')

        // 3nd 'X' move
        cy.get("#root > div > div.game-board > div > div:nth-child(3) > button:nth-child(1)").click()
        cy.get("#root > div > div.game-board > div > div:nth-child(3) > button:nth-child(1)").contains('X')     
        cy.get("[class='game-info']").contains('Next player: O')
        cy.get("[class='game-info']").contains('Go to move #3, square: 3, row: 1, column: 0')    
        cy.get("#root > div > div.game-info > ol > li:nth-child(4) > button").contains('Go to move #3, square: 3, row: 1, column: 0')

        // 4th 'O' move
        cy.get("#root > div > div.game-board > div > div:nth-child(4) > button:nth-child(3)").click()
        cy.get("#root > div > div.game-board > div > div:nth-child(4) > button:nth-child(3)").contains('O')
        cy.get("[class='game-info']").contains('Next player: X')
        cy.get("[class='game-info']").contains('Go to move #4, square: 8, row: 2, column: 2')    
        cy.get("#root > div > div.game-info > ol > li:nth-child(5) > button").contains('Go to move #4, square: 8, row: 2, column: 2')

        // 5th 'X' move
        cy.get("#root > div > div.game-board > div > div:nth-child(4) > button:nth-child(1)").click()
        cy.get("#root > div > div.game-board > div > div:nth-child(4) > button:nth-child(1)").contains('X')   
        cy.get("[class='game-info']").contains('Winner: X')
        cy.get("[class='game-info']").contains('Go to move #5, square: 6, row: 2, column: 0')    
        cy.get("#root > div > div.game-info > ol > li:nth-child(6) > button").contains('Go to move #5, square: 6, row: 2, column: 0')        

        // Time travel back to 2nd 'O' move
        cy.get("#root > div > div.game-info > ol > li:nth-child(3) > button").click()
        cy.get("[class='game-info']").contains('Next player: X')        
      
        // 3nd 'X' move
        cy.get("#root > div > div.game-board > div > div:nth-child(4) > button:nth-child(1)").click()
        cy.get("#root > div > div.game-board > div > div:nth-child(4) > button:nth-child(1)").contains('X')     
        cy.get("[class='game-info']").contains('Next player: O')
        cy.get("[class='game-info']").contains('Go to move #3, square: 6, row: 2, column: 0')    
        cy.get("#root > div > div.game-info > ol > li:nth-child(4) > button").contains('Go to move #3, square: 6, row: 2, column: 0')

        // 4th 'O' move
        cy.get("#root > div > div.game-board > div > div:nth-child(2) > button:nth-child(3)").click()
        cy.get("#root > div > div.game-board > div > div:nth-child(2) > button:nth-child(3)").contains('O')
        cy.get("[class='game-info']").contains('Next player: X')
        cy.get("[class='game-info']").contains('Go to move #4, square: 2, row: 0, column: 2')    
        cy.get("#root > div > div.game-info > ol > li:nth-child(5) > button").contains('Go to move #4, square: 2, row: 0, column: 2')    
        
        // 5th 'X' move
        cy.get("#root > div > div.game-board > div > div:nth-child(3) > button:nth-child(2)").click()
        cy.get("#root > div > div.game-board > div > div:nth-child(3) > button:nth-child(2)").contains('X')   
        cy.get("[class='game-info']").contains('Next player: O')
        cy.get("[class='game-info']").contains('Go to move #5, square: 4, row: 1, column: 1')    
        cy.get("#root > div > div.game-info > ol > li:nth-child(6) > button").contains('Go to move #5, square: 4, row: 1, column: 1') 

        // 6th 'O' move
        cy.get("#root > div > div.game-board > div > div:nth-child(4) > button:nth-child(3)").click()
        cy.get("#root > div > div.game-board > div > div:nth-child(4) > button:nth-child(3)").contains('O')   
        cy.get("[class='game-info']").contains('Winner: O')
        cy.get("[class='game-info']").contains('Go to move #6, square: 8, row: 2, column: 2')    
        cy.get("#root > div > div.game-info > ol > li:nth-child(7) > button").contains('Go to move #6, square: 8, row: 2, column: 2')   

        // Time travel back to 5th 'X' move
        cy.get("#root > div > div.game-info > ol > li:nth-child(6) > button").click()
        cy.get("[class='game-info']").contains('Next player: O')  

        // 6th 'O' move
        cy.get("#root > div > div.game-board > div > div:nth-child(3) > button:nth-child(1)").click()
        cy.get("#root > div > div.game-board > div > div:nth-child(3) > button:nth-child(1)").contains('O')   
        cy.get("[class='game-info']").contains('Next player: X')
        cy.get("[class='game-info']").contains('Go to move #6, square: 3, row: 1, column: 0')    
        cy.get("#root > div > div.game-info > ol > li:nth-child(7) > button").contains('Go to move #6, square: 3, row: 1, column: 0') 

        // 7th 'X' move
        cy.get("#root > div > div.game-board > div > div:nth-child(2) > button:nth-child(2)").click()
        cy.get("#root > div > div.game-board > div > div:nth-child(2) > button:nth-child(2)").contains('X')   
        cy.get("[class='game-info']").contains('Next player: O')
        cy.get("[class='game-info']").contains('Go to move #7, square: 1, row: 0, column: 1')    
        cy.get("#root > div > div.game-info > ol > li:nth-child(8) > button").contains('Go to move #7, square: 1, row: 0, column: 1')      
        
        // 8th 'O' move
        cy.get("#root > div > div.game-board > div > div:nth-child(4) > button:nth-child(2)").click()
        cy.get("#root > div > div.game-board > div > div:nth-child(4) > button:nth-child(2)").contains('O')   
        cy.get("[class='game-info']").contains('Next player: X')
        cy.get("[class='game-info']").contains('Go to move #8, square: 7, row: 2, column: 1')    
        cy.get("#root > div > div.game-info > ol > li:nth-child(9) > button").contains('Go to move #8, square: 7, row: 2, column: 1')  

         // 9th 'X' move
         cy.get("#root > div > div.game-board > div > div:nth-child(4) > button:nth-child(3)").click()
         cy.get("#root > div > div.game-board > div > div:nth-child(4) > button:nth-child(3)").contains('X')   
         cy.get("[class='game-info']").contains('Winner: X')
         cy.get("[class='game-info']").contains('Go to move #9, square: 8, row: 2, column: 2')    
         cy.get("#root > div > div.game-info > ol > li:nth-child(10) > button").contains('Go to move #9, square: 8, row: 2, column: 2')        
    })
})
