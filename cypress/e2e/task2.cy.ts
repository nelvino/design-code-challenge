
describe('Task 2 functionality', () => {
  it('should calculate business days between two dates', () => {
    cy.visit('/task2')
    cy.get('[data-cy="start-date"]').type('2024-03-28')
    cy.get('[data-cy="end-date"]').type('2024-04-02')
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="result"]').should('contain', 'Result:')
    cy.get('[data-cy="result"]').should('contain', '2')
  })
})

describe('Check Task2 Page h1', () => {
  it('visits the app root url', () => {
    cy.visit('/task2')
    cy.contains('h1', 'Business Days (fixed holidays)')
  })
})
