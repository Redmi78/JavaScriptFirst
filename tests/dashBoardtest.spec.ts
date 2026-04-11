import {test, expect} from '@playwright/test';
import { LoginPage } from "../pages/LoginPage";
import { DashBoard } from '../pages/DashBoard';
let url = "https://rahulshettyacademy.com/client"
let username = "testnHNk@gmail.com"
let Password = "Testing@1234"
let incorrectPwd = "Test"
let lp: LoginPage
let dp: DashBoard


test.beforeEach(async ({page})=>{
    lp = new LoginPage(page)
    await lp.launchURL(url)
    dp = new DashBoard(page)
})

test("dashBoard page test", async ()=>{
    await lp.loginIntoApplication(username, Password)
 console.log(await lp.page.url())
await expect(lp.page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash")
 console.log(await dp.getProductList())
})
