//google

import{ test, expect} from "@playwright/test"

test.use({viewport : {width: 1280, height: 585}})

test("check the keyboard events", async ({page}) => {
    await page.goto("https://www.google.com/", {waitUntil: 'domcontentloaded', timeout: 5000});

    // await page.locator('//textarea[@jsname="yZiJbe"]').fill("Sachin Tendulkar");

    // await page.keyboard.press("Control+A");

    // await page.keyboard.press("Control+C");

    // await page.waitForTimeout(3000);

    // await page.keyboard.press("Backspace");
    // await page.waitForTimeout(5000);

    // await page.keyboard.press("Control+V");
    // await page.waitForTimeout(3000);

    // await page.keyboard.press("Enter");
    // await page.waitForTimeout(5000);

    await page.locator('//textarea[@jsname="yZiJbe"]').focus();
    await page.keyboard.type("Sachin Tendulkar!");

    await page.keyboard.press("ArrowLeft");
    await page.waitForTimeout(3000);
    await page.keyboard.down("Shift");
    await page.waitForTimeout(3000);

    for(let i=0; i<9; i++){
        await page.keyboard.press("ArrowLeft");
    }
    await page.waitForTimeout(3000)

    await page.keyboard.up("Shift");
    await page.waitForTimeout(3000)

    await page.keyboard.press("Backspace");
    await page.waitForTimeout(3000);

    await page.keyboard.press("Enter");

    await page.waitForTimeout(10000);

    await page.waitForLoadState("domcontentloaded");
















})