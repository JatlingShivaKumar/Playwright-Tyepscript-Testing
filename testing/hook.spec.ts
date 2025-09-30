// hooks- It is a special type of function which perform some pre/post-conditions for the test execution

// 1. test.beforeAll() - It will be executed once before executing any of the test cases
// 2. test.beforeEach() - It will run once before runing each and every test cases
// 3. test()
// 4. test.afterEach() - It will run once after running each and every test cases
// 5. test.afterAll() - It will be executed once before executing all of the test cases

import{test} from '@playwright/test'

test.beforeAll(async ()=>{
console.log("Before All")
})

test.beforeEach(async ()=>{
console.log("Before Each")
})

test.afterAll(async ()=>{
console.log("After All")
})

test.afterEach(async ()=>{
console.log("After Each")
})


test("Test1", async ()=>{
    console.log("Test1")
})

test("Test2", async ()=>{
    console.log("Test2")
})

test("Test3", async ()=>{
    console.log("Test3")
})

