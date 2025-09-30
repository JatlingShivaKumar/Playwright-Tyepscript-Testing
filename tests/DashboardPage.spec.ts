import {test, expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { DashboardPage } from '../Pages/dashboardPage'

let url = "https://rahulshettyacademy.com/client"
let userName = "jatlingkumar@gmail.com"
let password = "Jatling@123"
let productName = "iphone 13 pro"
let cartSuccessMsg = "Product Added To Cart"

test.describe.configure({mode : 'parallel', timeout : 120000, retries : 1})

let loginPage: LoginPage
let dashboardPage: DashboardPage

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.LaunchUrl(url)
    await loginPage.vaidLogin(userName, password)
    await expect(dashboardPage.homePageIdentifier).toBeVisible()

})

test.describe("Login Page Test", async ()=>{  
test("Add the product to the cart",{tag: ['@smoke', '@regression']}, async ()=>{   
    await dashboardPage.searchAndAddProductToCart(productName)
    await expect(dashboardPage.addToCartSuccesssMsg).toHaveText(cartSuccessMsg)

})
})

test.describe("Page Test", async ()=>{
test("Validate the product details",{tag: ['@smoke', '@regression']}, async ()=>{
    await dashboardPage.searchAndVaildatedProductDetails(productName)
    await expect(dashboardPage.viewProductName).toHaveText(productName)    
})
})