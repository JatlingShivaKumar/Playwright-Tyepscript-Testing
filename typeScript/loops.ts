// Loops - Which will execcute the same block of code {..} multiple time  

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

console.log("*****************")

//++ == Increse the value by 1
//--== Decrese the value by 1




//1. for loop
     //A. for loop - Traditional for loop -When we know that how many time we have to run the iteration
     //B. for...in loop  -Loop thorugh object preperties - {Key : value} - object
     //C. for...of loop - Loop thorugh arrays, string - Array - [1, 2, 3, 4,]
//2. while loop - if we do not know how many times we have to run the iteration -
//3. do-while loop -if we want to execute the loop atleast one time before checking the condition

// 1. for loop - Traditional loop
//Syntax:

/*
for(initialization; condition; increment/decrement)
{
   //code
   break;
}
 initialization - Initliase the value of a variable to start the execution.
  let i = 1  

  condition  - Condition to check whether the loop should continue or not.
   Ex:- i < 6 

   increment/decrement - Increment or decrement the value of the variable after each iteation.
 */

   //to print 1 to 5
for(let i = 1; i<6 ; i++){
    console.log(i)
    if(i==3){
        break
    }
}

console.log("***")
// 2. while loop
//Syntax:

/*
//initialization
while(condition)
{
 //code
 increment/decrement
}

*/

let j = 1

while(j <6){
    console.log(j)
    if (j==4){
        break
    }
    j++

}
console.log("********")
// 3. do....while loop
// Syntax:
/*
initialization
do{
  //code
}
  while(condition)
*/

  //10....1
  let l = 10
do{
    console.log(l)//10
    l--
}
while(l>=1)// 10<1     l<=1, >=1, <10





