
QA Automation Exercise - E2E and API Testing

Technologies Used
- Cypress
- JavaScript
- Node.js
- Visual Studio Code

=====================================================
PROJECT OVERVIEW
=====================================================

This project contains automated test coverage for:

1. E2E testing of the SauceDemo purchase flow
2. API testing of the Swagger PetStore service

The implementation was developedusing a more maintainable structure, clearer test naming, reusable test data, and execution-ready documentation.

=====================================================
E2E TESTING - SauceDemo | Option #2
=====================================================

Application:
https://www.saucedemo.com/

Scenario Covered:
- Log in with valid credentials
- Add two products to the cart
- Open and validate the cart
- Complete the checkout form
- Finish the purchase
- Validate the confirmation message: "THANK YOU FOR YOUR ORDER"

Main validations:
- Successful authentication
- Correct products added to the cart
- Cart page displays expected items
- Checkout information is submitted successfully
- Order confirmation is displayed at the end of the flow

Implementation notes:
- Cypress is used as the automation framework
- Page Object Model (POM) is applied to improve readability and maintainability
- Stable selectors such as `data-test` are preferred

Main file:
- cypress/e2e/saucedemo.cy.js

=====================================================
API TESTING - PetStore | Optiont #2
=====================================================

Service:
https://petstore.swagger.io/

Scenarios Covered:
- Create a new pet using POST
- Retrieve the created pet by ID using GET
- Update the pet name and status to "sold" using PUT
- Retrieve pets by status using GET

Main validations:
- HTTP response status codes
- Response body structure
- Relevant field values such as id, name, and status
- Data consistency between requests

Implementation notes:
- Cypress `cy.request()` is used for API validation
- Test data can be centralized for better reuse and maintenance
- Dynamic values such as pet ID should be reused across requests within the same test flow

Main file:
- cypress/e2e/petstore.cy.js

=====================================================
SETUP
=====================================================

1. Clone the repository
2. Open the project in Visual Studio Code
3. Install dependencies:

npm install

=====================================================
TEST EXECUTION
=====================================================

Run Cypress in interactive mode:
npx cypress open

Run all tests in headless mode:
npx cypress run

Run only E2E tests:
npx cypress run --spec "cypress/e2e/saucedemo.cy.js"

Run only API tests:
npx cypress run --spec "cypress/e2e/petstore.cy.js"

=====================================================
NOTE
=====================================================

The `node_modules` folder is not included in the repository or compressed delivery file in order to keep the project lightweight.

It is generated automatically after running:

npm install