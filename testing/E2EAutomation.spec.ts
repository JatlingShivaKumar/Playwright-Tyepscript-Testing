// Login into application
// Search for product and add to the cart
// Proced to the Checkout
// Fill all the mandetory elements on the Payment page
// Select the country for the order on the payment page
// Capture the orderID that if generates after placing the order
// Vailidate if the orderId is available in the order History Table


import{test, expect} from '@playwright/test'

    let userName = "jatlingkumar@gmail.com"
    let password = "Jatling@123"
    let productName = "iphone 13 pro"
    let countryName = "Singapore"


test("E2E automation testing", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")
    await page.getByPlaceholder("email@example.com").fill(userName)
    await page.getByPlaceholder("enter your passsword").fill(password)
    await page.getByRole('button', {name: 'Login'}).click()
    await expect(page.locator(".fa-sign-out")).toBeVisible()
    //await page.pause()
    // get the count of total number of products
    const products = page.locator("div.card-body")

    // count() - Return us the total number of element matching with the locator
    // waitFor() - waiting for an element on the web page    
    await products.last().waitFor()
    const countOfProduct = await products.count() // 3 // [0,1,2]
    
    for(let i=0; i<countOfProduct; i++){
        const productText = await products.nth(i).locator("h5").textContent() // div.card-body h5
        if(productText === productName){
            await products.nth(i).locator("button").last().click()
            break
        }
    }

    await expect(page.locator("#toast-container")).toHaveText("Product Added To Cart")

    await page.locator("[routerlink = '/dashboard/cart']").click()
    await expect(page.locator("div.cartSection h3")).toHaveText(productName)
    await page.getByRole('button',{ name: 'Checkout'}).click()

    await expect(page.locator(".user__name input").first()).toHaveValue(userName)
    // pressSequentially() - 
    await page.locator(".user__name input").last().pressSequentially("in")

    const ddResult = page.locator("section.ta-results button")
    await ddResult.first().waitFor()
    const countOfDDValue =  await ddResult.count()
    for(let i = 0; i<countOfDDValue; i++){
       const countryValue =  await ddResult.nth(i).innerText() // textContent() or innerText()
        if(countryValue.trim() === countryName){
            await ddResult.nth(i).click()
            break 
        }
    }
    // await page.pause()
   await page.getByText('Place Order').click()
   await expect(page.locator("h1.hero-primary")).toContainText("Thankyou")
   const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
   console.log(orderID)

   // table tag - development of a table
   // thead - table header
   // tbody - table body
   // tr - table row "<->"
   // td - table definition - colum "|"

   await page.locator("[routerlink='/dashboard/myorders']").first().click()
   await expect(page.locator("tbody")).toBeVisible()
   
   const rows = page.locator("tbody tr")
   const rowCount = await rows.count()

   let orderText
   for(let i=0; i<rowCount; i++){
        orderText = await rows.nth(i).locator("th").textContent()
        if(orderID?.includes(orderText)){
            await expect(rows.nth(i).locator("td").nth(1)).toHaveText(productName)
            await rows.nth(i).locator("button").first().click()
            break
        }
   }
     await expect(page.locator("div.col-text")).toHaveText(orderText)
})

/********************************************************************************/

test("E2E automation testing filter on locator", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")
    await page.getByPlaceholder("email@example.com").fill(userName)
    await page.getByPlaceholder("enter your passsword").fill(password)
    await page.getByRole('button', {name: 'Login'}).click()
    await expect(page.locator(".fa-sign-out")).toBeVisible()
    //await page.pause()
    // get the count of total number of products
    const products = page.locator("div.card-body")

    // count() - Return us the total number of element matching with the locator
    // waitFor() - waiting for an element on the web page    
    await products.last().waitFor()
    // const countOfProduct = await products.count() // 3 // [0,1,2]

    await products.filter({hasText:`${productName}`}).locator("button").last().click()
    
    // for(let i=0; i<countOfProduct; i++){
    //     const productText = await products.nth(i).locator("h5").textContent() // div.card-body h5
    //     if(productText === productName){
    //         await products.nth(i).locator("button").last().click()
    //         break
    //     }
    // }

    await expect(page.locator("#toast-container")).toHaveText("Product Added To Cart")

    await page.locator("[routerlink = '/dashboard/cart']").click()
    await expect(page.locator("div.cartSection h3")).toHaveText(productName)
    await page.getByRole('button',{ name: 'Checkout'}).click()

    await expect(page.locator(".user__name input").first()).toHaveValue(userName)
    // pressSequentially() - 
    await page.locator(".user__name input").last().pressSequentially("in")

    const ddResult = page.locator("section.ta-results button")
    await ddResult.first().waitFor()
    const countOfDDValue =  await ddResult.count()
    for(let i = 0; i<countOfDDValue; i++){
       const countryValue =  await ddResult.nth(i).innerText() // textContent() or innerText()
        if(countryValue.trim() === countryName){
            await ddResult.nth(i).click()
            break 
        }
    }
    // await page.pause()
   await page.getByText('Place Order').click()
   await expect(page.locator("h1.hero-primary")).toContainText("Thankyou")
   const order = await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
   const orderID =order?.replaceAll("|", "")
   console.log(orderID)


   // table tag - development of a table
   // thead - table header
   // tbody - table body
   // tr - table row "<->"
   // td - table definition - colum "|"

   await page.locator("[routerlink='/dashboard/myorders']").first().click()
   await expect(page.locator("tbody")).toBeVisible()
   
   const rows = page.locator("tbody tr")
//    const rowCount = await rows.count()


   await rows.filter({hasText: `${orderID}`}).locator("button").first().click()

//    let orderText
//    for(let i=0; i<rowCount; i++){
//         orderText = await rows.nth(i).locator("th").textContent()
//         if(orderID?.includes(orderText)){
//             await expect(rows.nth(i).locator("td").nth(1)).toHaveText(productName)
//             await rows.nth(i).locator("button").first().click()
//             break
//         }
//    }
     await expect(page.locator("div.col-text")).toHaveText(orderID!)
})