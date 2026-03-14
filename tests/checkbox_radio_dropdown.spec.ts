import { test, expect, Locator } from '@playwright/test';
import { time } from 'node:console';

test("fill data", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByPlaceholder("Enter Name").fill("test user")
    await page.getByPlaceholder("Enter EMail").fill("testuser@gmail.com")
    const genderRadio = await page.getByRole("radio")
    console.log(await genderRadio.count())
    await genderRadio.first().check()
    await genderRadio.last().check()
    await page.waitForTimeout(2000)

})

test("checkboxes4", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    const testuser: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const testuserLabels: Locator[] = testuser.map(testusers => page.getByLabel(testusers))
    expect(testuserLabels.length).toBe(7)

    for (let checkbox of testuserLabels.slice(0, 5)) {
        await checkbox.check()
        await page.waitForTimeout(2000)
        if (await checkbox.isChecked()) {
            console.log("Checkbox is checked")
        }
    }
})

test("checkboxes5", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    const checkboxes = await page.locator(".form-check.form-check-inline input[type='checkbox']")
    const allcheckboxesCount = await checkboxes.count()
    console.log("Total checkboxes:", allcheckboxesCount)
    for (let i = 0; i < allcheckboxesCount; i++) {
        await checkboxes.nth(i).check()
        await page.waitForTimeout(2000)
    }
})


test("dropdowns1", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    const allValuesFromDropdowns = await page.locator("#country option").allTextContents()
    console.log("All values from dropdown:", allValuesFromDropdowns)
    for (let dropdownValue of allValuesFromDropdowns) {
        const countryValue = dropdownValue.trim()
        if (countryValue === "India") {
            await page.locator("#country").selectOption(countryValue)
            await page.waitForTimeout(2000)
            const selectedOption = await page.locator("#country option:checked").textContent()
            console.log(selectedOption)
            break
        }
    }
})


test("dropdowns2", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    const allValuesFromDropdowns = await page.locator("#country option").allTextContents()
    console.log("All values from dropdown:", allValuesFromDropdowns)
    for (let dropdownValue of allValuesFromDropdowns) {
        const countryValue = dropdownValue.trim()
        if (countryValue === "India") {
            await page.locator("#country").selectOption(countryValue)
            await page.waitForTimeout(2000)
            const selectedOption = await page.locator("#country option:checked").textContent()
            console.log(selectedOption)
            break
        }
    }
})


test("multiSelectDropdown", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    const allValuesFromDropdowns = await page.locator("#colors option").allTextContents()
    console.log("All values from dropdown:", allValuesFromDropdowns)
    const duplicates = allValuesFromDropdowns.map(item => item.trim()).filter((item, index) => allValuesFromDropdowns.indexOf(item) !== index)
    console.log("Duplicate values:", duplicates)
    await page.waitForTimeout(5000)
    await page.locator("#colors").selectOption(["Red", "Green", "Blue"])
    await page.waitForTimeout(5000)
    const selectedOption = await page.locator("#colors option:checked").allTextContents()
    console.log("Selected options:", selectedOption)

})



test('dynamic dropdown', async ({ browser }) => {
    // Create a context that blocks notifications
    const context = await browser.newContext({
        permissions: [], // empty array blocks all permissions like notifications
    });

    const page = await context.newPage();
    await page.goto('https://www.myntra.com/');
    await page.waitForTimeout(5000)
    //const allDropDownValues = await  page.locator("//div[@class='desktop-categoryContainer']//li").allTextContents()
    // console.log("All dropdown values are: "+allDropDownValues)

    const allDropdownValues = await page.locator("//ul[@class='desktop-navBlock']//li/a").allTextContents()
    console.log("All dropdown values are: " + allDropdownValues)

    for (let i = 0; i < allDropdownValues.length; i++) {
        
        if (allDropdownValues[i].trim() === "TopWear") {
            console.log("Dropdown " + i + " is: " + allDropdownValues[i])
            break
        }
    }

    // Do your test steps here

});

//div[@class='lnnVSe']



test('autosuggestive dropdown', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.waitForTimeout(5000)

    await page.locator("textarea[class='gLFyf']").fill("playwright")
    await page.waitForTimeout(5000)

    const allDropdownValues = await page.locator("//div[@class='lnnVSe']").allTextContents()
    console.log("All dropdown values are: " + allDropdownValues)

    // Do your test steps here

    for(let i = 0; i < allDropdownValues.length; i++) {
        if(allDropdownValues[i].trim().includes ("mcp")) {
            await page.locator("//div[@class='lnnVSe']").nth(i).click()
            break
        }
    }
})



test('Myntra autosuggest dropdown select Formal Shirts', async ({ page }) => {

  await page.goto('https://www.myntra.com/shop/men');

  const searchBox = page.getByPlaceholder('Search for products, brands and more');
  await searchBox.pressSequentially('shirt');

  // Get all visible <li> elements
 // const options = await page.locator("//ul[@class='desktop-group']//li");

 const options = page.locator(".desktop-autoSuggest.desktop-showContent")

 await page.waitForTimeout(5000)

  const optionsCount =await options.locator("//ul[@class='desktop-group']//li").count()

    console.log("Total options: " + optionsCount);

    for(let i = 0; i < optionsCount; ++i) {
        const optionText = await  options.locator("//ul[@class='desktop-group']//li").nth(i).textContent();
        console.log("Option " + i + ": " + optionText);
    
    }
});