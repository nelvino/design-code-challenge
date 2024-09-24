
describe('Check Home Page h1', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to the Design Code Challenge')
  })
})

