/// <reference types="cypress" />

describe('Add products to cart and checkout', () => { 

    it('Add products to cart', () => {
        cy.visit('https://opencart.abstracta.us/');

        //SELECT PRODUCTS
        const product = cy.get('.product-layout').first

        product.find('button')
        .contains('Add to Cart')
        .click();

        product.next().find('button')
        .contains('Add to Cart')
        .click();

        
    });
});