
//https://freelance-learn-automation.vercel.app/login
//admin@email.com

import{test, expect} from "@playwright/test"

test.use({viewport: {width:1280, height:585 }})

test("check the windows", async ({page}) =>{
    await page.goto("https://freelance-learn-automation.vercel.app/login");

//     let popuppromise= page.waitForEvent('popup');

//     await page.locator("(//a[@target='_blank'])[4]").click({delay: 4000});

//    let windows =await popuppromise;

//    await windows.waitForLoadState("domcontentloaded",{timeout: 10000});

//    await windows.waitForSelector('(//input[@name="email"])[2]', 
//     {state: 'visible',
//         timeout: 50000
//     }
//     );
    let popupprimse=page.waitForEvent('popup');

    await page.locator("(//a[@target='_blank'])[4]").click({delay: 4000});

    let windows=await popupprimse;

    await windows.waitForLoadState("domcontentloaded",{timepout: 4000});

    await windows.locator('(//input[@name="email"])[2]').fill("Kunal");
    await windows.waitForTimeout(5000);

    await windows.close();

    //await windows.waitForTimeout(4000);

    await page.waitForTimeout(4000);

    await page.locator("//input[@placeholder='Enter Password']").fill("Dan");

    await page.waitForTimeout(5000);


    

   //await windows.waitForTimeout(5000);




})


