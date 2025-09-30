// Shadow dom - 

import {test, expect} from '@playwright/test'

test("Shadow dom handling", async ({page})=>{
    await page.goto("https://books-pwakit.appspot.com/")
    await page.locator("#input").fill("shiva")
    await page.locator("div.icon").click()
    await expect(page.locator("h2.title").first()).toContainText("Shiva's Own Story")
})