import { Page } from "@playwright/test"

export class DashboardPage{

    private page
    private products
    homePageIdentifier
    addToCartSuccesssMsg
    private searchTextBox
    viewProductName
    

constructor(page: Page){
    this.page = page
    this.products = this.page.locator("div.card-body")
    this.homePageIdentifier = this.page.locator(".fa-sign-out")
    this.addToCartSuccesssMsg = this.page.locator("#toast-container")
    this.searchTextBox = this.page.getByPlaceholder("search")
    this.viewProductName = this.page.locator("div.rtl-text h2")
    
   }

   async searchAndAddProductToCart(productName: string ){       
    await this.products.last().waitFor()
    const countOfProduct = await this.products.count()     
    for(let i=0; i<countOfProduct; i++){
        const productText = await this.products.nth(i).locator("h5").textContent() // div.card-body h5
        if(productText === productName){
            await this.products.nth(i).locator("button").last().click()
            break
        }
    }

   }

   async searchAndVaildatedProductDetails(productName: string ){       
    await this.products.last().waitFor()
    const countOfProduct = await this.products.count() 
    let productPrice    
    for(let i=0; i<countOfProduct; i++){
        const productText = await this.products.nth(i).locator("h5").textContent() // div.card-body h5
         if(productText === productName){
             productPrice = await this.products.nth(i).locator("div.text-muted")
             await this.products.nth(i).locator("button").first().click()
             break
        }
    }

   }




}