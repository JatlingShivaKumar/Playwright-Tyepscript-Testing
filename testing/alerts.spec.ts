// alert or popup - dialog event 
// Multiple tabs/windows - popup event
// File downlod - download event

// Step by step process:
// 1. Launch the Url
// 2. We have to  wait for "dialog" event to appear on the page and wtite the logic to handle the scenarios.
// 3. Identify and click on the element/button which is responsible for generation of "dialog" event.
import {test, expect} from '@playwright/test'

test ("Alert Handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // page.on(event, evenHandler - callBack function)
    // page.waitForEvent(event, eventHandler)
    
    // Dialog - class inside playwright
    // accept(text?) -ok
    // aismiss() - cancel
    // message() - Get the text value that ist displayed on the alert
    // type() - Check the type of the alert
    // defaultValue() - It will work only for prompt alert to get the default avlue if it has inside the textbox

     
     page.on('dialog', (dialog)=>{
        console.log(dialog.message())
        dialog.accept("Test") 
    })
    await page.locator("#alertBtn").click()
})

test ("Comfirm Alert Handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    
     page.on('dialog', (dialog)=>{
        console.log(dialog.type())
        console.log(dialog.message())
        dialog.accept() 
        // dialog.dismiss() 
    })
    await page.locator("#confirmBtn").click()
    await expect(page.locator("#demo")).toHaveText("You pressed Cancel!")
})


test ("Promt Alert Handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const text = "Testing"
    
     page.on('dialog', (dialog)=>{
        console.log(dialog.type())
        console.log(dialog.message())
        console.log(dialog.defaultValue())
        dialog.accept(text) 
        // dialog.dismiss()
    })
    await page.locator("#promptBtn").click()
    // await expect(page.locator("#demo")).toContainText(`Hello ${text}!`)
    await expect(page.locator("#demo")).toContainText(`Hello Testing!`)
})