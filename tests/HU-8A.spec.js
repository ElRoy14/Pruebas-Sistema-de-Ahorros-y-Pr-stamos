const {Builder, By} = require('selenium-webdriver');

const fs = require('fs');

describe("Monto de la Inversión A", () => {
    it("Debe generarse el calendario de pagos con el ROI calculado "
    + "en base al monto ingresado.", async () => {
        let driver = new Builder().forBrowser('chrome').build();
        await driver.get('https://localhost:44310/Home/Inicio')

        //Estado Inicial
        await driver.findElement(By.id('login')).click();
        await driver.findElement(By.id('usuario')).sendKeys("LuisSoto");
        await driver.findElement(By.id('password')).sendKeys("1234");
        await driver.findElement(By.id('entrar')).click();
        await driver.findElement(By.id('inversion')).click();
        await driver.findElement(By.id("fechaI")).sendKeys("13/12/2023");
        await driver.findElement(By.id("fechaT")).sendKeys("13/12/2027");

        //---------------------------------------------------
        await driver.findElement(By.id('montoI')).sendKeys("12000");

        await driver.findElement(By.id('btnInversion')).click() 

        const screenshot = await driver.takeScreenshot();
        fs.writeFileSync('./screenshots/Monto de la Inversión A.png', screenshot, 'base64');
        console.log('Captura de pantalla tomada y guardada como Monto de la Inversión A.png');

        await driver.quit();
        
    });
})