const {Builder, By} = require('selenium-webdriver');

const fs = require('fs');

describe("Pagos Calendarios B", () => {
    it("Debe generarse un calendario interactivo que permita moverse entre los meses "
    + "y los años y que presente los datos del préstamo en las fechas correspondientes.", async () => {
        let driver = new Builder().forBrowser('chrome').build();
        await driver.get('https://localhost:44310/Home/Inicio')

        //Estado Inicial
        await driver.findElement(By.id('login')).click();
        await driver.findElement(By.id('usuario')).sendKeys("LuisSoto");
        await driver.findElement(By.id('password')).sendKeys("1234");

        await driver.findElement(By.id('entrar')).click();

        //---------------------------------------------------------------    
        await driver.findElement(By.id('prestamo')).click();
        await driver.findElement(By.id('Monto_Prestamo')).sendKeys(5000);

        await driver.findElement(By.id('4')).click();
        await driver.findElement(By.id('btnPrestamo')).click()       

        const screenshot = await driver.takeScreenshot();
        fs.writeFileSync('./screenshots/Pagos Caleandarios B.png', screenshot, 'base64');
        console.log('Captura de pantalla tomada y guardada como Pagos Calendarios B.png');

        await driver.quit();
    });
})