/// <reference types="cypress" />

describe('Add products to cart and checkout', () => { 

  it('Add products to cart', () => {
      cy.visit('https://opencart.abstracta.us/');

      //SELECT PRODUCTS
      cy
      .get('.product-layout')
      .find('button .fa-shopping-cart')
      .then((shoppingButton) => {
        cy.wrap(shoppingButton).eq(0).click();

        cy.wait(5000);
  
        cy.wrap(shoppingButton).eq(1).click();
        
        cy.wait(5000);
      
      });

      cy.get('a[title="Shopping Cart"]').click();

      cy.wait(5000)

      cy.get('.btn-primary').contains('Checkout').click()

      // STEP ONE
      cy.get('div.radio').contains('Guest Checkout').click()
      cy.get('input').contains('Continue').click()

      // STEP TWO
      cy.get('input[name="First Name"]').type('Juan')
      cy.get('input[name="Last Name"]').type('Ibarra')
      cy.get('input[name="email"]').type('juan.ibarra@devsu.com')
      cy.get('input[name="company"]').type('devsu')
      cy.get('input[name="address_1"]').type('test address')
      cy.get('input[name="city"]').type('Guatemala')
      cy.get('input[name="postcode"]').type('01018')
      
      cy.get('select[name="country_id"]').click()
      cy.get('option').contains('Guatemala').click()

      cy.get('select[name="zone_id"]').click()
      cy.get('option').contains('Guatemala').click()

      cy.get('input').contains('Continue').click()

      // STEP FOUR
      cy.get('input').contains('Continue').click()

      // STEP FIVE
      cy.get('input[type="checkbox"]').click()
      cy.get('input').contains('Continue').click()

      // STEP SIX
      cy.get('input').contains('Confirm Order').click()
    
  });
});