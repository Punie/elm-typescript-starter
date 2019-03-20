describe('First test', () => {

  it('Does not do much!', () => {
    expect(true).to.eq(true);
  });

  it('Opens the page', () => {
    cy.visit('http://localhost:1234');

    cy.contains('Hello world! o/');
  });

});
