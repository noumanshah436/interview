// function findMaxNumber(arr) {

//     return Math.max(...arr);
// } 

// console.log(findMaxNumber([1,2,3,4,5,5]))

// ***********************************************************

// function isPalindrome(str) {
//     return str === str.split('').reverse().join('');
// }


// ***********************************************************

// function factorial(number) {

//     if (number === 0 || number === 1) {

//         return 1;

//     } else {

//         return number * factorial(number – 1);

//     }

// }

// ***********************************************************

// Prime numbers are natural numbers greater than 1 that have no positive divisors other than 1 and themselves. In other words, a prime number is only divisible by 1 and itself without leaving a remainder. Some examples of prime numbers are:
// 2 (the only even prime number) 3 5 7 11 13 17 19 23 29

// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// } 

// ***********************************************************

// function findLargestElement(nestedArray) {

//     let largest = nestedArray[0][0];

//     for (let arr of nestedArray) {

//         for (let num of arr) {

//             if (num > largest) {

//                 largest = num;

//             }

//         }

//     }

//     return largest;

// }


// console.log(findLargestElement([[1, 2, 13], [10, 12]]))

// ***********************************************************

// The Fibonacci series (or Fibonacci sequence) is a sequence of numbers where each number is the sum of the two preceding ones, 
// usually starting with 0 and 1. The sequence goes as follows:

// 0,1,1,2,3,5,8,13,21,34,…

// The formula for generating the Fibonacci sequence is:
 
// F(n)=F(n−1)+F(n−2)

// function fibonacciSequence(numTerms) {

//     if (numTerms <= 0) return [];

//     if (numTerms === 1) return [0];

//     let sequence = [0, 1];

//     while (sequence.length < numTerms) {

//         let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];

//         sequence.push(nextNumber);

//     }

//     return sequence;

// } 

// ***********************************************************

// Implement a debounce function in JavaScript that limits the frequency of a function’s execution when it’s called repeatedly within a specified time frame. 

// function debounce(func, delay) { 

//     let timer; 

//     return function() { 
//         clearTimeout(timer); 

//         timer = setTimeout(func, delay); 
//     }; 
// } 

// ***********************************************************

// Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order. 

// Sol:
// The comparator function (a, b) => a[key] - b[key] is used to compare the values of the specified key in two objects.
// If a[key] is less than b[key], the result is negative, meaning a should come before b.
// If a[key] is greater than b[key], the result is positive, meaning a should come after b.
// If a[key] is equal to b[key], the result is zero, meaning their order doesn't change.


// function sortByKey(arr, key) { 
//     return arr.sort((a, b) => a[key] - b[key]); 
// }

// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 20 }
// ];

// const sortedByAge = sortByKey(people, 'age');

// console.log(sortedByAge);


// ***********************************************************

// function deepClone(obj) { 
//     return JSON.parse(JSON.stringify(obj)); 
// }

// ***********************************************************

// Write a recursive function to calculate the factorial of a given number. 

// function factorial(num) { 

//     if (num <= 1) return 1; 
  
//     return num * factorial(num – 1); 
  
// } 



// ***********************************************************

// Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions. 


// function mergeSortedArrays(arr1, arr2) { 
//     return [...arr1, ...arr2].sort((a, b) => a - b); 
// } 


// ***********************************************************

function reverseString(str) { 

    let reversed = ''; 
  
    for (let i = str.length - 1; i >= 0; i--) { 
  
      reversed += str[i]; 
  
    } 
  
    return reversed; 

} 


// ***********************************************************

function countCharacterOccurrences(str) { 

    const charCount = {}; 
  
    for (let char of str) { 
  
      charCount[char] = (charCount[char] || 0) + 1; 
  
    } 
  
    return charCount; 
  
  } 

// ***********************************************************

function removeDuplicates(arr) { 

  return Array.from(new Set(arr)); 

} 

// ***********************************************************


// ***********************************************************



 

// ***********************************************************



// ***********************************************************


// ***********************************************************



// ***********************************************************


// ***********************************************************



// ***********************************************************


// ***********************************************************



// ***********************************************************


// ***********************************************************

