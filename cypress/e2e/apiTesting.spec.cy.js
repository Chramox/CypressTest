/// <reference types="cypress" />

describe('API TEST petstore', () => { 
    
    it('Add pet to the store - POST',() => {
        cy.fixture('pet').then((pet) => {
            
            cy.request('POST', 'https://petstore.swagger.io/v2/pet', pet).then((response) => {
                console.log("RESPONSE", response)

                expect(response.status).to.eq(200)
                expect(response.body).to.deep.equal(pet)
            });
        }) 
    });

    it('Get pet previously added - GET', () => {
        cy.fixture('pet').then((pet) => {
            cy.request('GET', `https://petstore.swagger.io/v2/pet/${pet['id']}`).then((response) => {
                console.log("RESPONSE", response)

                expect(response.status).to.eq(200)
                expect(response.body).to.deep.equal(pet)
            });
        })
    });

    it('Modify pet previously added - POST', () => {
        cy.fixture('pet').then((pet) => {
            pet.name = 'Rudolf'
            pet.status = 'sold'

            const body = `name=${pet.name}&status=sold`

            cy.request('POST', `https://petstore.swagger.io/v2/pet/${pet['id']}`, body).then((response) => {
                console.log("RESPONSE", response)
                const expectedResponse = {
                    code: 200,
                    type: 'unknown',
                    message: '100'
                }

                expect(response.status).to.eq(200)
                expect(response.body).to.deep.equal(expectedResponse)
            });
        })
    });

    it('Find pet by status SOLD - GET', () => {
        cy.fixture('pet').then((pet) => {
            pet.name = 'Rudolf'
            pet.status = 'sold'
            cy.request('GET', `https://petstore.swagger.io/v2/pet/${pet['id']}`).then((response) => {
                console.log("RESPONSE", response)

                expect(response.status).to.eq(200)
                expect(response.body).to.deep.equal(pet)
            });
        })
    });
});