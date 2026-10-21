//https://docs.oracle.com/javase/8/docs/api/

import {test, expect} from "@playwright/test"

test.use({viewport: {width:1280, height:585 }})

test("checking the frames", async ({page}) => {

    await page.goto("https://docs.oracle.com/javase/8/docs/api/");

    let frame1=await page.frameLocator('//frame[@name="packageListFrame"]');

    await frame1.locator("//a[text()='java.awt.datatransfer']").click({delay:3000})

    await page.waitForTimeout(5000);

    let frame2=await page.frameLocator('//frame[@name="packageFrame"]');
    await frame2.locator('//a[text()="StringSelection"]').click({delay: 3000});
    await page.waitForTimeout(4000);










})