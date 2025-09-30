// File Download - 

// Step by step process to handle file download

// 1. Launch the url
// 2. We can wait for download event to appear on the page 
// 3. Indetify and Click on the element to downlad the file
// 4. wait for the download to complete 
// 5. use "path" library to create a path of the download folder

import {test, expect} from '@playwright/test'
import path from 'path'

test("File Download Handle", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    await page.locator("#generatePdf").click()
    const downloadResult = page.waitForEvent('download')
    await page.locator("#pdfDownloadLink").click()
    const download = await downloadResult

     const downloadDir = path.join(__dirname, "../download")
// suggeestedFilename() -Returns suggeted filename for this download
     const fileName = await download.suggestedFilename()

     const filPath = await path.join(downloadDir,fileName)
     console.log(filPath)

     await download.saveAs(filPath)
     await expect(filPath).toContain(filPath)
    // await download.saveAs(path.join (downloadDir,fileName))01


    
})