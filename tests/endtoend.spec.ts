import { test, expect } from '@playwright/test'

test('endtoend', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.locator("#userEmail").fill("test9998@yopmail.com")
    await page.locator("#userPassword").fill("Test@123")
    await page.locator("#login").click()
    await page.waitForLoadState('networkidle')
    const productName = "ZARA COAT 3"
    const products = await page.locator(".card-body")
    console.log(products.count())

    const productsCount = await products.count()

    for (let i = 0; i < productsCount; i++) {
         console.log("inside for loop")
        if (await products.nth(i).locator('b').textContent() === productName) {
            console.log("inside if condition")
            await products.nth(i).getByText("Add To Cart").click()
            break
        }
    }
})