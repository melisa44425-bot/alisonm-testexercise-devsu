QA Automation Exercise E2E/Apis


Tecnologías utilizadas:

- Cypress
- JavaScript
- Node.js
- Visual Studio Code

-----------------------------------------------------
PRUEBAS E2E/SauceDemo - **Opción 2**
-----------------------------------------------------
Descripción:
Se automatizó el fijo de compra en la pagina 'https://www.saucedemo.com/'.

Alcance:
- Login con User y Password establecidos.
- Dos productos agregados al carrito.
- Visualizar carritos con los objetos agregados.
- Completar formulario de checkout
- Finalizar la compra y validar mensaje 'hank you for your order'

Implementación:
- Uso de Cypress en Visual Studio Code.
- Aplicación del patrón 'Page Object Model (POM)'.
- Uso de selectores data-test para mayor estabilidad.

Archivo principal:
cypress/e2e/saucedemo.cy.js

-----------------------------------------------------
PRUEBAS API/PetStore - **Opción 2**
-----------------------------------------------------
Descripción:
Se implementaron pruebas sobre el servicio REST PetStore utilizando cy.request.

Implementación:
- Crear "mascota" con 'POST'.
- Consultar mascota con el ID 'GET'.
- Actualizar estado de mascota a "Sold" con 'PUT'.
- Consultar mascota por el estado 'GET'.

Validaciones:
- Codigo de respuesta HTTP.
- Campos relevantes del body de respuesta.

Archivo principal:
cypress/e2e/petstore.cy.js

-----------------------------------------------------
Instalación y ejecución
-----------------------------------------------------

1. Clonar el repositorio.
2. Ejecutar 'npm install'.
3. Ejecutar pruebas en el modo interactivo 'npx cypress open'.

NOTA IMPORTANTE:

la carpeta node_modules no se incluye en el repositorio ni en el archivo .zip,
esto para mantener el  proyecto liviano.

se genera automaticamente al ejecutar: npm install
