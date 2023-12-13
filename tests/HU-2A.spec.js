const {Builder, By} = require('selenium-webdriver');

const fs = require('fs');

describe("Inicio de Sesión A", () => {
    it("Ser redirigido a la página de opciones de servicios.", async () => {
        let driver = new Builder().forBrowser('chrome').build();
        await driver.get('https://localhost:44310/Home/Inicio')
        await driver.findElement(By.id('login')).click();

        await driver.findElement(By.id('usuario')).sendKeys("LuisSoto");
        await driver.findElement(By.id('password')).sendKeys("1234");

        await driver.findElement(By.id('entrar')).click();
        
        const screenshot = await driver.takeScreenshot();
        fs.writeFileSync('./screenshots/Inicio de Sesión A.png', screenshot, 'base64');
        console.log('Captura de pantalla tomada y guardada como Inicio de Sesión A.png');

        await driver.quit();
    });
})