const {Builder, By} = require('selenium-webdriver');

const fs = require('fs');

describe("Pagos Calendarios A", () => {
    it("Debe generarse un calendario interactivo que permita moverse entre los meses "
    + "y los años y que presente los datos de la inversión en las fechas correspondientes.", async () => {
        let driver = new Builder().forBrowser('chrome').build();
        await driver.get('https://localhost:44310/Home/Inicio')

        //Estado Inicial
        await driver.findElement(By.id('login')).click();
        await driver.findElement(By.id('usuario')).sendKeys("LuisSoto");
        await driver.findElement(By.id('password')).sendKeys("1234");

        await driver.findElement(By.id('entrar')).click();

        //---------------------------------------------------------------    
        await driver.findElement(By.id('inversion')).click();
        await driver.findElement(By.id('montoI')).sendKeys("5000");
        await driver.findElement(By.id("fechaI")).sendKeys("13/12/2023");
        await driver.findElement(By.id("fechaT")).sendKeys("13/12/2027");

        await driver.findElement(By.id('btnInversion')).click() 

        const screenshot = await driver.takeScreenshot();
        fs.writeFileSync('./screenshots/Pagos Caleandarios A.png', screenshot, 'base64');
        console.log('Captura de pantalla tomada y guardada como Pagos Calendarios A.png');

        await driver.quit();
    });
})