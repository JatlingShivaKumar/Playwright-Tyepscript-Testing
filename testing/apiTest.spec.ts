// APIContext - 





import {test, expect, request} from '@playwright/test'

const getURL = "https://reqres.in/api/users?page=2"
const postURL = "https://rahulshettyacademy.com/api/ecom/auth/login"
const postPayload = {userEmail:"jatlingkumar@gmail.com", userPassword:"Jatling@123"}
const putURL = "https://reqres.in/api/users/2"
const putPayload = {
    "name": "John",
    "job": "CEO"
}


test("GET method API automation", async ()=>{
    // APIContext - Which will help us in calling defferent API methods
    const apiContext = await request.newContext()
    const getResponse = await apiContext.get(getURL)
    console.log(await getResponse.json())
    // status() - retrieve the status code from the api  response
    await expect(getResponse.status()).toBe(200)
    const data = await getResponse.json()
    console.log(await data.data[0].email)
    await expect(await data.total_pages).toBe(2)
    await expect(await data.data[0].email).toContain("michael")
})

// const obj = {key: "value"}
// console.log(obj.key)

test("POST method API automation", async ()=>{
    const apiContext = await request.newContext()
    const postResponse = await apiContext.post(postURL,
        { 
            data:postPayload
        }
    )
    expect(await postResponse.status()).toBe(200)
    const postData = await postResponse.json()
    // console.log(postData)
    expect(await postData.message).toContain("Login Successfully")
    const token = await postData.token
    console.log(token)

})

test("PUT method API automation", async ()=>{
    const apiContext = await request.newContext()
    const putResponse = await apiContext.put(putURL,
        {
            data: putPayload,
            headers:{
                "x-api-key": "reqres-free-v1"
            }
        }
    )
   expect(putResponse.status()).toBe(200)
   const putData = await putResponse.json()
   expect(await putData.name).toContain("John")
   expect(await putData.job).toContain("CEO")  

})

// class - 
// objects - 