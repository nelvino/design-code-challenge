
describe('Check Task1 Page h1', () => {
  it('visits the app root url', () => {
    cy.visit('/task1')
    cy.contains('h1', 'Weekdays Between Two Dates')
  })
})

describe('Task 1', () => {
  it('should calculate weekdays between two dates', () => {
    cy.visit('/task1')
    cy.get('[data-cy="start-date"]').type('2024-12-23')
    cy.get('[data-cy="end-date"]').type('2024-12-29')
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="result"]').should('contain', 'Result:')
    cy.get('[data-cy="result"]').should('contain', '4')
  })
})
