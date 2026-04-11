import { test, expect } from '@playwright/test'

test("dropdowns assignment", async ({ page }) => {
    await page.goto("https://demoqa.com/select-menu")
    const allValuesFromDropdown = page.locator("#withOptGroup")
    await allValuesFromDropdown.click()
    await page.waitForTimeout(5000)

    const countAll = await allValuesFromDropdown.locator(".css-10wo9uf-option").count()
    console.log("all dropdowns values" + countAll)

    for (let i = 0; i < countAll; ++i) {
        const allDropdownText = await allValuesFromDropdown.locator(".css-10wo9uf-option").nth(i).textContent()
        console.log("allDropdowns" + allDropdownText)

        if (allDropdownText === "Group 2, option 2") {
            await allValuesFromDropdown.locator(".css-10wo9uf-option").nth(i).click()
            console.log("Clicked on option: " + allValuesFromDropdown);
            break;
        }
    }
    const selectedOption = await allValuesFromDropdown.locator(".css-10wo9uf-option").textContent()
    console.log("Clicked on option: " + selectedOption);

})