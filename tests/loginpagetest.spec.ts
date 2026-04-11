import {test, expect} from '@playwright/test';
import { LoginPage } from "../pages/LoginPage";
let url = "https://rahulshettyacademy.com/client"
let username = "testnHNk@gmail.com"
let Password = "Testing@1234"
let incorrectPwd = "Test"
let lp: LoginPage


test.beforeEach(async ({page})=>{
    lp = new LoginPage(page)
    await lp.launchURL(url)
})


test("Valid login test", async ()=>{
    await lp.loginIntoApplication(username, Password)
   // await expect(lp.homePageIdentifier).toBeVisible()
})

   
