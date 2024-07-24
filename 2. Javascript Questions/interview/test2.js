
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be solution(inputArray) = 21.
// 7 and 3 produce the largest product.


let arr = [3, 6, -2, -5, 7, 3];
let largest = 0; 
let seq = [0, 0];

for(let i = 0; i < arr.length - 1; i++) {
    largest = arr[i] * arr[i + 1];
    if (largest < (arr[i] * arr[i + 1])) {
        seq[0] = arr[i]
        seq[1] = arr[i + 1]
    }
}

console.log(seq)




*******************************

rotate 2d array clockwise


