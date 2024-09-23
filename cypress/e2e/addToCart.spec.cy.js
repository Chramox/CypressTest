/// <reference types="cypress" />

describe('Add products to cart and checkout', () => { 

  it('Add products to cart', () => {
      cy.visit('http://opencart.abstracta.us/index.php');

      //SELECT PRODUCTS
      cy
      .get('.product-layout')
      .find('button .fa-shopping-cart')
      .then((shoppingButton) => {
        cy.wrap(shoppingButton).eq(0).click();

        cy.wait(2500);
  
        cy.wrap(shoppingButton).eq(1).click();
        
        cy.wait(2500);
      
      });

      cy.get('a[title="Shopping Cart"]').click();

      cy.wait(2500)

      cy.get('.btn-primary').contains('Checkout').click()

      cy.wait(2500)

      // STEP ONE
      cy.contains('Guest Checkout').click()
      cy.get('input[value="Continue"]').click()

      // STEP TWO
      cy.get('#input-payment-firstname').type('Juan')
      cy.get('#input-payment-lastname').type('Ibarra')
      cy.get('#input-payment-email').type('juan.ibarra@devsu.com')
      cy.get('#input-payment-telephone').type('juan.ibarra@devsu.com')
      cy.get('#input-payment-company').type('devsu')
      cy.get('#input-payment-address-1').type('test address')
      cy.get('#input-payment-city').type('Guatemala')
      cy.get('#input-payment-postcode').type('01018')
      
      cy.get('#input-payment-country').select('Guatemala')

      cy.get('#input-payment-zone').select('Guatemala')

      cy.get('input[value="Continue"]').last().click()

      // STEP FOUR
      cy.wait(2500)
      cy.get('input[value="Continue"]').last().click()
      

      // STEP FIVE
      cy.wait(2500)
      cy.get('input[type="checkbox"]').last().click({force: true})
      cy.get('input[value="Continue"]').last().click()

      // STEP SIX
      cy.wait(2500)
      cy.get('input[value="Confirm Order"]').click()

      cy.wait(2500)
      cy.get('#content > h1').then((tag) => {
        const text = tag.text().trim();
        expect(text).to.equal('Your order has been placed!')
      });
  });
});