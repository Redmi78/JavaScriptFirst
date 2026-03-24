import {test,expect} from '@playwright/test'


test('alerts handling',async({page})=>{

 await page.goto("https://demoqa.com/alerts")

page.on('dialog',(dialog)=>{
    console.log(dialog.message())
    dialog.accept("testing")
    dialog.dismiss()

})

await page.waitForTimeout(5000)

await page.locator("#alertButton").click()


})