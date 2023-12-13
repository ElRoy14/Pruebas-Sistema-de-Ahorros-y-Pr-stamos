const {Builder, By} = require('selenium-webdriver');

const fs = require('fs');

describe("Diseño de Interfaz de Usuario Atractiva B", () => {
    it("Debe visualizarse de forma correcta la pagina de inicio de sesión.", async () => {
        let driver = new Builder().forBrowser('chrome').build();
        await driver.get('https://localhost:44310/Home/Inicio')

        await driver.findElement(By.id('login')).click();
        
        const screenshot = await driver.takeScreenshot();
        fs.writeFileSync('./screenshots/Diseño de Interfaz de Usuario Atractiva B.png', screenshot, 'base64');
        console.log('Captura de pantalla tomada y guardada como Diseño de Interfaz de Usuario Atractiva B.png');

        await driver.quit();
    });
})