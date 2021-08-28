// input: array, func
// output: array

// callback:
// input: element, index, array
// output: boolean

// algo:
// 1. create emty array
// 2. iterate arr
// 3. apply callback for every el
// 4. push el to the res if callback treu

// OPTION 1

// const filterArrayElements = (arr, callback) => {
//   const res = [];

//   for (let index = 0; index < arr.length; index += 1) {
//     const callbackRes = callback(arr[index], index, arr);
//     if (callbackRes) {
//       res.push(arr[index]);
//     }
//   }

//   return res;
// };

// OPTION 2

const filterArrayElements = (arr, callback) => {
  const res = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index], index, arr)) {
      res.push(arr[index]);
    }
  }

  return res;
};

// test data #1
const testEl = [1, 2, 3, 4, 5, 6, 7, 8, 0];

function callback(element, index, array) {
  if (element > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(filterArrayElements(testEl, callback));

// test data #2

const array = [10, 5, 4, 6, 9, 99, 1, 108, 1111, -4];

// OPTION 1

// const func = (el, index, arr) => {
//   if (el > 7) {
//     return true;
//   } else {
//     return false;
//   }
// };

// OPTION 2

const func = (el, index, arr) => el > 7;

console.log(filterArrayElements(array, func));

// test data 3

const array2 = [10, 5, 4, 6];

const func2 = (el, index, arr) => {
  if (arr.length < 5) {
    return true;
  }

  return el > 7;
};

console.log(filterArrayElements(array2, func2));
