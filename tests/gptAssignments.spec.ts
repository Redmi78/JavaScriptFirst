import { test, expect } from '@playwright/test'
import { title } from 'node:process'

test("gpt", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

    await expect(page).toHaveTitle("Automation Testing Practice: PlaywrightPractice")


    await page.getByText("Submit Form", { exact: true }).isVisible()
    const text = await page.getByLabel("Email Address:", { exact: true })
    const fillData = await text.fill("test@123")
    await expect(text).toHaveValue("test@123")

    await page.goto("https://practice.expandtesting.com/dropdown")

    const dropDown = await page.locator("#country")
    await page.locator("h2").first().waitFor()

    const dropDownValuesCount = await dropDown.locator("option").count()

    console.log(dropDownValuesCount)

    for (let i = 0; i < dropDownValuesCount; i++) {
        const dropDownValues = await dropDown.locator("option").nth(i).textContent()
        // await dropDownValues.map(dropDownValues => dropDownValues.trim().replace(/\s+/g, ' ')

        const cleanText = (dropDownValues || '').trim();

        console.log(cleanText)




        if (cleanText === "Algeria") {
            await dropDown.selectOption("DZ");
            break
        }

    }
    await dropDown.selectOption({ value: 'AX' })
    await dropDown.selectOption({ label: 'Paraguay' })

    await page.pause()





})