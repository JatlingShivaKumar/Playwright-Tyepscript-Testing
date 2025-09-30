// Calendar Selection

import {test, expect} from '@playwright/test'

test("calendar Handling", async ({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.locator(".ui-datepicker-trigger").click()

    const day = "14"
    const month = "June"
    const year = "2028"
     
    const monthPicker = page.locator(".ui-datepicker-month")
    const yearPicker = page.locator(".ui-datepicker-year")
 

    // while(!((await monthPicker.textContent()== month) && (await yearPicker.textContent()== year))){
    //     await page.getByText("Next").click()
    // }
     
    while((await monthPicker.textContent() !=month) || (await yearPicker.textContent() !=year)){
        await page.getByText("Next").click()
    }


    await page.getByText(day, {exact: true}).last().click()
    await page.waitForTimeout(5000)
    await expect(page.locator("#sixth_date_picker")).toHaveValue(`06/14/2028`)





})


