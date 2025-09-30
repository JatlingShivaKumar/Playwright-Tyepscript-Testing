//Statements - It allows us to exectue the different block of code{...} basedon different condition


//1. if statement - This will handle validate only the positive secnario
//2. if else statement - Which will handle both positive and negative scenario
//3. if else if statement - Will validate more then one condition
//4. Switch statement - Will validate more then one condition
//5. Ternary Operators - if esle statement

//1. if statement 
// Syntax:

/*
if(condition)
{
  //code - click on the element
}
*/

if(10 > 50)
{
    console.log("First number is greater than second")
}

//2. if else statement
//Syntax:
/*
if(condtion)
{
  //code
}
  else
{
    //code
}
 */

if(10>6)
{
    console.log("First number is greater than second number")
}
else{
    console.log("Second number is greater than first number")
}

// 3. if else if statement 
//It validate multiple seconarios

//Syntax:
/*
if (condition)
{
//code
}
else if(condition)
{
  //code
}
 else if (condition)
 {
  //code
}
  else
{
 //code
}
*/

let browesr = "chrome"

 if(browesr == "chrome")
{
    console.log("You are using chrome browesr") 
}
else if(browesr == "firefox")
{
    console.log("you are suing firefox browesr")
}
else if(browesr = "safari")
{
    console.log("You are using safari browesr")
}
else
{
    console.log("Browesr is Invalid")
}
// When can we use if else if statement
//1.Condition have Range (>90) >80 && 90
//2.Date types are different - name = "john", salary >= 100000
//3.Logical (&&)





// 4. Switch statement - Validate multiple conditions(simple logic)
//Syntx:
/*
swithc(expression) //browesr
{
  case value:
    //code
    break; // Terminate the loop
  case value1:
    //code
    break;
  cose value2
    //code
    break;
  default:
    //code
    break;      
}
*/

let browesrName = "edge"

switch(browesrName) //switch("chrome")
{
    case "chrome":
        console.log("You are using crhom broweser")
        break
    case "firefox":
        console.log("You are using firefox broweser")
        break
    case "safari":
        console.log("Yor are using safari broweser")
        break
    default:
        console.log("Invalid Browser")
        break
}
// Simple comparision which involes a single date type