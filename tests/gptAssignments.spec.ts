import { test, expect } from '@playwright/test'
import { title } from 'node:process'

test("gpt", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await expect(page).toHaveTitle("Automation Testing Practice: PlaywrightPractice")
await page.getByRole('textbox', { name: 'Username:' }).fill("testUser")

 await page.getByRole('link', { name: 'Apple' }).click()

 await expect(page).toHaveURL("https://www.apple.com/")

 await page.locator('span').filter({ hasText: 'Store' }).first()
})