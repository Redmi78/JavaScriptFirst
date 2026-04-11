import { Locator ,Page} from "@playwright/test";

export class LoginPage{
    //locators
    page:Page
    username :Locator
    password :Locator
    LoginButton :Locator

    //constructor -> to initialize the locators
    constructor(page: Page){
        this.page = page;
        this.username = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.LoginButton = page.locator("#login");
    }

    //methods -> to perform actions on the locators

      async launchURL(url:string){
        await this.page.goto(url)
    }

      async loginIntoApplication(username:string, password:string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.LoginButton.click()
    }
    
}