const {Builder, By} = require('selenium-webdriver');

const fs = require('fs');

describe("Calcular Préstamo B", () => {
    it("El programa no debe realizar ningun calculo y mostrar un "
    + "mensaje de error que los campos deben ser llenados.", async () => {
        let driver = new Builder().forBrowser('chrome').build();
        await driver.get('https://localhost:44310/Home/Inicio')

        //Iniciar Sesión
        await driver.findElement(By.id('login')).click();
        await driver.findElement(By.id('usuario')).sendKeys("LuisSoto");
        await driver.findElement(By.id('password')).sendKeys("1234");

        await driver.findElement(By.id('entrar')).click();

        //---------------------------------------------------
        await driver.findElement(By.id('prestamo')).click();
        await driver.findElement(By.id('btnPrestamo')).click()        

        const screenshot = await driver.takeScreenshot();
        fs.writeFileSync('./screenshots/Calcular Préstamo B.png', screenshot, 'base64');
        console.log('Captura de pantalla tomada y guardada como Calcular Préstamo B.png');

        await driver.quit();
    });
})