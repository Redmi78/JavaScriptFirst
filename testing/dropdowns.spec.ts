import{test,expect} from '@playwright/test';

test("dropdowns",async({page})=>{   
await page.goto("https://practice.expandtesting.com/dropdown")
const countrydropdown = page.locator('#country')
console.log(await countrydropdown.allTextContents())
await countrydropdown.selectOption("India")
await page.waitForTimeout(2000)
await countrydropdown.selectOption({label:"India"})
await page.waitForTimeout(2000)
    await countrydropdown.selectOption({index:1})


})