import{test,expect} from '@playwright/test';

test('ui basics',async({page})=>{
    //launch the url
    //fill the username(textbox)
    //validate is the username field is successfully filled 
    // fill the password
    //click on the login button
    //validate login is successful or not

    //goto -> launch the url on the given browser
await page.goto("https://practicetestautomation.com/practice-test-login/")

//fill("string") -> fill the text in the textbox
//await page.locator("#username").fill("student")
await page.getByLabel("Username").fill("student")
//toHaveValue -> check IF an INPUT field having an  value
await expect(page.getByLabel("Username")).toHaveValue("student")

await expect(page.getByLabel("Password").fill("Password123"))

await expect(page.getByLabel("Password")).toHaveValue("Password123")
await page.waitForTimeout(2000)
await page.getByRole("button", { name: "Submit" }).click()
await page.waitForTimeout(2000)

await expect(page.getByText("Log out")).toBeVisible()
await expect(page.locator("h1.post-title")).toHaveText("Logged In Successfully")
});

test("radio and checkbox",async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form/")
    await page.locator("#gender-radio-2").click()
    await page.waitForTimeout(2000)
   await  expect (page.locator("#gender-radio-2")).toBeChecked()
   await page.waitForTimeout(2000)
   await page.locator("#hobbies-checkbox-2").check()
   await page.waitForTimeout(2000)
   await expect(page.locator("#hobbies-checkbox-2")).toBeChecked()
   await page.waitForTimeout(2000)
   await page.locator("#hobbies-checkbox-2").uncheck()
   await page.waitForTimeout(2000)
   await expect(page.locator("#hobbies-checkbox-2")).not.toBeChecked()
   await page.waitForTimeout(2000)
})

test("get text of the element",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    const titlePage = await page.locator("h1.title").textContent()
    console.log("Title of the page is: "+titlePage)

    const allTitles = await page.locator("h2.title").allTextContents()
    console.log("All titles are: "+allTitles)

})