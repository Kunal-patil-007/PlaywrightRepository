



import{ test , expect} from "@playwright/test"

test.use({viewport: {width:1280, height: 585}});



test("Check the Fileupload", async ({page}) =>{

    await page.goto('https://the-internet.herokuapp.com/upload',  { waitUntil: 'domcontentloaded', timeout : 120000 });

    

    await page.locator("//input[@type='file']").first().setInputFiles("C:\\Users\\kunal\\Downloads\\screenshot.png"); 
    
    

    await page.waitForTimeout(3000);

    await page.locator("//input[@type='file']").setInputFiles([]);
    await page.waitForTimeout(3000);
    await page.locator("//input[@type='file']").setInputFiles("C:\\Users\\kunal\\Downloads\\screenshot.png");
    await page.waitForTimeout(3000);


    await page.locator("//input[@id='file-submit']").click({delay: 5000});

    let successmessage=await page.locator("//h3[text()='File Uploaded!']").textContent();
    
    await page.waitForTimeout(3000);
    console.log(successmessage);
    expect(successmessage.includes("File Uploaded!")).toBeTruthy();








})

