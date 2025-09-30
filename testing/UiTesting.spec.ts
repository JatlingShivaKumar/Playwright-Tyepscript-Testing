import {test, expect} from '@playwright/test'
import { link } from 'fs'
import { title } from 'process'

// Launch the url - goto("url")

    // Goto the url
    // fill the username 
    // fill the password
    // click on login button
    // const context = await browser.newContext()
    // const driver = await context.newPage()

    // 2 Ways in which you can write the locator in Playwright
        // 1. When you are using css selector or xpath we have to write the locator by using page.locator("input#username")
        // 2. By using playwright built in getBy locators - page.label("value of the label")
    // locator() - which help us in identifying the elemnt on the webpage by using selector
    // fill("value") - enter the value inside the textbox


test ('Automation Exercise', async ({ page }) =>{
    await page.goto("https://www.automationexercise.com/")
    await page.getByRole('link', { name: ' Products'}).click()
    await page.locator('//a[normalize-space()="Women"]').click()
    await page.locator("a[href='/category_products/1']").click()
    await page.waitForTimeout(1000)
})


test('Login Functoinalty', async ({page}) =>{
    await page.goto("https://www.automationexercise.com/")
    await page.getByRole('link', {name: 'Signup / Login'} ).click()
    await page.locator("input[placeholder='Name']").fill("shiva")
    // await expect(page.locator("input[placeholder='Name']")).toHaveValue("jatling")
    await page.locator("//input[@data-qa='signup-email']").fill("shiva007@gmail.com")
    // await expect(page.locator("//input[@data-qa='signup-email']")).toHaveValue("shiva@gmail.com")
    await page.getByRole('button', {name: 'Signup'}).click()
    await page.locator("input#id_gender1").click()
    await page.locator("input#password").fill("123456")
    await page.locator("#days").selectOption('15')
    await page.locator('#months').selectOption('6')
    await page.locator('#years').selectOption('1998')
    await page.locator("input#newsletter").click()
    await page.waitForTimeout(4000)
})


test('Browser Fixture - Shadow DOM input', async ({ browser }) => {
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto('https://books-pwakit.appspot.com/')


})


test('Handling radio button and checkbox', async ({page}) => {
   await page.goto('https://testautomationpractice.blogspot.com/')
   // click() - Click on an element
   // check() - Check the redio button or checkbox
   const radioButton = page .getByRole('radio', {name: 'Female'})
   await radioButton.click()
   // toBeChecked() - Assertion to check whether the radio button or checkbox is checked or not
    await expect(radioButton).toBeChecked()

   await page.getByRole('checkbox', {name: 'friday'}).check()
   await expect(page.getByRole('checkbox', {name: 'friday'})).toBeChecked()
  //  await page.waitForTimeout(4000)
  
  // Uncheck() - Uncheck to checkbox
  await page.getByRole('checkbox', {name: 'friday'}).click()
   await expect(page.getByRole('checkbox', {name: 'friday'})).not.toBeChecked()
})





































 /* // Step 1: Access <book-app>
  const bookAppHandle = await page.locator('book-app').elementHandle();
  const bookAppShadow = await bookAppHandle.evaluateHandle(el => el.shadowRoot);

  // Step 2: Access <app-toolbar> inside book-app's shadow root
  const appToolbarHandle = await bookAppShadow.evaluateHandle(
    shadow => shadow.querySelector('app-header app-toolbar').shadowRoot
  );

  // Step 3: Access <book-input-decorator> inside app-toolbar's shadow root
  const decoratorShadow = await appToolbarHandle.evaluateHandle(
    toolbarShadow => toolbarShadow.querySelector('book-input-decorator').shadowRoot
  );

  // Step 4: Access the <input> inside book-input-decorator's shadow root
  const inputHandle = await decoratorShadow.evaluateHandle(
    decShadow => decShadow.querySelector('#input')
  );

  // Step 5: Type and submit
  await inputHandle.type('Shiva Purana');
  await inputHandle.press('Enter');

  // Optional wait to observe results
  await page.waitForTimeout(2000);*/