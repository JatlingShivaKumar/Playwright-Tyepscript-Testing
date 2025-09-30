// Operators - Opertors is a Symbol

// 1. Arithmetic Operators
// 2. Comparison Operators
// 3. Logical Operators
// 4. Assignment Operators (=)
// 5. Ternary Operator - Statements


// 1. Arithmetic Operators
     // 1. Addition (+)
     // 2. Subtraction (-)
     // 3. Multiplication (*)
     // 4. Division (/)
     // 5. Modulus (%) - Remainder of a division operation
     // 6. Exponentiation (**)
     // 7. Increment Operator (++)
     // 8. Decrement Operator (--)


let num3 = 20
let num4 = 15
// 1. +
console.log(num3+num4); 

// 2. -
console.log(num3-num4);

// 3. *
console.log(num3*num4);

// 4. (/) - 10/3
console.log(num3/num4);

// 5. (%) - Remainder after the division operation
// 10/3 - 1 
console.log(num3 % num4);

// 6. ** (Exponentiation) - 
// 2**5 = 2^5 = 2*2*2*2*2 = 32
console.log(5 ** 3); // 5^3 = 5*5*5

// 7. Increment (++) - It will increase the value of a variable by 1

let num5 = 10

// pre-increment (++num5) - First the value will be incremented by 1 and then the action will be performed

console.log(++num5);


let num6 = 15

// Post-increment (num5++) - First action will be performed and then the value will be incremented by 1
console.log(num6++);
console.log(num6) // 16


// 8. Decrement Operator (--)   - It will decrease the value of a variable by 1
let num7 = 20

// Pre-decrement (--num7) - First the value will be decremented by 1 and then the action will be performed
console.log(--num7); 

let num8 = 5

// Post-decrement (num8--)  - First action will be performed and then the value will be decremented by 1
console.log(num8--);
console.log(num8) // 4



console.log("**************************");

// 2. Comparision Operator  - Compares the values and return the results in the form of boolean (true or false)
    // 1. == (Equal To)
    // 2. != (Not Equal To)
    // 3. === (Strict Equal To) 
    // 4. !== (Strict Not Equal To)
    // 5. > (Greatet Than)
    // 6. >= (Greater Than Equal)
    // 7. < (Less than)
    // 8. <= (Less than Equal)


   // 1. == - Equal To  - Check if two VALUES are same or not
   let i1 = 10
   let i2 = "10"  
   console.log(i1 == i2); 

   // Type Conversion(Explicit conversion of a datatype into other datatype) and Type Coercion (Implicit conversion of a datatype into other datatype)

   // 2. != - Not Equal to 
   console.log(i2 != i2);

   // 3. === - Strict Equality Operator  - Compares the 2 VALUES are same or not along with the datatype of both of the variable will be compared
   console.log(i3 === i2); 


   // What is the difference between == & ===

   // 4. !== - Strict Not Equality - 
   console.log(i1 !== i2); 

   // 5. > - greater than
   console.log(10 > 18)

   //6. >= - greater than or equal
   console.log(10 >= 100)

   // 7. <  - less than
   console.log(100 <20)

   // 8. <= - less than or equal
   console.log(10 <= 15)


console.log("***********************************")

// 3. Logical Operator - Used to combine multiple conditions to get the final results. The result should always be in the form of boolean (true or false) 
// 1. AND (&&) - Both the conditions should be true to get the result as true
// 2. OR (||) - Either of the conditions should be true to get the result as true
// 3. NOT (!) - It will reverse the result of the condition. If the condition is true it will return us the value as a false and vice versa.

// 1. AND (&&) - 

// true && true - true
// true && false - false
// false && true - false
// false && false - false

console.log("AND (&&)", (10>5) && (23>12))
console.log("AND (&&)", (10>2) && (12>90))
console.log("AND (&&)", (10>20) && (12>6))
console.log("AND (&&)", (10<1) && (10>43))

// 2. OR (||)
// true || true - true
// true || false - true
// false || true - true
// false || false - false

console.log("OR (||)", (10>5) || (23>12))
console.log("OR (||)", (10>2) || (12>90))
console.log("OR (||)", (10>20) || (12>6))
console.log("OR (||)", (10<1) || (10>43))

// 3. NOT (!) - Logical Not - Reverse the result
// !true - false
// !false - true
console.log("NOT (!)", !(10>5))
console.log("NOT (!)", !(10<10))




// 4. Assignment Operator (=) - Assign the value to a variable

let j = 10