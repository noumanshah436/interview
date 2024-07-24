// function sort(arr) {
//     let length = arr.length;
//     for (var i = 0; i < length - 1; i++) {
//         for (let j = 0; j < length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }

//         }
//     }
//     return arr;
// }

// let arr = [10, 5, 8, 2, 7];
// console.log(arr);

// function scope() {

//     if (true) {

//       var scope1 = `abc`

//       let scope2 = `def`

//       const scope3 = `ghq`

//     }

//     console.log(scope1) // abc

//     // console.log(scope2) // undefined

//     // console.log(scope3) // undefined



//   }


//   scope()





// function add(x) {

//     return function (y) {

//       return x + y;

//     };

//   }



//   var addFive = add(5);

//   var addTen = add(10);



//   console.log(addFive(10)); // 15

//   console.log(addTen(10));  // 20




// let arr = [1, 2, 3];
// let Myr = arr;
// arr = [1, 2, 3, 4];
// // arr = 
// console.log(arr);

// console.log(Myr);


function method(obj1, obj2, num) {
    obj1.prop = "laptop";
    obj2 = { prop: "computer" };
    num = num + 1; 
}

var object1 = {
    prop: "car"
};

var object2 = {
    prop: "bike"
};

var n1 = 10;

method(object1, object2, n1);
console.log(object1); //  {prop: "laptop"}
console.log(object2); //  {prop: "computer"}

console.log(n1); // 10
