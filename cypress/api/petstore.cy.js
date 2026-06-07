describe("PetStore API - Pet Flow", () => {
  const petId = 12345;
  const petName = "Taffus_Test";

  it("should create a pet", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/pet",
      body: {
        id: petId,
        name: petName,
        status: "available",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(petId);
      expect(response.body.name).to.eq(petName);
      expect(response.body.status).to.eq("available");
    });
  });

  it("should get the pet by ID", () => {
    cy.request({
      method: "GET",
      url: `https://petstore.swagger.io/v2/pet/${petId}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(petId);
    });
  });

  it('should update the pet status to "sold"', () => {
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/pet",
      body: {
        id: petId,
        name: petName,
        status: "sold",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq("sold");
    });
  });

  it('should find pets with status "sold"', () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/pet/findByStatus?status=sold",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
    });
  });
});