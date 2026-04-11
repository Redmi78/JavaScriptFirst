import { Locator, Page } from "@playwright/test"

export class DashBoard{
//constructor -> to initialize the locators
//methods -> to perform actions on the locators
//variables -> to store data
//locators

page:Page
Items :Locator

constructor(page: Page){
    this.page = page;
    this.Items = page.locator(".card-body b");

}

async getProductList(){
    console.log(await this.Items.allTextContents());
}

}