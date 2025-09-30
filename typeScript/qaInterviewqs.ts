//TS JS Interview Question
// code 1. Remove Duplicate characters from array of element and find the count of an elements using set object

//solution
var arg = [55,44,55,67,67,67,8,8,8,8,8,65,1,2,3,34,5]
var unique =[new Set(arg)]
console.log(unique) //output: [ Set(10) { 55, 44, 67, 8, 65, 1, 2, 3, 34, 5 } ]
console.log(unique.length) //output: 10

console.log("***Question 01 - END*****")

// code 2. Remove Duplicate characters from array of element using filter

//solution
var myArray = ['a', 1, 'a', 2,'1']

var unique1 = myArray.filter((value, index,arr)=>arr.indexOf(value)===index)
console.log(unique1)

console.log("***Question 02 - END*****")

// Code 3. String reverse without reversing of individual words Array of Elements can be reverse with reverse() Method but for string it is won't possible so required to split
// and then Join().

//solution 1
// function removerDuplicates() {
//     var string = "India is my country";
//     let result = [...new Set(string)].join('');
//     return result;
// }
// console.log(removerDuplicates());

//Solution 2
function removerDuplicates() {
    var string = "India is my country";
    let result = string
        .split(" ")                   // Split into words
        .map(word => word.split("").reverse().join("")) // Reverse each word
        .join(" ");                   // Join words back with space
    return result;
}

console.log(removerDuplicates());

console.log("***Question 03 - END*****")

var reverseWords = function(s){
   let res = ""
   let word = ""
      for(let c of s){
        if(c === ''){
            res += word + c
            word = ""
        }else{
            word = c + word
            }
      }
      return res + word
}
console.log(reverseWords("priya bagde"))

console.log("***END*****")

// Code 4. String reverse with reversing of individual words

//solution
function withoutReverse(){
      let string = "My Name is shiva"
      let result = string.split("").reverse().join("")
      return result
}
console.log(withoutReverse())

console.log("***Question 04 - ENDD*****")

// Code 5. String reverse without using in built function
//solution
function Reverse(){
     let string = "My Name is shiva"
     let result = ""
     for(let i = string.length-1; i >=0; i--){
        result = result+ string[i]
     } 
     return result
}
console.log(Reverse())

console.log("***Question 05 - END*****")

//Code 6. Find factorial of user input number

//Not Solve
// const number = parseInt(prompt('Enter a positive integer'))
// if(number < 0) {console.log('The factorial is 1.')}
//    else{
//     let fact = 1
//      for(let i = 1; i <= number; i++){
//           fact *= i
//      }
//    }

// Code 7. Anagram 
//solution

function checkStringsAnagram(){
    let a = "Army"
    let b = "Mary"
     
     let str1 = a.toLowerCase().split("").sort().join("")
     let str2 = b.toLowerCase().split("").sort().join("")
     if(str1 === str2){
        console.log("True")
     }
     else{
        console.log("False")
     }
    }
    checkStringsAnagram()

    console.log("***Question 07 - END*****")

 //Code 8. Swapping of 2 numbers with third variable
//solution
       let a= 50
       let b = 20 
          let c

        c = a // Step 1: Store value of 'a' (50) into 'c'
        a = b // Step 2: Copy value of 'b' (20) into 'a
        b = c  // Step 3: Copy value of 'c' (which was original 'a' i.e., 50) into 'b'

        console.log(a,b,c)
console.log("***Question 08 - END*****")

//Code 9. Swapping of 2 number WITHOUT third variable
//solution

let e = 10
let f = 20
  e = e + f // e = 10 + 20 = 30
  f = e - f // f = 30 - 20 = 10
  e = e - f // e = 30 - 10 = 20
  console.log(e,f)
  console.log("***Question 09 - END*****")

//Code 10. To check the string or number is palindrome or not (ex: 121,madam,anna) using rever method
 //solution

 function checkPalindrome(){
     const string = "anmna"
     /*
     Let's take the string "anmna".

Original string: "anmna"

string.split("")
Converts string to array of characters:
["a", "n", "m", "n", "a"]

.reverse()
Reverses the array:
["a", "n", "m", "n", "a"] (same because it's symmetric)

.join("")
Joins the array back into a string:
"anmna" */
    let ar = string.split("").reverse().join("")
       console.log(ar)
     if(string == ar){
        console.log("Palindrome")
     }
     else{
        console.log("Not Palindrome")
     }  
 }
 checkPalindrome()
console.log("***Question 10 - END*****")

//Code 11. To check the string or number is palindrome or not(ex: 121, madam, anna) using diving length by 2 and then comparing
//Solution

function checkPalindrome1(){
       let string = "12321" // 12345 is not palindrome (ex: ABCDCBA <---->ABCDCBA is parlindrom, & Not palindrome is ABDA ADBA)
       let len = string.length

       for(let i = 0; i<len/2; i++){
        if(string[i]!== string[len-1-i]){
            console.log("Not Palindrome")
            return
        }        
       else
        {
        console.log("Palindrome")           
    }
}
}
checkPalindrome1()
console.log("***Question 11 - END*****")

//Code 12. To find longest word from a string using (for of) /*for(let i=0; i>num; i++) means iterate by indexing*/ /*for(ler word of wrods) means iterate by an elements not
//Solution 1

function longestWord(){
    let string = "supriya is a masooooom good girl"
    let words = string.split(" ")
    let longest = ""

      for(let word of words){
        if(word.length > longest.length){
            longest = word
        }
    }
        return longest
}
console.log(longestWord())
//Solution 2
function longestWord1(){
    let string = "supriya is a hahahahahahahaha good girl"
    let arg = string.split(" ")
    let longest = ""

    for(let i=0; i<arg.length; i++){
        if(arg[i].length > longest.length){
            longest = arg[i]
        }
    }
    return longest
}
console.log(longestWord1())
console.log("***Question-12-END*****")

// Code 13. To finde longest word from a string using functions
//Sulotion
   function findLongestWord(){
       let str = "Priya is a good girl and having hardworking skill"
       let longestWord = str.split(" ").sort((a,b) => {return b.length - a.length})
       console.log(longestWord[0])
       console.log(longestWord[0].length)
   }
   findLongestWord()
   console.log("***Question-13-END*****")

// Code 14. To find longest word from a string using custom code
//Sulotion
 function longgest(){
    let str = "Radhika is a good girl and having hardworking skills"
    let words = str.split(" ")
    let longest = ""
      for(let i = 0; i < reverseWords.length; i++){
        if(words[i].length > longest.length){
             longest = words[i] 
        }
          
      }
       console.log(longest)
       return longest
 }
 longgest()
 console.log("***Question-14-END*****")
//  // Code 15. To find longest common string from array of strings
//      function longestCommonString(){
//         arr = ["Go", "google", "gosh"]
//         let arr = arr.sort()
//         let i = 0
//         while(arr[0].length > 0 && arr[0].charAt(i) ===arr[arr.length - 1].charAt(i)){

//         }
//      }

// Code 16. To find vowels and its count in a given string
//Soultion
function vowelCounts() {
    let vowels = ["a", "i", "e", "o", "u"];
    let str = "RADHIKA";
    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
            console.log(letter)
        }
    }

    console.log(count)
    return count;
}

vowelCounts()
console.log("***Question-16-END*****")

// Code 17. To find character occurance from the string
//SUlotion

function characterOccurance(str,letter){
         let count = 0
         for(let i = 0; i < str.length; i++){
            if(str.charAt(i)===letter){
                count++
            }
         }
         console.log(count)
         return count
}
characterOccurance("Radhika","R")

console.log("***Question-17-END*****")

// Code 18. To find a first pair whose sum is zero
//Sulotion

function getSumPairZero(array){
    for (let number of array){
        for(let i = 1; i<array.length; i++){
            if(number + array[i]===0){
                return [number, array[i]]                
            }
        }
        
    }
}
const result1 = getSumPairZero([-5,-4,-3,-2,-1,0,1,2,3,4,6])
console.log(result1)

//Solution 2
   
function getSumPaiZero2(array){
    for(let j = 0; j<array.length; j++){
        for(let i=1; i<array.length;i++){
            if(array[j] + array[i]===0){
                return [array[j], array[i]]
            }
        }
    }
}
const result = getSumPaiZero2([-5,-4,-3,-2,-1,0,1,2,3,4,5])
console.log(result)
console.log("***Question-18-END*****")


// Code 19. To find a first pair whose sum is zero using indexing firsrtly do a sort here

//Solution
function getSumPairZero3(array){
    let left = 0
    let right = array.length - 1
    while(left < right){
       let sum = array[left] + array[right]
        if(sum === 0){
            return [array[left], array[right]];             
            }else if(sum > 0){
                right --
            }else{
                left ++
            }
        }
    }
let result2 = getSumPairZero3([-5,-4,-3,-2,-1,0,1,2,3,4,5,6,8])
console.log(result2)
console.log("***Question-19-END*****")

// Code 20. To find the largest pair of the 2 elements using indexing with unsorted elements
//Soultion
  function largestPairSumOfTwo(numbers){
     let num = numbers.sort((a,b) => b - a)
     console.log(num)
     return num[0] + num[1]
  }
  let result3 = largestPairSumOfTwo([9,7,8,4,5,6,1,2,3])
  console.log(result3)
console.log("***Question-20-END*****")

// Code 21. To find the index of an element from an array
 let letters=['a','b','c']
 let index = letters.indexOf('b')
 console.log(index)
 console.log("***Question-21-END*****")

 // Code 22. Fibonacci Series (0,1,1,2,3,5,8,12...)
//  function fibonacciSeries(){
//     let number = parseInt(prompt('Enter the number of terms:'))
//     let n1 = 0, n2 = 1, nextTerm
//     let arr = []
//         arr.push(n1)  
//         for(let i=1; i<= number; i++){
//             console.log(n1)
//             nextTerm = n1 + n2
//             n1 = n2
//             n2 = nextTerm
//         }
//          return arr    
//  }
//  console.log(fibonacciSeries)
//  console.log("***Question-22-END*****")

 // Code 23. Fibonacci Series (0,1,1,2,3,5,8,12.....)
  function listFibonacci(n){
    let arr =[0, 1]
    for(let i = 1; i< n; i++){
        arr.push(arr[i] + arr[i - 1]
           
        )
         return arr
    }
  }
  console.log(listFibonacci(4))

  function listFibonacci1(n){
         let arr = [0, 1]
      for(let i = 0; i < n; i++){
        arr.push(arr[i] + arr[i +1]) 
      }  
      return arr
  }
  console.log(listFibonacci1(4))
   console.log("***Question-23-END*****")

   // Code 24. Finding a missing elements in an array and then add with existing elements. (- means if element not found then it will return always -1 as per rule)

function missingElement(){
    let a = [1,2,3]
    let missing = []
    for(let i = 1; i<= 6; i++){
        if(a.indexOf(i) == -1){
            missing.push(i)
        }
    }
    console.log(missing)
    console.log(a.concat(missing).sort())
}
missingElement()
