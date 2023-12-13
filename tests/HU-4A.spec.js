const {Builder, By} = require('selenium-webdriver');

const fs = require('fs');

describe("Calcular Préstamo A", () => {
    it("Debe generarse un calendario con la cuotas de pago, la cantidad "
    + "a pagar debe ser 1,000 y en un total de 12 cuotas, un pago al mes por un año.", async () => {
        let driver = new Builder().forBrowser('chrome').build();
        await driver.get('https://localhost:44310/Home/Inicio')

        //Iniciar Sesión
        await driver.findElement(By.id('login')).click();
        await driver.findElement(By.id('usuario')).sendKeys("LuisSoto");
        await driver.findElement(By.id('password')).sendKeys("1234");

        await driver.findElement(By.id('entrar')).click();

        //Solicitar Prestamo
        await driver.findElement(By.id('prestamo')).click();
        await driver.findElement(By.id('Monto_Prestamo')).sendKeys(10000);

        await driver.findElement(By.id('12')).click();
        await driver.findElement(By.id('btnPrestamo')).click()        

        const screenshot = await driver.takeScreenshot();
        fs.writeFileSync('./screenshots/Calcular Préstamo A.png', screenshot, 'base64');
        console.log('Captura de pantalla tomada y guardada como Calcular Préstamo A.png');

        await driver.quit();
    });
})