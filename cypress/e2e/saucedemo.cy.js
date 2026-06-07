import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import CheckoutPage from "../pages/CheckoutPage";

describe("E2E purchase flow - SauceDemo", () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login("standard_user", "secret_sauce");
  });

  it("Successful purchase of products", () => {
    ProductsPage.addJacket();
    ProductsPage.addBackpack();
    ProductsPage.goToCart();

    CheckoutPage.startCheckout();
    CheckoutPage.fillInformation("Alison", "Test", "Swq3133");
    CheckoutPage.finish();
    CheckoutPage.verifySuccess();
  });
});