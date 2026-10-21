import { test, expect} from "@playwright/test";

test.use({viewport: {width: 1280, height: 720}});

test('Verify login scenario and dashboard screen', async ({ page}) =>{

    console.log(await page.viewportSize().width);
    console.log(await page.viewportSize().height);
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder('Username').fill('Admin', {delay : 5000});
    await page.getByPlaceholder('Password').fill('admin123',{ delay : 5000});

    await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click({delay : 2000});
    let urldashboard = await page.url();
    console.log(urldashboard);
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    //await page.locator('//img[@alt="profile picture"]').click({delay : 3000});
    await page.getByAltText("profile picture").first().click({delay : 2000});

    await page.locator("//a[@class='oxd-userdropdown-link']").first().click({delay : 2000});

    //await expect(page).toHaveURL('/auth/');


}
)

test( 'verify the error messages for invalid creds', async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder('Username').fill('admin2', {delay : 3000});

    await page.getByPlaceholder('Password').fill('3466',{delay : 3000});

    await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();

    let errormessage=await page.locator('//p[text()="Invalid credentials"]').textContent();
    console.log(errormessage);

    await expect(errormessage).toBe("Invalid credentials");

    await expect(errormessage.includes("valid")).toBeTruthy();

    await expect(errormessage.includes("admin")).toBeFalsy();

    //await expect(errormessage.includes("valid")).toBeFalsy();

} )






