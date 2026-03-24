import{test,expect} from '@playwright/test'

test("windows",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    

    console.log(await page.url())

   const [newPage] = await  Promise.all([
        page.waitForEvent("popup"),
        page.locator(".blinkingText").click()

    ]);

console.log(await newPage.url())

const getText = await newPage.locator(".text-4xl").first().textContent()
console.log(getText)

const contentFromSmartPage = getText?.split(",")
console.log(contentFromSmartPage)
await page.bringToFront()
console.log(await page.url())
await page.close()
})