import { expect, test } from '@playwright/test'

test("pagesmethods", async ({ page }) => {
    await page.goto("https://www.google.com/")

    const title = await page.title()
    await expect(title).toBe("Google")

    const searchBar = page.locator("#APjFqb")
    await searchBar.click()
    await searchBar.pressSequentially("cricket")

    const allValuesFromDropdown = page.locator("//div[@class='lnnVSe']")

    const count = await allValuesFromDropdown.count()
    console.log(count)

    for (let i = 0; i < count; i++) {
        const text = await allValuesFromDropdown.nth(i).textContent()

        if (text?.includes("cricket match")) {
            console.log(text)
            await allValuesFromDropdown.nth(i).click()
            break
        }
    }
})


test("dropdownpractice", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    const dropdowns = await page.locator("#dropdown-class-example")
    for (let i = 0; i < await dropdowns.count(); i++) {
        const dropdownValues = await dropdowns.nth(i).textContent()
        await console.log(dropdownValues)
        if (dropdownValues?.includes("Option3")) {
            await dropdowns.nth(i).click()
            break
        }
    }

})


test("countrydropdown", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    //single select dropdown
    const countryDD = await page.locator("#country")
    countryDD.selectOption("India")
    countryDD.selectOption("Australia")
    countryDD.selectOption({ value: "UK" })
    countryDD.selectOption({ label: "Austria" })
    countryDD.selectOption({ index: 1 })

    //Multi select dropdown
    const multiSelectDD = await page.locator("#colors")
    multiSelectDD.selectOption(["red", "green"])


})


test("countrydropdowns", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    //single select dropdown
    const countryDD = await page.locator("#country")
    countryDD.selectOption("India")
    countryDD.selectOption("Australia")
    countryDD.selectOption({ value: "UK" })
    countryDD.selectOption({ label: "Austria" })
    countryDD.selectOption({ index: 1 })

    //Multi select dropdown
    const multiSelectDD = await page.locator("#colors")
    multiSelectDD.selectOption(["red", "green"])
    //const mySet = new Set<string>();
    // const duplicates: string[] = []
    // for (const text of multiSelectDD) {
    //     if (multiSelectDD.has(text)) {
    //         duplicates.push(text)
    //     }
    //     else {
    //         multiSelectDD.add(text)
    //     }
    // }
})



test("Alertstesting", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
      await page.locator("#alertBtn").click()
   
   page.on("dialog",async(dialog)=>{
         console.log(await dialog.message())
        await dialog.accept()
   })

     console.log(await page.title())
})
test("windowhandlingtesting", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    const windows = await Promise.all([
        await page.waitForEvent("popup"),
        await page.locator("#PopUp").click()
    ])

    await console.log(page.title())
})