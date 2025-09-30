import {test, expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { DashboardPage } from '../Pages/dashboardPage'
import loginData from "../TestData/login.json"



let loginPage: LoginPage
let dashboardPage: DashboardPage

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.LaunchUrl(loginData.url)

})

test("Vaild login Test", async ({})=>{   
    await loginPage.vaidLogin(loginData.username,loginData.password)
    await expect(dashboardPage.homePageIdentifier).toBeVisible()
})

// test("Invaild login Test", async ({})=>{    
//     await loginPage.invalidLogin(userName, incorrectPassowrd)
//     await expect(loginPage.errorMassage).toContainText("Incorrect email or password")
// })