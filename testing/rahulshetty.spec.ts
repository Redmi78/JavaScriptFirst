import {test,expect}  from '@playwright/test'

test("rahulshetty",async({page})=>{

    //step 1: launch the application

    await page.goto("https://eventhub.rahulshettyacademy.com/login")
    await page.getByPlaceholder("you@email.com").fill("test@yopmail.com")
    await page.locator("#password").fill("Test@123")
    await page.locator("#login-btn").click()
await page.waitForLoadState('networkidle')
   await page.getByText("Browse Events →").waitFor()
  await expect(page.getByText("Browse Events →")).toBeVisible()
await page.getByText("Admin").click()
await page.locator('a').filter({hasText:'Manage Events'}).first().click()
console.log(await page.url() )
})