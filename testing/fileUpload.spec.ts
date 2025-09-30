import {test, expect} from '@playwright/test'
import path from 'path'

test("Single File Upload", async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    // setInputFiles() - upload file or multiple files into <input type=file>.
    // await page.locator("#filesTOUpload").setInputFiles()
    await expect(page.locator("#fileList li")).toContainText("courses")
    await page.waitForTimeout(5000)

}) 

test("Single Filepath Upload", async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
   
   
    const filepath = path.join(__dirname, "../TestData/Courses.txt")
    console.log(filepath) 
    // D:\QEdge Playwright 2025\Project\tests , ../TestData/Courses.txt
    // D:\QEdge Playwright 2025\Project\TestDate\Course.txt

    await page.locator("#fileToUpload").setInputFiles(filepath)
    await expect(page.locator("#fileList li")).toContainText("Courses")

}) 


test("Multiple Filepath Upload", async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
   
   
    const filepath1 = path.join(__dirname, "../TestData/Courses.txt")
    const filepath2 = path.join(__dirname, "../TestData/Cypress.txt")
    await page.locator("#fileToUpload").setInputFiles([filepath1, filepath2])
    await expect(page.locator("#fileList li").first()).toContainText("Courses")
    await expect(page.locator("#fileList li").last()).toContainText("Cypress")

}) 