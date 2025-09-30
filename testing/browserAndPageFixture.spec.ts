import {test, expect} from '@playwright/test'

test("Understanding browser fixture", async function({browser}){

    const context = await browser.newContext() // Created a browser context
    const page = await context.newPage()
})

test("Understanding page fixture", async function({page}){

})