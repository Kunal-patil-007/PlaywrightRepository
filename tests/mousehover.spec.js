
import {test, expect} from "@playwright/test"

test.use({viewport: {width:1280, height:585}})

test("Mouse Hover", async ({page}) => {
    page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.getByPlaceholder('Enter Email').fill('admin@email.com');

    await page.getByPlaceholder('Enter Password').fill('admin@123');

    await page.locator("//button[text()='Sign in']").click();

    await page.locator("//span[text()='Manage']").hover();

    await page.waitForTimeout(5000);
    await page.locator("//img[@alt='manage course']").click({delay: 2000});
    await page.waitForTimeout(2000);





})