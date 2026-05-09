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


test("dropdowns for testing",async({page})=>{   
await page.goto("https://testautomationpractice.blogspot.com/")
const colourDropdown = page.locator('#colors')
console.log(await colourDropdown.allTextContents())

  await colourDropdown.selectOption('yellow')
  await colourDropdown.selectOption({label:"Green"})
  await colourDropdown.selectOption({index:3})
  await colourDropdown.selectOption(["Red","Yellow","Green"])


})


