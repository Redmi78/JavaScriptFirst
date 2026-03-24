import {test,expect} from '@playwright/test'

test('frames',async({page})=>
{
await page.goto("https://demo.automationtesting.in/Frames.html")
const loc =await page.frameLocator('#singleframe').locator('input[type="text"]')
console.log(await loc.fill("yes i can do it"))

  await page.getByText("Iframe with in an Iframe").click()

    const outerFrame = page.frameLocator("#Multiple iframe")
    const innerFrame = outerFrame.frameLocator(".iframe-container iframe")


await innerFrame.locator("input[type='text']").first().fill("i can do it")


await expect(innerFrame.locator("input[type='text']").first()).toHaveValue("i can do it")
await page.goBack()

}

)