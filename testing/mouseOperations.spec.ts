// click
// double click
// right click
// mouse over
// scroll down/up
// drag and drop

import {test, expect} from '@playwright/test'
import { waitForDebugger } from 'inspector'

test("double click and right click operations", async ({page}) => {
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    // Double click - dbclick()
    await page.getByText("Double-Click Me To See Alert").dblclick()
    await page.waitForTimeout(4000)
    // Right click -  click({button: 'right''})
    await page.getByText("right click me").click({button: 'right'})
    await page.getByText("Copy", {exact: true}).click()
})

test.only("Mouse Over On An Element", async ({page})=>{
    await page.goto("https://www.spicejet.com/")
    //Mouse over on an element - hover()
    await page.getByText("SpiceClub", {exact: true}).first().hover()
    await expect(page.getByTestId("test-id-Earn Points")).toBeVisible()
    await expect(page.getByTestId("test-id-Earn Points")).toHaveText("Earn Points")
})

test("Scroll down on the page", async ({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/")
// await page.getByText("Download Files").first().click()
   await page.getByText("Download Files").first().scrollIntoViewIfNeeded()
   await page.getByText("Download Files").first().click()
   await expect(page.url()).toContain("Download Files")
   await expect (page).toHaveURL("https://testautomationpractice.blogspot.com/p/download-files_25.html")
})


test("Drag and drop handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
     
    const sourceElement = page.locator("div#draggable")
    const targetElement = page.locator("div#droppable")

    //dragTo(Locator) - Drag the soure element to the target element
    await sourceElement.dragTo(targetElement)
    await page.waitForTimeout(4000)
})


test("Drag and drop  custom handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
     
    const sourceElement = page.locator("div#draggable")
    const targetElement = page.locator("div#droppable")

    await sourceElement.hover()
    await page.mouse.down()
    await targetElement.hover()
    await page.mouse.up()
    // await page.keyboard.press('down')
    // await page.keyboard.press('up')
    await expect(page.getByText("Dropped!")).toBeVisible()
   
    await page.waitForTimeout(3000)
})