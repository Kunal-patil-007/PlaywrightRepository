
import {test, expect} from "@playwright/test"

test.use({viewport:{width: 1280,height: 1280}})

test("check the loadstate", async ({page}) =>{
    await page.goto("https://freelance-learn-automation.vercel.app/login"); 

    await page.locator("//a[text()='New user? Signup']").click("{delay: 3000}");

    await page.waitForLoadState("networkidle",{timeout:5000});

    //await page.waitForTimeout(4000);

    let checkboxarray=await page.$$("//input[@type='checkbox']/following::label");

    //await page.waitForTimeout(4000);

    for(let i=0; i<checkboxarray.length;i++){
        let value=await checkboxarray[i].textContent();
        console.log("checkbox value is: "+value);

    }







})