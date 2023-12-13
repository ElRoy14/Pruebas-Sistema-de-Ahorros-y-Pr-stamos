const {Builder, By} = require('selenium-webdriver');

const fs = require('fs');

describe("Registro Usuario B", () => {
    it("Deben presentarse un mensajes de error y denegar el registro.", async () => {
        let driver = new Builder().forBrowser('chrome').build();
        await driver.get('https://localhost:44310/Home/Inicio')
        await driver.findElement(By.id('registrar')).click();
        await driver.findElement(By.className('botons')).click();
        
        const screenshot = await driver.takeScreenshot();
        fs.writeFileSync('./screenshots/Registro Usuario B.png', screenshot, 'base64');
        console.log('Captura de pantalla tomada y guardada como Registro Usuario B.png');

        await driver.quit();
    });
})