export {}
// assert errors are displayed when user submit without email and code
// add id to this p tag in App.tsx
it("assert title Edit src/App.tsx and save to reload.", () => {
    cy.visit("http://localhost:3000/");  
    cy.get('#title').should('contain', 'Edit src/App.tsx and save to reload.')
});