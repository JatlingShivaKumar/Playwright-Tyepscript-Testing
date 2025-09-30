import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'

test.describe.configure({mode : 'parallel', timeout : 120000, retries : 1})

let loginPage :LoginPage
let dashboardPage :DashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(process.env.BASE_URL)
})

test.describe("Login Page Test", async ()=>{
    test("Valid Login Test",{tag: ['@smoke', '@regression']}, async ()=>{
     //   test.step("Login into application", async ()=>{
        await loginPage.validLogin(process.env.EMAIL, process.env.PASSWORD)
      //  })
        test.step("Assertion for successful login", async ()=>{
        await expect(dashboardPage.homePageIdentifier).toBeVisible()
        })
    })

    test("Invalid Login Test",{tag: '@regression'}, async ()=>{
     //   test.slow()
        // Failing due to bug JIRA - 123
        await loginPage.invalidLogin(process.env.EMAIL, process.env.INCORRECT_PASSWORD)
        await expect(loginPage.errorMessage).toContainText("Incorrect email or password.", {timeout : 10000})
    })
})