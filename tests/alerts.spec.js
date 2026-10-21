
//https://the-internet.herokuapp.com/javascript_alerts

test.use({viewport: {width:1280, height:585}})

import {test, expect} from "@playwright/test"

test("check the alert", async ({page}) =>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.on('dialog', async dialog =>{
        let alertType=await dialog.type();
        console.log(alertType);
        console.log(await dialog.message());
        await page.waitForTimeout(3000);


        await dialog.accept();
    })

    await page.locator("//button[text()='Click for JS Alert']").click({delay: 3000});
    //await page.waitForTimeout(3000);

     

 


})

test("check the confirm alert", async ({page}) =>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.on('dialog', async dialog => {
        console.log(dialog.type());
        console.log(dialog.message())
        await page.waitForTimeout(4000);
        dialog.dismiss();
    })

    await page.locator("//button[text()='Click for JS Confirm']").click({delay: 3000});
})

test("check the prompt alert", async ({page}) =>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.on('dialog', async dialog =>{
        console.log(dialog.type());
        console.log(dialog.message());

        await page.waitForTimeout(4000);
        // await dialog.type("KP");
        // await page.waitForTimeout(3000);
        await dialog.accept("Kunal");
        //await page.waitForTimeout(4000);
    })

    await page.locator("//button[text()='Click for JS Prompt']").click({delay:3000});

})
