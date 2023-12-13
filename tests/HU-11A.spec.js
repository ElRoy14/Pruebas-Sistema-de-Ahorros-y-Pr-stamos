const {Builder, By} = require('selenium-webdriver');

const fs = require('fs');

describe("Diseño de Interfaz de Usuario Atractiva A", () => {
    it("Debe visualizarse de forma correcta la pagina principal.", async () => {
        let driver = new Builder().forBrowser('chrome').build();
        await driver.get('https://localhost:44310/Home/Inicio')
        
        const screenshot = await driver.takeScreenshot();
        fs.writeFileSync('./screenshots/Diseño de Interfaz de Usuario Atractiva A.png', screenshot, 'base64');
        console.log('Captura de pantalla tomada y guardada como Diseño de Interfaz de Usuario Atractiva A.png');

        await driver.quit();
    });
})