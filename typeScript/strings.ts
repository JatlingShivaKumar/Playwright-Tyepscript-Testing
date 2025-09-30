// 1. string - Combination of characters - Hello
// Syntax:
// Keyword(var/let/const) variableName : datatype(Optional) = value -Ts
// Keyword(var/let/const) variableName = vale- JS

import { Agent } from "http"

/*
1. StringQuote ('') -String Literal
2. DoubleQuote ("") - String Literal
3. BackTick (``) - Template Literal
*/

let singlequote = 'This is a string'
let DoubleQuote = "this is a double quote string"
let str2 = `c`

// BackTick (``) way of declaration of string:
// 1. When you declear a string in multiple line
// 2. When you want to call a variable inside a string

let multiline = `This 
is a 
multiple line
string`

 let age = 20

 //$(variableName)

 let message = `You ara of age ${age}`
 console.log(message)
 console.log("***************")

 // 1. length - Return the number of characters that are available in a string
 // Syntax:
 // stringName.length

 let str = "Hello world"
 console.log(str.length)

 // 2. charAt(index) - It return the character at specified index 
 // Syntax:
 // stringName.charAt(index)
 console.log(str.charAt(0))

 // String Hello - Hel1201

 // 3. concat(str, str2) - Combine 2 or more strings and return us a new string

 // 4. includes(seachString, position)
 // It retrun true if the string contains the specified value, otherwise false.
 // Syntax: 
 // stringName.includes(searchString, position)
    let str1 = "This is a string vlaue"
    console.log(str.includes("value"))

// 5. startsWith(searchString, position) - Check of a string startsWith the specified string or not
// Syntax:
console.log(str1.startsWith("T"))
console.log(str1.startsWith("value"))    

// 6. endsWith(searchString, position?) - check if a string endWith the specified string or not.
 // Syntax: 
 // stringName.includes(searchString, position)
 console.log(str1.endsWith("string"))

 // 7. indexOf(char or string)
 // It return the index of the first accureence of the specified value in the string.

 // 8. lastIndexOf(char of strignName)
  // It return the index of the first accureence of the specified value in the string.

 // 9. slice(startIndex, endIndex) - Return the portion of an string
// Syntax:
// stringName.slice(startIndex, endIndex) 
// startIndex - The position where you want to start the slice
// endIndex(Exclusive) [endIndex-1] - The positon where you want to end the slice

console.log(str1.slice())
console.log(str1.slice(2, 10))
console.log(str1.slice(11, 2))

// Difference between slice and substring method

 // 10. substring(startIndex, EndIndex?)
 // It return a subest of characters from the string, between two specified indices.
 // Syntax:
// stringName.slice(startIndex, endIndex) 
// startIndex - The position where you want to start the substring
// endIndex(Exclusive)  The positon where you want to end the substring

console.log(str1.substring(2,11))
console.log(str1.substring(11, 2))

// 11. tolowerCase() - Converts all the chracters to a lower case characters
// Syntax:
// stringName.tolowerCase()
let str3 = "This is  A String"
console.log(str3.toLocaleLowerCase()) 

// 12. toUpperCase() - converts all the chracters to a upper case charaters 
// Syntax:
// stringName.toUpperCase()
console.log(str3.toUpperCase())

// 13. jpn(str, str2) - Joins all the string and return us a new string 
// Synatx:
// stringName.join(str, str1)
let str4 = ["Hello", "world", "This", "Is", "A"]
console.log(str4.join("_"))

// 14. trim() - Removes the white space from beginning and the end of a string
// Syntax 
// stringName.trim()
 let str5 = "  This is a string   "
 console.log(str5.length)
 console.log(str5.trim().length)

 // 15. trimStart() - Removes the white space from the beginning of a string
// Syntax 
// stringName.trimStart() 
   let str7 =  "  This is a string   "
   console.log(str7.trimStart().length)

// 16. trinEnd() - Removes the white spce from the end of a string
// Syntax 
// stringName.trimEnd() 
   console.log(str7.trimEnd().length)

// 17. split() - It will also retun the portion of a string
// Syntax
// stringName.split(separator)
    let str8 = "Hello, world, this, is, a, string"
   console.log(str8.split(",")[1])

 // 18. replaceAll()
 console.log(str8.replaceAll(","," " ))  

 // JSON - Object
 // Framework - class

 // Playwright - To setup the playwright -

 const orderID = "| 444841321548946545311213 |"
 console.log(orderID.replaceAll("|", "").trim())