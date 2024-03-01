// EXAMPLE 1 - Remove Null or Undefined Values from an Array in Javascript

// ✅ Remove null values from an array
const arr = [
  'one',
  null,
  'two',
  0,
  null,
  undefined,
  'three',
  null,
];

const results = arr.filter(element => {
  return element !== null;
});

console.log(results); // 👉️ [ 'one', 'two', 0, undefined, 'three' ]

// -----------------------------------------------------------

// ✅ Remove null and undefined values from an array

const arr2 = ['a', , 'b', , undefined, 0, 'c', null];

const results2 = arr2.filter(element => {
  return element !== null && element !== undefined;
});

console.log(results2); // 👉️ [ 'a', 'b', 0, 'c' ]

// ------------------------------------------------------------------

// EXAMPLE 2 - Remove all falsy values from an array

// // ✅ Remove all falsy values from an array
// const arr = [
//   null,
//   NaN,
//   'one',
//   null,
//   'two',
//   0,
//   null,
//   undefined,
//   'three',
//   null,
// ];

// const results = arr.filter(element => {
//   return element;
// });

// console.log(results); // 👉️ [ 'one', 'two', 'three' ]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Creating a reusable function

// function removeNull(array) {
//   return array.filter(element => {
//     return element !== null;
//   });
// }

// const arr = [
//   'one',
//   null,
//   'two',
//   0,
//   null,
//   undefined,
//   'three',
//   null,
// ];

// const result = removeNull(arr);
// console.log(result); // 👉️ [ 'one', 'two', 0, undefined, 'three' ]

// ------------------------------------------------------------------

// // EXAMPLE 4 - Remove all null values from an array using Array.forEach()

// const arr = ['one', null, 'two', null, 'three', null];

// const results = [];

// arr.forEach(element => {
//   if (element !== null) {
//     results.push(element);
//   }
// });

// console.log(results); // 👉️ ['one', 'two', 'three']

// ------------------------------------------------------------------

// EXAMPLE 5 - Remove Empty (nullish) Elements from an Array in JavaScript

// const arr = [
//   'one',
//   null,
//   'two',
//   undefined,
//   'three',
//   null,
//   undefined,
// ];

// const results = arr.filter(element => {
//   return element !== null && element !== undefined;
// });

// console.log(results); // 👉️ [ 'one', 'two', 'three' ]

// ------------------------------------------------------------------

// // EXAMPLE 6 - Remove all `null` values from an array using a `for` loop

// const arr = [
//   'one',
//   'two',
//   null,
//   undefined,
//   0,
//   'three',
//   null,
//   undefined,
// ];

// // ✅ Remove null values from an array

// const results1 = [];

// for (let index = 0; index < arr.length; index++) {
//   if (arr[index] !== null) {
//     results1.push(arr[index]);
//   }
// }

// // 👇️ [ 'one', 'two', undefined, 0, 'three', undefined ]
// console.log(results1);

// // -----------------------------------------------

// // ✅ Remove null and undefined values from an array

// const results2 = [];

// for (let index = 0; index < arr.length; index++) {
//   if (arr[index] !== null && arr[index] !== undefined) {
//     results2.push(arr[index]);
//   }
// }

// // 👇️ [ 'one', 'two', 0, 'three' ]
// console.log(results2);
