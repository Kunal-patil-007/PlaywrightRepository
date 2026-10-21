
import{test, expect} from "@playwright/test"

test.use({viewport: {width: 1280, height: 580}});

test("handling the autosuggesstions", async ({page}) => {

    await page.goto("https://www.amazon.com/", {waitUntil: 'domcontentloaded', timeout: 5000});

    await page.locator("//input[@placeholder='Search Amazon']").focus();

    await page.keyboard.type("bags");

    await page.waitForTimeout(3000);

    await page.waitForSelector('//div[@role="row"]');

    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(3000);

    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(3000);

    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(3000);

    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(3000);

    await page.keyboard.press("Enter");






})

test("handling the autosuggestions in robust way", async ({page}) =>{

    await page.goto("https://www.amazon.com/", {waitUntil: 'domcontentloaded', timeout: 5000});
    await page.locator("//input[@placeholder='Search Amazon']").focus();
    page.keyboard.type("bags");

    await page.waitForSelector('//div[@role="row"]/div/div/span');

    let value1=await page.locator('//div[@role="row"]/div/div/span').first().textContent();
    console.log(value1);

    let suggestionsarray=await page.$$("//div[@role='row']/div/div/span");

    for(let i=0; i<suggestionsarray.length;i++){


        let valueauto = await suggestionsarray[i].textContent();
        console.log(valueauto);
        if(valueauto.includes('travel')){
            await suggestionsarray[i].click({delay:5000});

        }

    

    }




})