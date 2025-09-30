import {test, expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { DashboardPage } from '../Pages/dashboardPage'
import productsDatas from '../TestData/products.json'

// let url = "https://rahulshettyacademy.com/client"
// let userName = "jatlingkumar@gmail.com"
// let password = "Jatling@123"
// let productName = "iphone 13 pro"
// let cartSuccessMsg = "Product Added To Cart"


let loginPage: LoginPage
let dashboardPage: DashboardPage
const cartSuccessMsg = "Product Added To Cart";
for(let data of productsDatas){
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page) 
})

test(`Add the product to the cart ${data.productName}`, async ()=>{ 
    await loginPage.LaunchUrl(data.url)
    await loginPage.vaidLogin(data.username, data.password)
    await expect(dashboardPage.homePageIdentifier).toBeVisible()  
    await dashboardPage.searchAndAddProductToCart(data.productName)
    await expect(dashboardPage.addToCartSuccesssMsg).toHaveText(cartSuccessMsg)
})

test.skip(`Validate the product details ${data.productName}`, async ()=>{
     await loginPage.LaunchUrl(data.url)
    await loginPage.vaidLogin(data.username, data.password)
    await expect(dashboardPage.homePageIdentifier).toBeVisible()
    await dashboardPage.searchAndVaildatedProductDetails(data.productName)
    await expect(dashboardPage.viewProductName).toHaveText(data.productName)    
})
}

