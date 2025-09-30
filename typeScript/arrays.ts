//Arrays - [12, 38, 45,8, 18]

// let i = 10
// Index inside an array starts with 0
let array :number[] = [12,30,45,8,18]
// [0:12,2,35,2:5, 3:6] //[index:value]
// let array1 = [12,25,55, "TS" , "JS", true] 
  console.log(array[2])

// There are 2 ways in which we can declear an array
// 1. Using square breakets[] - Array Literal
// 2. Using new keyword - Array Constructor - new Array()

// Constructor Definition
// New Array(element0, element1, ...elementN)
// It is a special type of function which help us in creation of an

// 1. Array Literal - []
// Sytax: 
// let arrayName :datatype[](optional = [value1, value2,....])

let array1 :number[] = [12,3,56,8]
let array2 = ["TS", "java", 45,68,44,26, true, null]

let array3 :any = []
array3[0] = 10
array3[1] = 28
console.log("***************")

// 2. Array Constructor - new
// Syntax:
// let arrayName = new Array(value, vlaue1, value3)

let array4 = new Array<any>(22, true, "TS", "JS", 24979)

console.log(Array.isArray(array4))

let i = 10
console.log(Array.isArray(i))



console.log("****************")


let array5 = [10,20,30, "JS", "TS"] //[0,1,2,3,4]
console.log(array5[0]);
console.log(array5[1]);

console.log("***************")

//Object.property
// lenght - Total number of elements that are available inside an array
//Syntax:
//arrayName.length

console.log(array5.length)

// 1. Traiditional  for loop - Iterates trough the index of an array 

for(let i = 0; i<array5.length; i++){
      console.log(array5[i])
}

console.log("***************")

// 2. For of loop - It iterates through the element of an array

//Syntax:
//for(vaiable declearation of arrayName)
//{....}
//Variable - Will get the value one by one from the array

for (let element of array5){
       console.log(element)
} 

console.log("*******Method of array in JS TS********")

let arr = ["Orange", "Apple", "Test", 10,20,30]
console.log(arr)

// 1. Push(element,element1, .....) - Add the elements to then end of an array
//Syntax:
//arrayName.push(ele, ele1, ele2.....)
arr.push(50, 100, 500, 800)
console.log("push", arr)

console.log("***************")

// 2. pop() - Removes the last element from an array
//Syntax:
//arrayName.pop()
arr.pop()
console.log("pop", arr)

console.log("***************")

//Difference between push() and unshift() Method for interviwe question
//Difference between pop() and shift() Method



// 3. unshift - Add the elements to the beging of an array
//Syntax:
//arrayName.unshift(ele, ele1,ele, ..)
arr.unshift("TS", "JS")
console.log("unshift", arr)
console.log("***************")

// 4. Shift() - Removes the first element from an array
//Syntax:
//arraName.shift()
arr.shift()
console.log("shift", arr)
console.log("***************")

// Difference between splice() and slice()

// 5. splice(startIndex, nameOfElemenntToDelete, ele, ele1,....)
//Syntax:
//arrayName.splice(startIndex, nameOfElemenntToDelete, ele, ele1)
//statIndex - The position where you want to add/delete the element
//numberOfElementToDelete -the number of element that you want to delete from an array at the startIndex
//ele, ele1, ele3,... - THe element that you want to add at startIndex

let arr1 = [10,20,30,40,50,60, "JAVA", 30, 40]

// arr1.splice(2,3, "JS", "TS") // [10,20,"JS", "TS",60,70,80, "JAVA"]
// console.log(arr1)
// console.log("***************")

arr1.splice(2,0, "JS", "TS") // [10,20,"JS", "TS",60,70,80, "JAVA"]
console.log("splice", arr1)

// 6. slice(startIndex, endIndex) - Return the portion of an array
//Syntax:
//arraName.slice(startIndex, endIndex) 
//startIndex - The position where you want to start the slice
//endIndex(Exclusive) [endIndex-1] - The positon where you want to end the slice
// console.log(arr3.splice(2,6)) //[2,3,4,5]

// console.log("***************")

// 7. Index(element) - Return the index of first occurence of an element from an array
// Syntax:
// arrayName.indexOf(element)
console.log(arr1.indexOf(30, 5))

// 8. lastIndexOf(element) - Return the index of last occurance of an element from an array
// Syntax:
console.log(arr1.lastIndexOf(30))

const index = arr1.indexOf(30)
console.log(index)
const index2 = arr1.indexOf(30, index+1)
console.log(index2);
console.log("***************")

// 9. Concat(array1, array2,....) -Concantentes two or more arrays
// Syntax:
// arrayName.concat(arrayName1, arrayName2,....)
    let arr2 = [1, 2, "TS"]
    let arr3 = ["Python", "Java"]
    const arr4 = arr2.concat(arr3)
    console.log(arr4)
    console.log(arr2)
    console.log(arr3)
console.log("***************")

// 10. includes(element) - Return the result in the from of boolean
// Syntax
// arrayName.incules(element)
console.log(arr3.includes("ts"))
console.log("***************")


// foreach(), map(), filter(), reduce()

function greet(fun: { (): void; (): void }){
    fun()
}
greet(()=>{
   console.log("Hello")
})
console.log("***************")


// 11. forEach(function) - This will not return anything
// Syntax:
// arrayName.forEach(function(element,index,arrayName){})
// element - The current element being processed in an array
// index(optional) -The index of the current element being processed in an array
// arrayName(optional) - The array the current element belogs to

let arr5 = [10,20,30,40,50] // [0:10,1:20,2:30,3:40,4:50]

for(let i=0; i<arr5.length; i++){
      console.log(i, arr5[i])
}
console.log("***************")

arr5.forEach(function(value, index){
       console.log(index, value)
})
console.log("***************")

// 12. map(functions) - Creates a new Array with the result of calling the function on every element of an array
// It will return the value as a result similar to the number of element inside an orginal array
// Syntax:
// arrayName.map(functions(element,index,arrayName){})

let price1 = [100,200,300,400,500,600]
// discount = 30% // 100 - 100*30/100=70, // 100-30%=70/100=0.7
 const mapResult = price1.map(function(price){
       return price*0.7
 })
console.log(mapResult)
console.log("***************")

// 13. filter(fun) - Creates a new array with the result of calling the function on every element of an array
// Return the array with the same number or less then as similar to the orginal array
// Synatx
// arrayName.filter(function(element,index,arrayName){})
// element - The current element being processed in an array
// index(optional) - The index of the current element being processed in an array
// arrayName (optinal) - The array the current element belongs to

let sales = [
      {category: 'Fashion', sale: 50000},
      {category: 'Electronis', sale: 300000},
      {category: 'Mobile', sale: 1200000},
      {category: 'Toys', sale: 200000}
]

let priceSale = sales.filter((price)=> price.sale >  100000)
console.log(priceSale)

// let price = {category: 'Fashion', sale: 50000}
// console.log(priceSale)
console.log("***************")

// 14. reduce(fun, initialVlaue(Optinal)) - Reduce the reulst to a single value 
// Syntax:
// arrayName.reduce(function(accumlator, element, index, arrayName){...}, initialValue)

// Accumlator - The accumlator value so far in the array. The accumlated value from the privious iteration.
// element - The current element being processed in an array
// index(optional) - The index of the current element being processed in an array
// arrayName (optinal) - The array the current element belongs to

// let arraySum = [10,20,30,40] // 0+10+20+30+40
// let sum = 0
//     for(let num of arraySum){
//       sum = sum + num // sum = 0+10 = 10+20  =30, sum = 30+30 = 60, sum = 60+40 = 100
//     }
// console.log(sum)
let sales2 = [
      {category: 'Fashion', sale: 50000},
      {category: 'Electronis', sale: 300000},
      {category: 'Mobile', sale: 1200000},
      {category: 'Toys', sale: 200000}
]
 const totalSale = sales.reduce(function(total, price){
      total = total + price.sale
      return total
}, 0)
console.log(totalSale)
    
 let arraySum = [10,20,30,40]
 const total = arraySum.reduce(function(total, price){
      total = total + price
      return total
}, 1)
console.log(total)
console.log("***************")
