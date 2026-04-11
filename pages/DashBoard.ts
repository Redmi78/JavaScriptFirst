import { Locator, Page } from "@playwright/test"

export class DashBoard{
//constructor -> to initialize the locators
//methods -> to perform actions on the locators
//variables -> to store data
//locators

page:Page
Items :Locator
AddToCart :Locator

constructor(page: Page){
    this.page = page;
    this.Items = page.locator(".card-body b");  
    this.AddToCart = page.getByRole('button', { name: 'Add To Cart' })

   

}

async getProductList(){
    console.log(await this.Items.allTextContents());
    const allProducts = await this.Items.allTextContents();
    for(let i=0;i<allProducts.length;i++){
        if(allProducts[i].includes("iphone 13 pro")){
            console.log(allProducts[i])
            await this.AddToCart.nth(i).click()
            console.log("product added to cart")
            break;  
        }

}

}
}