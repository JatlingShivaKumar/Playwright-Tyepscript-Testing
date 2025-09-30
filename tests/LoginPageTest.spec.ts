import {test, expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { DashboardPage } from '../Pages/dashboardPage'

let url = "https://rahulshettyacademy.com/client"
let userName = "jatlingkumar@gmail.com"
let password = "Jatling@123"
let incorrectPassowrd = "Test"

test.describe.configure({mode : 'parallel', timeout : 120000, retries : 1})

let loginPage: LoginPage
let dashboardPage: DashboardPage

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.LaunchUrl(url)

})

test.describe("Login Page Test", async ()=>{    
test("Vaild login Test",{tag: ['@smoke', '@regression']}, async ({})=>{   
    test.step.skip("Login into application", async ()=>{
    await loginPage.vaidLogin(userName,password)
     })
     test.step("Assertion for successful login", async ()=>{
    await expect(dashboardPage.homePageIdentifier).toBeVisible()
    })
})
})

test("Invalid Login Test",{tag: '@regression'}, async ()=>{
test("Invaild login Test", async ({})=>{   
     //   test.slow()
        // Failing due to bug JIRA - 123 
    await loginPage.invalidLogin(userName, incorrectPassowrd)
    await expect(loginPage.errorMassage).toContainText("Incorrect email or password")
})
 })