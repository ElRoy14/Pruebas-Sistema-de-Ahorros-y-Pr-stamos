const {Builder, By} = require('selenium-webdriver');

const fs = require('fs');

describe("Inicio de Sesión B", () => {
    it("Debe presentarse un mensaje de error de campos vacios y permanecer en la pagina de inicio de sesión.", async () => {
        let driver = new Builder().forBrowser('chrome').build();
        await driver.get('https://localhost:44310/Home/Inicio')
        await driver.findElement(By.id('login')).click();

        await driver.findElement(By.id('entrar')).click();
        
        const screenshot = await driver.takeScreenshot();
        fs.writeFileSync('./screenshots/Inicio de Sesión B.png', screenshot, 'base64');
        console.log('Captura de pantalla tomada y guardada como Inicio de Sesión B.png');

        await driver.quit();
    });
})