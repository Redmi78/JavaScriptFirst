import {test,expect}  from '@playwright/test'

test('launch browser1',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveTitle("Automation Testing Practice")
    await page.goto("https://www.google.com/")
   const titles= await page.title()
    console.log(titles)
    
}
)

test('launch browser2',async({browser})=>{

const context1 = await browser.newContext()
const context2 = await browser.newContext()
const page = await context1.newPage()
await page.goto("https://testautomationpractice.blogspot.com/")

const page2 = await context2.newPage()
await page2.goto("https://www.google.com/")

    
}
)


test.only('locators1',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

const nameInput = await page.locator("//input[@placeholder='Enter Name']")
await nameInput.clear()
await nameInput.fill("selenium")
console.log(await nameInput.inputValue())

const emailInput = await page.getByPlaceholder("Enter EMail")
await emailInput.clear()
await emailInput.fill("selenium@example.com")
console.log(await emailInput.inputValue())

// radio button

const maleRadio = await page.getByRole("radio",{name:"Male",exact: true})
await maleRadio.waitFor();
await maleRadio.check()
await expect(maleRadio).toBeChecked();

await page.waitForTimeout(3000)

const femaleRadio = await page.getByRole("radio",{name:"Female"})
await femaleRadio.waitFor();
await femaleRadio.check()
await expect(maleRadio).toBeChecked();



    
}   
)