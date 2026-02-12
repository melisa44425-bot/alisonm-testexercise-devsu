import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import CheckoutPage from "../pages/CheckoutPage";

describe('Flujo de compra e2e - SauceDemo', () => {
    
    beforeEach(() => {
      LoginPage.visit()
      LoginPage.login('standard_user', 'secret_sauce')
})

it ('Compra exitosa de los productos', () => {
    ProductsPage.addJacket()
    ProductsPage.addBackpack()
    ProductsPage.goToCart()

    CheckoutPage.startCheckout()
    CheckoutPage.fillInformation('Alison', 'Test', 'Swq3133')
    CheckoutPage.finish()
    CheckoutPage.verifySuccess()
  })
})