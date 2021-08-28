// map:
// input:callback(element, index, array)
// output: changes element

// const callback = (element, index, array) => {
//   element = element * 10;
//   return element;
// };

// console.log(callback(2));

// const mapArrayElements = (arr, callback) => {
//   const newArray = [];
//   arr.map((el, index, arr) => {
//     newArray.push(callback(el, index, arr));
//     console.log(el, index, arr);
//   });

//   return newArray;
// };

// const arr = [2, 4, 5, 10, 100];

// console.log(mapArrayElements(arr, callback));

// const a = [1, '2.268', '  3', '4.2854   ', '   5   ', '6asc', 'afca7', 'wsdvc8sad', '9asvac0'];

// const cleanTransactionsList = (array) => {
//   let newArr = [];
//   array.forEach((el) => {
//     if (typeof el === typeof 1) {
//       let x = el.toFixed(2);
//       newArr.push('$' + x);
//       console.log(x);
//     } else if (isFinite(el)) {
//       let x = +el.trim();
//       x = x.toFixed(2);
//       newArr.push('$' + x);
//       console.log(x);
//     }
//   });

//   return newArr;
// };
// console.log(cleanTransactionsList(a));
// console.log(typeof 1);

// ===============================================Count occurences

// const str = 'dfvsdv dimasdvasdvsddima;lkuhva     l;ASjvdimalasdi;l   aiovpodima ohpovh dimadima ';
// const w = 'dima';

// function countOccurrences(string, word) {
//   if (!Boolean(word)) {
//     return null;
//   }
//   let num = 0;
//   let index = 0;
//   while (string.includes(word, index)) {
//     num += 1;
//     index = string.indexOf(word, index) + word.length;
//     console.log(index);
//   }

//   return num;
// }

// console.log(countOccurrences(str, w));

// ============================================Разбить текст на строки

// let a = 'wqvsadvs dvs34634dvsdvва иваяив2346ативя атив3462 твт';
// let b = 4;
// let string = 654;

// -----------------------------------------don't pass
// function splitText(string, value = 10) {
//   if (typeof string !== typeof 'a') {
//     return null;
//   }

//   let newString = string;
//   const array = [];

//   while (newString.length > 0) {

//     array.push(newString[0].toUpperCase() + newString.slice(1, value));
//     newString = newString.slice(value, newString.length);
//   }
//   return array.join('\n');
// }

// console.log(splitText(string, value));
// console.log(splitText(string));
// ----------------------------------------don't pass

// function splitString(text, len = 10) {
//   if (typeof text !== typeof 'a') {
//     return null;
//   }

//   const strArr = [];
//   let startPosition = 0;

//   while (true) {
//     let chunk = text.substr(startPosition, len);
//     if (chunk.length === 0) {
//       break;
//     }

//     // let x = chunk[0].toUpperCase() + chunk.slice(1);
//     chunk = chunk.padEnd(len, '.');
//     strArr.push(chunk);
//     startPosition += len;
//   }

//   return strArr;
// }

// console.log(splitString(a, b));

// =================================================Собрать объект

// function buildObject(keysList, valuesList) {
//   let obj = {};

//   keysList.forEach(element => {
//     obj[element] = '';

// values.forEach(element => {

// });

//   });
//   console.log(obj);
//   keysList.reduce((a, b, c, d) => console.log(a, b, c, d));
//   keysList.reduce((a, b, c, d) => console.log(a));
//   keysList.reduce((a, b, c, d) => console.log(b));
//   keysList.reduce((a, b, c, d) => console.log(c));
//   keysList.reduce((a, b, c, d) => console.log(d));
// };

// let x = {
//   ttt: 111,
//   vvv: 555,
//   mmm: 333,
// };

// console.log(x);

// let y = {};
// let z = ['f', 'g', 'h'];
// let r = [1, 2, 3];

// // examples
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values);
// ==> { name: 'Bob', address: 'Ukraine', age: 56 }

// buildObject(keys, values);

// ===============================================================Объект в масив пользователей

// const users = {
//   'user-id-1': {
//     name: 'Greg',
//     age: 22,
//   },
//   'user-id-2': {
//     name: 'Sam',
//     age: 12,
//   },
//   'user-id-3': {
//     name: 'L',
//     age: 58,
//   },
//   'user-id-4': {
//     name: 'D',
//     age: 18,
//   },
//   'user-id-5': {
//     name: 'V',
//     age: 118,
//   },
//   'user-id-6': {
//     name: 'Liza',
//     age: 8,
//   },
// }

// -----------------
// index[1].id = index[0]
// -----------------------

// console.log(users);
// const getCustomersList = obj => {
// //   let newObj = {...obj};
//   // const newObj = Object.assign({}, obj);
// //   // console.log(newObj);

// //   let newObj2 = Object.entries(newObj);
// //   newObj2.map(index => index[1].id = index[0]);
// //  console.log(newObj2);
// //   // objToArr.map(index => {

// //   // });

// //   const deleteUserId = newObj2.map(index === [id, user] => index = index[1]);
// //   const sortUsersByAge = deleteUserId.sort((a, b) => a.age - b.age);

// //   return sortUsersByAge;

// return Object.entries(obj).map(([id, user]) => ({id, ...user,})).sort((a, b) => a.age - b.age);
// };

// console.log(getCustomersList(users));

// console.log(users);

// --------------------------------------------Working case
// const getCustomersList = (obj) => {
//   return Object.entries(obj)
//     .map(([id, user]) => ({ id, ...user }))
//     .sort((a, b) => a.age - b.age);
// };

// console.log(getCustomersList(users));
{
  let aaa = 1;
}

const a = [1, 2, 3];
const b = { a: 1, b: 2, c: 3 };
const x = b;
b.xx = 100;
console.log(b);
