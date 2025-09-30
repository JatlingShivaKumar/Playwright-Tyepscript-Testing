//Dateypes - What type od date a variable is storing

// 2 diffrenct types of datatypes in TS

//1. Primitive date type - single value
  //1. number
  //2. sting
  //3. boolean
  //4. null
  //5. undefined
  //6. any
  //7. union
  //8. void - functions


//1.number -Represents numeric value, both integers(90, -45)and floating-point number (345.56897, 38.2)

let num :number = 10 //know as type annotation
let num1 = 3897.4356 //type inference

//2. string- Combination of chractets - Hello, String

//1. single Quotes -'Hello'
//2. doouble QUotes - "Hello"
//3. backticks - `Hello` -
let str = 'john'

//3. Boolean - Represents ture or false values
let isTrue: boolean = true
let isFalse: false
    
//4. Null - Represents the absence of value , it is a special value
let emptyValue = null //Interntional absence

//5. Undefined - Represents a variable that has been declared but not assigned a value

let notAssigned //= 90      //Unintentionally absence
console.log(notAssigned)

notAssigned = "ts"


//6. any - Represents any type of value, it can be used when you are not sure about the type of value variable will hold

let anyValue :any = 10
anyValue = "ts"
anyValue = true
anyValue = null
anyValue = undefined


// 7. union - a variable which can store more than on type of values

let union :(number | string | boolean) = 10
union = "ts"
//union = false



//2. Non-Primitive data type - multiple values
  //1.array
  //2.object
  //3.functions



//statements - condition
//if statement
//if else statments
//if else if else statement
//switch statement
//terniary Operators
