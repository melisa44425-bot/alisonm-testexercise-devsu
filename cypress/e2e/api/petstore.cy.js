describe ('PetStore API - Flujo Mascota', () => {
    const petId = 12345

    it('Crear mascota', () => {
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet',
            body: {
                id: petId,
                name: 'Taffus_Test',
                status: 'available'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq('Taffus_Test')
        })
    })
    if('Consultar mascota por ID', () => {
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/pet/${petId}'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(petId)
        })
    })

    it('Actualizar status de mascota a sold', () => {
        cy.request({
            method: 'PUT',
            url: 'https://petstore.swagger.io/v2/pet',
            body: {
                id: petId,
                name: 'Taffus_Test',
                status: 'sold'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.status).to.eq('sold')
        })
    })

    it('Consultar mascota en status sold', () => {
        cy.request({
            method: 'Get',
            url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=sold'
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})