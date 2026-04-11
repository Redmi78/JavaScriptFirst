
import {test,expect}  from '@playwright/test'

test("checkbox and radio button",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

  await page.getByLabel('Male').first().click()
  await page.waitForTimeout(2000)
    await expect(page.getByLabel('Male').first()).toBeChecked()
  
    const allCheckboxesText = await page.locator(".form-check-label").allTextContents()
    console.log("All checkboxs are: "+allCheckboxesText)
    for(let i=0;i<allCheckboxesText.length;i++)
    {
        console.log("Checkbox "+i+" is: "+allCheckboxesText[i])

    }
    const allCheckboxesTexts = await page.locator(".form-check-label").allTextContents()

    await page.getByRole("checkbox", { name: "Monday" }).check()
    await page.waitForTimeout(2000)
    await expect(page.getByRole("checkbox", { name: "Monday" })).toBeChecked()
    await page.waitForTimeout(2000)
    await page.getByRole("checkbox", { name: "Monday" }).uncheck()
    await page.waitForTimeout(2000)
    await expect(page.getByRole("checkbox", { name: "Monday" })).not.toBeChecked()

    

})


test("multiple checkboxs",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    let allCheckboxesText = await page.locator(".form-check.form-check-inline input[type='checkbox']")
    let countofCheckbox = await allCheckboxesText.count()
    for(let i=0;i<countofCheckbox;i++)
   
        {

            await allCheckboxesText.nth(i).check()
            await page.waitForTimeout(2000)
        }
})