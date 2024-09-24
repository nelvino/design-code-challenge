
describe('Task 3 functionality', () => {
  it('should calculate business days between two dates', () => {
    cy.visit('/task3')
    cy.get('[data-cy="start-date"]').type('2024-03-28')
    cy.get('[data-cy="end-date"]').type('2024-04-02')
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="result"]').should('contain', 'Result:')
    cy.get('[data-cy="result"]').should('contain', '0')
  })
})

describe('Check Task3 Page h1', () => {
  it('visits the task 3 url', () => {
    cy.visit('/task3')
    cy.contains('h1', 'Business Days (with public holiday rules)')
  })
})