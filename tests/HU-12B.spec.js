const {Builder, By} = require('selenium-webdriver');

const fs = require('fs');

describe("Experiencia del Usuario (UX) b", () => {
    it("Se debe experimentar un fluidez y comodidad al navegar en en el sistema entre páginas.", async () => {
        let driver = new Builder().forBrowser('chrome').build();
        await driver.get('https://localhost:44310/Home/Inicio')
        await driver.findElement(By.id('registrar')).click();
        await driver.findElement(By.id('cedula')).sendKeys("400-3456927-0");
        await driver.findElement(By.id('nombre')).sendKeys("Peter Jose");
        await driver.findElement(By.id('apellido')).sendKeys("Languila Suarez");
        await driver.findElement(By.id('contraseña')).sendKeys("1234");
        await driver.findElement(By.id('direccion')).sendKeys("Av. 1 Esquina. 2 Apart. 3");
        await driver.findElement(By.id('telefono')).sendKeys("829-333-4444");
        await driver.findElement(By.id('tipoUsuario')).sendKeys("Prestatario");
        await driver.findElement(By.className('botons')).click();

        await driver.findElement(By.id('prestamo')).click();
        
        const screenshot = await driver.takeScreenshot();
        fs.writeFileSync('./screenshots/Experiencia del Usuario (UX) B.png', screenshot, 'base64');
        console.log('Captura de pantalla tomada y guardada como Experiencia del Usuario (UX) B.png');

        await driver.quit();
    });
})