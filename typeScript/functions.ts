// Functions 

//Maintainence, Duplication and introuced a feature as reusability
//function login(usename, password){ //Argument
//fill the username
//fill the password
//click on login button
//return
//}

//login(username, password) //Parameter

// 1. Named function - Function Declearation
// 2. Anonymous fuction - (Unnamed function) - function Expression
// 3. Arrow function (=>)
// 4. Function constructor new Function () - class Object
// 5. IIFE - Immediately Invoked Fucntion Epreession
// 6. Factory Functions - A function which returns as object. object -{key: vlaue}

// 1. Named function - Function Declearation
//Syntax:
/*
function functionName(arguments): return datatype{
     //body
     return(optional) - if a function is returning some value
}
    functionName(parameter) 
 */


// Addition of 2 numbers
function add(a: number, b: number) //a,b - Arguments
{
    console.log(a+b)
}
add(12,34) //12, 34  is Parameter

function add1(a: number,b: number) :number //a,b - Arguments
{
    return a+b
}
const result = add1(20,34) 
console.log(result)//12, 34  is Parameter

//Expression
//let i = function()


// 2. Anonymous Function - Unnamed Function - Function Expressions - call back function
//Syntax:
/*
   const variable = function(arguments): return datatype
   { 
     //code
   }

  variable()

 */
const info = function(name: string) : string{
   // console.log("Your name is", name)
   return("Your name is " + name)
}

const resultInfo = info("john")
console.log(resultInfo)

// 3. Arrow function => - It has introduced to shorten the code. It is also used for callback and hava
//Syntax:
/*
 const arrow = (argument) :return datatype =>{
 }
 arrow(parament)
 */

// 1. When you are trying to write a single line of code inside the fucntion{..},we do not even require to use return keyword. Implicitly return the value.
// 2. If you have as single line of code inside the function you do not even have to define the {}


const arrow = (name1:string) =>{
    console.log("Your name is", name1)    
 }
 arrow("Joe")

 //const arrow1 =(name1:string) => console.log("You are name is", +name1) single line code
 //arrow1("shiva")
const arrow1 = (name1:string) => ("You are name is " +name1)
 const arrow1Fun = arrow1("Rahul")
 console.log(arrow1Fun);



 // 4. IIFE - Immediately Invoked Function expression 
 // IIFE is a function which is invoded immeditely after is is defined. It is used to declare a function which is invoked immediately

 //Syntax:
 /*
 (function(arguments){
   //code
 })
 */

 (function(name){
      console.log("This is IIFE function", name)
 })
 //console.log("******");
("Rahul")

//Default parameter - TS/JS Next class
//Optional Parameter - TS

//Default parameter is a parameter which has a defaul value assigned to it if the value is not provided while calling the function, it will take the default value

function addition(a=10,b: number,c=90){
console.log(a+b+c)
}
addition(10,40)
addition(10,40,55)


// Method Overloadin - It is process in which we can define multiple functions with same name but different prarametters
// Method Overloading in JS?TS is not possible. It can be achieved through default parameter in JS and default and optional parameter in Typescript.

//Optional Parameter - ?
//Optional parameter is a parameter which is not mandatory to be passed while calling the function. If the value is not provided while calling the function, It will take the default value or undefined.

function addtion2(a: number,b: number,c?: number | undefined){
  if(c !== undefined)
  console.log(a+b+c)
else{
  console.log(a+b)
}
}
addtion2(20,30)// NaN - Not a Number
addtion2(20,30,45)

