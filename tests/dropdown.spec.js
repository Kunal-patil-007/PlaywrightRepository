import {test, expect}  from "@playwright/test"

//https://freelance-learn-automation.vercel.app/signup

test.use({viewport: {width: 1280, height: 585}});

test("select values from drop down", async ({page}) =>{
    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    await page.locator("//select[@name='state']").selectOption({label: 'Chhattisgarh'},{delay:1000});

    await page.waitForTimeout(2000);
    await page.locator("//select[@name='state']").selectOption({value:'Jammu and Kashmir'},{delay: 1000});

    await page.waitForTimeout(2000);

    await page.locator("//select[@name='state']").selectOption({index:9},{delay:3000});

    await page.waitForTimeout(2000);

    let alldropdownvalues=await page.locator("//select[@name='state']").textContent();
    // console.log(alldropdownvalues);
    // expect(alldropdownvalues.includes("Arunachal")).toBeTruthy();

    let dropdownelement=await page.$("//select[@name='state']");

    let dropdwonarray=await dropdownelement.$$("option");

    for(let i=0; i<dropdwonarray.length; i++){
        let value=await dropdwonarray[i].textContent();
        console.log(value);
        if(value.includes("Goa")){
            //await dropdwonarray[i].click()
            await page.locator("//select[@name='state']").selectOption({label:value});
            await page.waitForTimeout(3000);
            break

        

        }


    }


})

test("multiselect dropdown", async ({page}) =>{
    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    await page.locator("select[@id='hobbies']").selectOption(['Playing','Reading']);
    await page.waitForTimeout(3000);

})