const {Builder, By} = require('selenium-webdriver');

const fs = require('fs');

describe("Solicitar Inversión A", () => {
    it("Debe mostrarse un calendario con la fecha de inicio de la "
    + "inversión y la inversion inicial 12,000 y la fecha de termino "
    +"con el retorno de la inversión 12,050.", async () => {
        let driver = new Builder().forBrowser('chrome').build();
        await driver.get('https://localhost:44310/Home/Inicio')

        //linea para maximizar la pantalla
        //await driver.manage().window().maximize();

        //Iniciar Sesión
        await driver.findElement(By.id('login')).click();
        await driver.findElement(By.id('usuario')).sendKeys("LuisSoto");
        await driver.findElement(By.id('password')).sendKeys("1234");

        await driver.findElement(By.id('entrar')).click();

        //---------------------------------------------------
        await driver.findElement(By.id('inversion')).click();
        await driver.findElement(By.id('montoI')).sendKeys("12000");

        await driver.findElement(By.id("fechaI")).sendKeys("13/12/2023");
        await driver.findElement(By.id("fechaT")).sendKeys("13/12/2024");

        await driver.findElement(By.id('btnInversion')).click()        

        const screenshot = await driver.takeScreenshot();
        fs.writeFileSync('./screenshots/Solicitar Inversión A.png', screenshot, 'base64');
        console.log('Captura de pantalla tomada y guardada como Solicitar Inversión A.png');

        await driver.quit();
        
    });
})