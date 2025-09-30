// LoginPage - 
// Locators related to Login page
// Methods related to login page - validLogin(), invalidLogin(), 

import { Locator, Page } from "@playwright/test"

export class LoginPage {

    // properties
     private page
     private userName : Locator
     private password 
     private loginBtn
     errorMassage
   //   homePageIdentifier

     constructor(page: Page){
        this.page = page
        this.userName = this.page.getByPlaceholder("email@example.com")
        this.password = this.page.locator("#userPassword")
        this.loginBtn = this.page.locator("#login")
        this.errorMassage = this.page.locator("#toast-container")
      //   this.homePageIdentifier = this.page.locator(".fa-sign-out")
     }

// Methods
// Launch the url
   async LaunchUrl(url: string){
    this.page.goto(url)
   }

// Fill the userName , password and click on login

   async vaidLogin(userName: string, password: string){
    await this.userName.fill(userName)
    await this.password.fill(password)
    await this.loginBtn.click()
   }

   async invalidLogin(userName: string, incorrectpassowrd: string){
    await this.userName.fill(userName)
    await this.password.fill(incorrectpassowrd)
    await this.loginBtn.click()
   }
}
