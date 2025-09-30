// Frame - A web application integrated inside another web application
// Step by step process to hanlde frames
// 1. Launch the url = page.goto() - page will have a visibility only on the launched page
// 2. Perform the action on the mai page 
// 3. Indentify the frame available on the page - Loactor to indetify the iframe tag const framePage = page.frameLoactor("")
// 4. Perform the action on the frames we can use "framePage"
// 5. Come back to the main page by using "page" fixture


import {test, expect} from '@playwright/test'
import { execPath } from 'process'

test('Frames handling', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await expect(page.getByPlaceholder("Hide/Show Example")).toBeVisible()
    await page.locator('#hide-textbox').click()
    await expect(page.getByPlaceholder("Hide/Show Example")).toBeHidden()
    
    const framePage = page.frameLocator("#courses-iframe")
    await framePage.getByText("All Access plan").first().click()
    await expect(framePage.locator("div.inner-box h1")).toContainText("Subscription")

    await page.getByRole('button', {name: 'Home'}).click()

})


test('Nested Frames handling', async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")   
    await page.getByText('Iframe with in an Iframe').click()
    
    
    const outerFrame = page.frameLocator("#Multiple iframe")
    const innerFrame = outerFrame.frameLocator("div.iframe-container iframe")
    await innerFrame.locator("[type='text']").fill("Inner Frames")
    await expect(innerFrame.locator("[type='text']")).toHaveValue("Inner Frames")
    

    await page.getByText("Single Iframe").click()

})