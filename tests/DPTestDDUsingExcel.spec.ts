
import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import {ExcelUtils} from '../utils/ExcelUtils'
import path from 'path'

const filePath  = path.join(__dirname, '../TestData/excel.xlsx')
const sheetName = "Login"

let productData : any
try{
    productData = ExcelUtils.getExcelData(filePath, sheetName)
}
catch(e){
    console.log("Error reading excel data : ", e);
}


let loginPage : LoginPage
let dashboardPage :DashboardPage
for(let data of productData){
    test.beforeEach(async ({page})=>{
        loginPage = new LoginPage(page)
        dashboardPage = new DashboardPage(page)
        
    })

    test(`Add the product to the cart for ${data.productName}`,{tag: ['@smoke', '@regression']}, async ()=>{
        await loginPage.launchURL(data.url)
        await loginPage.validLogin(data.username, data.password)
        await expect(dashboardPage.homePageIdentifier).toBeVisible()
        await dashboardPage.searchAndAddProductToCart(data.productName)
        await expect(dashboardPage.addToCartSuccessMsg).toHaveText(data.cartSuccessMsg)
    })

    test(`Validate the product details for ${data.productName}`,{tag : '@regression'}, async ()=>{
        await loginPage.launchURL(data.url)
        await loginPage.validLogin(data.username, data.password)
        await expect(dashboardPage.homePageIdentifier).toBeVisible()
        await dashboardPage.searchAndValidateProductDetails(data.productName)
        await expect(dashboardPage.viewProductName).toHaveText(data.productName)
        await expect(dashboardPage.viewProductPrice).toHaveText(dashboardPage.productPrice)
    })
}
