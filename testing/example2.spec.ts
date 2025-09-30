
import {test, expect} from '@playwright/test'

//const {test, expect} = require('@playwright/test')

// test() - It helps us in declaration of a testcase
// expect() - It helps us in assertion of a testcase/test step

// Test File - That will always go inside the tests folder
// fileName.spec.ts OR fileName.test.ts


test("Validate login with valid credentials", async ({page})=>{

  // page , browser - Fixture - Which helps us in setting up and tear down automatically


  // Launch the browser
  // launch the url 
  // fill the username  - Locators
  // fill the password
  // click the login button
  // Validate if the user is on the home page
})

test("Invalid Login Test", ()=>{})



  // Title - Validate login with valid credentials
  // Launch the browser
  // launch the url 
  // fill the username 
  // fill the password
  // click the login button
  // Validate if the user is on the home page







test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link',   async function({ page }) {
  await page.goto('https://playwright.dev/');
  await console.log("Launch the url");
  await page.getByRole('link', { name: 'Get started' }).click();
  await console.log("Click on the get started");
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await console.log("validated");
});


test("Login into the application", async ()=>{
  // launch the url - Terminated over here in selenium
  // fill the username 
  // fill the password
  // click the login button
})

// Websocket(Playwright) and http (selenium)





// export - import























/*import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});*/
