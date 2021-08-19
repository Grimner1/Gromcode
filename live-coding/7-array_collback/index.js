
// const numberList = [1, 2, 3, 4, 5];

// console.log(numberList);

// input:none
// output: 

// const res = numberList.pop();
// console.log(res);
// console.log(numberList);

// ==============================================

// const numberList2 = [1, 2, 3, 4, 5];

// console.log('before push ', numberList2);
// const res2 = numberList2.push(66);
// console.log(res2);

// console.log('after push ', numberList2);

// ==============================================

// const numberList3 = [1, 2, 3, 4, 5];

// console.log('before shift ', numberList3);
// const res3 = numberList3.shift();
// console.log(res3);

// console.log('after push ', numberList3);

// ==============================================

// const numberList4 = [1, 2, 3, 4, 5];

// console.log('before slice ', numberList4);
// const res4 = numberList4.slice(1, 3);
// console.log(res4);

// console.log('after push ', numberList4);

// ==============================================filter

const anotherNumber = [5, 6, 0, 10, 8, -5, 50, 120];

console.log('before filter ', anotherNumber);

// console.log('before filter ', anotherNumber);

// console.log(res5);

// console.log('after filter ', anotherNumber);

// input: number, index (optional), array (optional)
// output: boolean

// ---------------------------------------------option1

// function filterCallback(element) {
//     console.log(element);

//     if (element > 5) {
//         return true;
//     } else {
//         return false;
//     };
// };
// ---------------------------------------------option1

const filterCallback = element => element > 5;

const filterRes = anotherNumber.filter(el => el > 5);
console.log(filterRes);
console.log('after filter ', anotherNumber);

// --------------------callback

// input: number, number, callback
// output: undefined

// function sum(from, to, print) {
//     let sum = 0;
//     for (let index = from; index <= to; index += 1) {
//         sum += index;
//     }

//     print(sum);
// };


// function printResult(res) {
//     alert(res);
// };

// sum(2, 32, printResult);