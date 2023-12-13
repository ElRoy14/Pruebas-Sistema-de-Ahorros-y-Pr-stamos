const {Builder, By} = require('selenium-webdriver');

const fs = require('fs');

describe("Solicitar Préstamo A", () => {
    it("Debe generarse un calendario con la cuotas de pago, cantidad "
    +"a pagar por cuota y la cantidad de cuotas que han sido pagadas.", async () => {
        let driver = new Builder().forBrowser('chrome').build();
        await driver.get('https://localhost:44310/Home/Inicio')

        //Iniciar Sesión
        await driver.findElement(By.id('login')).click();
        await driver.findElement(By.id('usuario')).sendKeys("LuisSoto");
        await driver.findElement(By.id('password')).sendKeys("1234");

        await driver.findElement(By.id('entrar')).click();

        //Solicitar Prestamo
        await driver.findElement(By.id('prestamo')).click();
        await driver.findElement(By.id('Monto_Prestamo')).sendKeys(12000);

        await driver.findElement(By.id('12')).click();
        await driver.findElement(By.id('btnPrestamo')).click()        

        const screenshot = await driver.takeScreenshot();
        fs.writeFileSync('./screenshots/Solicitar Préstamo A.png', screenshot, 'base64');
        console.log('Captura de pantalla tomada y guardada como Solicitar Préstamo A.png');

        await driver.quit();
    });
})