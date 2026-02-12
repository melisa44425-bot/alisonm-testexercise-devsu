class ProductsPage{
    addJacket(){
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()

    }

    addBackpack(){
        cy.get('#add-to-cart-sauce-labs-backpack').click()
    }

    goToCart(){
        cy.get('#shopping_cart_container').click()
    }
}

export default new ProductsPage()