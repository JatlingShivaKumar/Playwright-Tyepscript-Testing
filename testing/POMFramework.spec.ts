// Framework - It is a design principle. Set of Guildlines.

 function login(){
  // fill the username
  // fill the password 
  // click on the login button
 }


// Duplication - 100TCs - 300 lines of code - 195 line of codes
// Maintenance - 100 - all the test cases - 99 steps for the maintenence
// Readability /  Organisation 

// 1. Reusability
// 2. Less duplication
// 3. Less maintenence
// 4. Organise the code - Seperate the logic into different layers.

// POM - Page Object Model

// Page Object Model is a design pattern used in the software testing to represent a web page as an Object. It is a way to organise and manage the interaction with a web page by creating the properties(varaibles) and methods (actions) of that particular page.

// This approach helps in reducing the code duplication, improve test maintanbility and enhancing readability by encapsulating the page-specific logic within a dedicated class or module.


// POM framework from Scratch

// There are different layers that we have to create:

// 1. PAGE LAYER - will create a packages or folder (pages) - // Locators and method related to specific page.
// LoginPage.ts, DashboardPage.ts, CartPage.ts ,...

// 2. TEST LAYER - will create a tests package or folder. - Pure test cases and the assertion. We will call the locators and methods inside the Test Layer from Page Layer.
// LoginPageTest.spec.ts, DashboardPageTest.spec.ts

// 3. DATA LAYER - JSON/EXCEL - TestData.json, TestData.xlsx

// 4. CONFIGURATION LAYER - playwright.config.ts - Global configuration

// 5. UTILS LAYER - We will create a util folder - Custom function, screenshot(), scrollDown(), get the data from excel, API method

// 6. REPORT LAYER - HTML/Allure - We do not create it seperately.