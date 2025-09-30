import {test, expect} from '@playwright/test'

test("Get The Text value of an element", async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //textContent() - Get The value of an element
    const textValue = await page.locator("#header-inner h1.title").textContent()
    console.log("first value: ", textValue)
    // await expect(textValue).toBe("Automation Testing Practice")
    await expect(textValue).toContain("Automation Testing Practice")

    // await expect(page.locator("Automation Testing Practice")).toHaveText("Automation Testing Practice")
})


test ("Get the text value of all the matching elements", async ({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/")
   const textValue = await page.locator("h2.title").textContent()
   // h2.title - one element, first() - element, allTextContents() - all elements
   // first() - Get The first matching on the webpage
   // last() - Get the last matching element on the webpage
   // nth(index) - Get the indexd matching element on the webpage, Index start with 0
   console.log("Test Value: ", textValue)
})



